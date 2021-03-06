import { useEffect, useState } from "react";

import useStore, { trafficTypeOptions, accessTypeOptions, domainOptions } from "../lib/store"

import MonthlyChart from './charts/MonthlyChart';
import HourlyChart from "./charts/HourlyChart";
import FormGroup from "../components/FormGroup";
import { prefix } from "../lib/prefix";
import Picker from "./Picker";
import Slider from "./Slider";
import moment from "moment";


export default function Visualisation() {
  const state = useStore()
  const { currentHour, setCurrentHour } = useStore(state => ({ currentHour: state.currentHour, setCurrentHour: state.setCurrentHour }))
  const { hourlyData, setHourlyData } = useStore(state => ({ hourlyData: state.hourlyData, setHourlyData: state.setHourlyData }))
  const { monthlyData, setMonthlyData } = useStore(state => ({ monthlyData: state.monthlyData, setMonthlyData: state.setMonthlyData }))

  const defaultDays = [
    "2019-09-01",
  ]

  const defaultMonths = [
    "2019-09",
  ]

  const [selectedDates, setSelectedDates] = useState(defaultDays)
  const [selectedMonths, setSelectedMonths] = useState(defaultMonths)

  const availableMonths = [
    "-",
    "2018-09",
    "2019-08",
    ...defaultMonths,
  ]

  const availableDays = [
    "-",
    ...defaultDays,
    ...selectedMonths.map((yearMonth) => ({
      prefix: yearMonth,
      daysInMonth: moment(yearMonth, "YYYY-MM").daysInMonth()
    })).map((yearMonthDays) => [
      ...[...Array(yearMonthDays.daysInMonth).keys()].map(
        day => yearMonthDays.prefix + "-" + (day + 1).toString().padStart(2, "0")
      )
    ]).flatMap(x => x),
  ]

  const selectedTypes = (checkboxType) => Object.entries(state[checkboxType]).filter((kv) => kv[1]).map((kv) => kv[0])

  const updateMonthly = () => {
    for (const d in selectedMonths) {
      const selectedMonth = selectedMonths[d]
      const year = parseInt(selectedMonth.substring(0, 4))
      const month = parseInt(selectedMonth.substring(5, 7))
      fetchMonthly(year, month)
    }
  }

  const updateHourly = () => {
    for (const d in selectedDates) {
      const selectedDate = selectedDates[d]
      const year = parseInt(selectedDate.substring(0, 4))
      const month = parseInt(selectedDate.substring(5, 7))
      const day = parseInt(selectedDate.substring(8, 10))
      fetchHourly(year, month, day)
    }
  }

  useEffect(() => {
    updateHourly()
  }, [state.trafficType, state.accessType, state.domains, currentHour, selectedDates, selectedMonths])

  useEffect(() => {
    updateMonthly()
  }, [state.trafficType, state.accessType, state.domains, selectedMonths])

  const fetchHourly = (year, month, day) => {
    const paddedMonthDay = [month, day].map(x => x.toString().padStart(2, "0"))
    const encodedYearMonthDay = [year.toString(), ...paddedMonthDay].join("-")

    const selectedTrafficTypes = selectedTypes("trafficType")
    const selectedAccessTypes = selectedTypes("accessType")
    const selectedDomain = selectedTypes("domains")

    var promises = []
    for (const trafficType of selectedTrafficTypes) {
      for (const accessType of selectedAccessTypes) {
        for (const domain of selectedDomain) {
          const fileName = encodedYearMonthDay + ".json"
          const url = prefix + "/data/hourly/" + [trafficType, accessType, domain, fileName].join("/")

          promises.push(fetch(url).then((response) => response.json()))
        }
      }
    }

    Promise.all(promises).then(responses => {
      var result = {}
      for (const response of responses) {
        for (const hour in response) {
          if (!(hour in result)) {
            result[hour] = []
          }
        }
        for (const hour in response) {
          result[hour] = [...result[hour], ...response[hour]]
        }
      }

      for (const hour in Object.keys(result)) {
        result[hour] = result[hour].sort((x, y) => {
          if (x.y < y.y) {
            return 1;
          } else if (x.y > y.y) {
            return -1;
          } else {
            return 0;
          }

        })
      }

      setHourlyData(encodedYearMonthDay, result)
    })

  }

  const fetchMonthly = (year, month) => {
    const selectedTrafficTypes = selectedTypes("trafficType")
    const selectedAccessTypes = selectedTypes("accessType")
    const selectedDomain = selectedTypes("domains")

    const encodedYearMonth = year.toString() + "-" + month.toString().padStart(2, "0")

    var promises = []
    for (const trafficType of selectedTrafficTypes) {
      for (const accessType of selectedAccessTypes) {
        const checkedDomains = selectedDomain.includes("All") ? domainOptions : selectedDomain
        for (const domain of checkedDomains) {
          const fileName = encodedYearMonth + ".json"
          const url = prefix + "/data/monthly/" + [trafficType, accessType, domain, fileName].join("/")
          promises.push(fetch(url).then((response) => response.json()))
        }
      }
    }

    Promise.all(promises).then(responses => {
      var result = {}
      for (const resp in responses) {
        const response = responses[resp]
        for (const point in response) {
          const p = response[point];
          if (!(p.x in result)) {
            result[p.x] = p.y
          } else {
            result[p.x] += p.y
          }
        }
      }

      const newMonthlyData = Object.entries(result).map((kv) => ({ x: kv[0], y: kv[1] })).sort((x, y) => {
        if (x.x < y.x) {
          return -1;
        } else if (x.x > y.x) {
          return 1;
        } else {
          return 0;
        }
      })

      setMonthlyData(encodedYearMonth, newMonthlyData)
    })
  }

  const paddedHour = String(currentHour).padStart(2, '0')

  return (
    <div className="grid grid-cols-1 md:grid-cols-8 md:gap-10 mx-6 md:mx-0">
      <div className="md:col-span-6">
        <MonthlyChart data={monthlyData} selectedMonths={selectedMonths} />

        <div className="mt-6">
          <HourlyChart data={hourlyData} selectedDates={selectedDates} currentHour={currentHour} />
          <p className="mt-4 text-xs text-justify mx-14">
            The sorted distribution of page views. The x-axis represents the
            pages and the y-axis shows the page views. The pages are sorted
            according to their number of views, and their titles are left out as
            the focus is on the distribution. The plot is log-log to highlight
            the power law distribution - few pages have many views (top-left
            corner) while many pages only have few views (bottom-right corner).
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:col-span-2">
        <div className="mb-4">
          <span className="text-gray-700 font-medium">Year &amp; month</span>

          <Picker
            options={availableMonths}
            defaultOptions={defaultMonths}
            onChange={(newValues) => setSelectedMonths(newValues)}
          />
        </div>

        <div className="mb-4">
          <span className="text-gray-700 font-medium">Days</span>

          <Picker
            options={availableDays}
            defaultOptions={defaultDays}
            onChange={(newValues) => {
              setSelectedDates(newValues)
            }}
          />
        </div>

        <div className="my-4">
          <span className="text-gray-700 font-medium">Hour ({paddedHour}:00 - {paddedHour}:59)</span>

          <div className="mx-2 my-2">
            <Slider defaultValue={currentHour} min={0} max={23} step={1} onChange={(value) => setCurrentHour(value)} />
          </div>
        </div>

        <FormGroup groupName="trafficType" prettyName="Traffic type" options={trafficTypeOptions} />
        <FormGroup groupName="accessType" prettyName="Access type" options={accessTypeOptions} />
        <FormGroup groupName="domains" prettyName="Domain" options={domainOptions} />
      </div>
    </div>
  )
}