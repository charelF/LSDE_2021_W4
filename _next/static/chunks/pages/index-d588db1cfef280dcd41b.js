(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4570:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(1508),a=n(7294),i=n(2809),o=n(4671);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=["spider","user"],l=["desktop","mobile-app","mobile-web"],f=["en.wikipedia","de.wikipedia","fr.wikipedia","es.wikipedia","ru.wikipedia","zh.wikipedia"],d=function(e){return e.reduce((function(e,t){return c(c({},e),{},(0,i.Z)({},t,!1))}),{})},m=(0,o.Z)((function(e){return{trafficType:c(c({},d(u)),{},{user:!0}),accessType:c(c({},d(l)),{},{desktop:!0}),domains:c(c({},d(f)),{},{"en.wikipedia":!0}),setCheckbox:function(t,n,r){return e((function(e){return c(c({},e),{},(0,i.Z)({},t,c(c({},e[t]),{},(0,i.Z)({},n,r))))}))},currentHour:11,setCurrentHour:function(t){return e((function(e){return c(c({},e),{},{currentHour:t})}))},hourlyData:{},setHourlyData:function(t,n){return e((function(e){return c(c({},e),{},{hourlyData:c(c({},e.hourlyData),{},(0,i.Z)({},t,n))})}))},monthlyData:{},setMonthlyData:function(t,n){return e((function(e){return c(c({},e),{},{monthlyData:c(c({},e.monthlyData),{},(0,i.Z)({},t,n))})}))}}})),h=n(7379),p=n(5893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){var t,n=e.data,a=e.selectedMonths;if(null===n||void 0===n)return(0,p.jsx)("p",{children:"Loading data..."});if(0===n.length)return(0,p.jsx)("p",{children:"No data available."});var o=Object.values(n).map((function(e){return e.length})),s=Object.keys(n)[o.indexOf(Math.max.apply(Math,(0,r.Z)(o)))],c=[];if(n[s])for(var u=0;u<n[s].length;u+=Math.floor(n[s].length/8)){var l=100*parseInt(n[s][u].x.substring(8,10));c.push(l)}var f=a.filter((function(e){return e in n})).map((function(e){return{id:e,data:n[e].map((function(e){return y(y({},e),{},{x:100*parseInt(e.x.substring(8,10))+parseInt(e.x.substring(11))})}))}}));return 0===f.map((function(e){return e.data.length})).reduce((function(e,t){return e+t}),0)?(0,p.jsx)("p",{className:"text-center my-60 font-medium",children:"No available data."}):(0,p.jsx)("div",{style:{width:"100%",height:300},children:(0,p.jsx)(h.Y4,(t={margin:{bottom:50,left:60,right:30},colors:{scheme:"nivo"},animate:!0,data:f,enableSlices:"x",gridXValues:c,enablePoints:!1,axisLeft:{legend:"Total views",legendOffset:12},axisBottom:{tickValues:c,format:function(e){return"Day "+(e/100).toString()},legend:"Day of the month",legendOffset:-12},useMesh:!0},(0,i.Z)(t,"enableSlices",!1),(0,i.Z)(t,"legends",[{anchor:"bottom",direction:"row",justify:!1,translateY:50,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)"}]),t))})}function b(e){var t,n=e.data,r=e.selectedDates,a=e.currentHour;if(!n||0===n.length)return(0,p.jsx)("p",{children:"Loading data..."});var o=r.filter((function(e){return e in n})).map((function(e){var t=[],r=0;if(n[e][a]){for(var i=0;i<n[e][a].length;i++)r+=n[e][a][i].x,t.push(r);return{id:e,data:n[e][a].map((function(e,n){return{y:e.y,x:t[n]}}))}}return{id:e,data:[]}}));return 0===o.map((function(e){return e.data.length})).reduce((function(e,t){return e+t}),0)?(0,p.jsx)("p",{className:"text-center my-40 font-medium",children:"No available data."}):(0,p.jsx)("div",{style:{width:"100%",height:300},children:(0,p.jsx)(h.Y4,{margin:{top:10,bottom:50,left:60,right:30},animate:!0,type:"point",data:o,colors:{scheme:"nivo"},enablePoints:!1,gridXValues:[.1,10,100,1e3,1e4,1e5,1e6],gridYValues:[0,10,100,1e3,1e4,1e5,1e6],xScale:{type:"log",base:10,max:"auto",min:1},yScale:(t={type:"symlog",base:10,max:"auto",reverse:!0},(0,i.Z)(t,"max",0),(0,i.Z)(t,"min",1e5),t),axisBottom:{tickValues:[.1,10,100,1e3,1e4,1e5,1e6],legend:"Page",legendOffset:-12},axisLeft:{tickValues:[0,10,100,1e3,1e4,1e5,1e5],legend:"Total views",legendOffset:12},useMesh:!0,legends:[{anchor:"bottom",direction:"row",justify:!1,translateY:50,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:95,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)"}]})})}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){var t=e.label,n=e.isChecked,r=e.onCheckboxChange;return(0,p.jsxs)("label",{className:"inline-flex items-center cursor-pointer select-none",children:[(0,p.jsx)("input",{type:"checkbox",className:"cursor-pointer rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-5",checked:n,name:t,onChange:r}),(0,p.jsx)("span",{className:"ml-2",children:t})]})}function O(e){var t=e.groupName,n=e.prettyName,r=e.options,a=m((function(e){return e.setCheckbox})),o=m((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e[t])})),s=Object.values(o).reduce((function(e,t){return e&&t}),!0);return(0,p.jsxs)("div",{className:"mb-4",children:[(0,p.jsx)("span",{className:"text-gray-700 font-medium",children:n}),(0,p.jsxs)("div",{className:"mt-2",children:[(0,p.jsx)("div",{children:(0,p.jsx)(j,{label:"All",isChecked:s,onCheckboxChange:function(e){return r.map((function(e){a(t,e,!s)}))}},t+"-all")}),r.map((function(e){return(0,p.jsx)("div",{children:(0,p.jsx)(j,{label:e,isChecked:o[e],onCheckboxChange:function(e){return a(t,e.target.name,!o[e.target.name])}},t+"-"+e)})}))]})]})}var w=n(2291),D=n(6010);function N(e){var t=e.options,n=e.defaultOptions,i=void 0===n?[]:n,o=e.onChange,s=void 0===o?function(){}:o,c=(0,a.useState)(i),u=c[0],l=c[1];return(0,p.jsxs)("div",{children:[(0,p.jsx)("select",{selected:"-",className:(0,D.Z)("block","w-full","mt-1","rounded-md","border-gray-300","shadow-sm","focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"),onChange:function(e){if("-"!==e.target.value){var t=[].concat((0,r.Z)(u),[e.target.value]);l(t),s(t)}},children:t.filter((function(e){return!u.includes(e)})).map((function(e,t){return(0,p.jsx)("option",{children:e},t)}))}),(0,p.jsx)("div",{className:"pt-2 select-none",children:u.sort().map((function(e,t){return(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:(0,D.Z)("inline-flex","items-center","px-3","py-1","text-xs","font-bold","leading-sm","bg-indigo-200","text-indigo-700","rounded-full"),children:[(0,p.jsx)("span",{className:"pr-1",children:e}),(0,p.jsx)("span",{className:"cursor-pointer",onClick:function(){var t=u.filter((function(t){return t!==e}));l(t),s(t)},children:(0,p.jsx)(w.Z,{size:16})})]})},t)}))})]})}function k(e){var t=e.defaultValue,n=e.min,r=e.max,i=e.step,o=e.onChange,s=(0,a.useState)(t),c=s[0],u=s[1];return(0,p.jsx)("div",{className:"range-slider",children:(0,p.jsx)("input",{className:"range-slider__range",type:"range",value:c,min:n,max:r,step:i,onChange:function(e){var t=e.target.value;u(t),o(t)}})})}function S(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(){var e=m(),t=m((function(e){return{currentHour:e.currentHour,setCurrentHour:e.setCurrentHour}})),n=t.currentHour,i=t.setCurrentHour,o=m((function(e){return{hourlyData:e.hourlyData,setHourlyData:e.setHourlyData}})),s=o.hourlyData,c=o.setHourlyData,d=m((function(e){return{monthlyData:e.monthlyData,setMonthlyData:e.setMonthlyData}})),h=d.monthlyData,g=d.setMonthlyData,y=["2019-09-01"],v=["2019-09"],j=(0,a.useState)(y),w=j[0],D=j[1],P=(0,a.useState)(v),C=P[0],_=P[1],Z=["-","2018-09","2019-08"].concat(v),T=["-"].concat(y,(0,r.Z)((0,r.Z)(Array(30).keys()).map((function(e){return"2019-09-"+(e+1).toString().padStart(2,"0")})).filter((function(e){return!y.includes(e)})))),E=function(t){return Object.entries(e[t]).filter((function(e){return e[1]})).map((function(e){return e[0]}))};(0,a.useEffect)((function(){!function(){for(var e in w){var t=w[e],n=parseInt(t.substring(0,4)),r=parseInt(t.substring(5,7)),a=parseInt(t.substring(8,10));H(n,r,a)}}()}),[e.trafficType,e.accessType,e.domains,n,w,C]),(0,a.useEffect)((function(){!function(){for(var e in C){var t=C[e],n=parseInt(t.substring(0,4)),r=parseInt(t.substring(5,7));M(n,r)}}()}),[e.trafficType,e.accessType,e.domains,C]);var H=function(e,t,n){var a,i=[t,n].map((function(e){return e.toString().padStart(2,"0")})),o=[e.toString()].concat((0,r.Z)(i)).join("-"),s=E("trafficType"),u=E("accessType"),l=E("domains"),f=[],d=S(s);try{for(d.s();!(a=d.n()).done;){var m,h=a.value,p=S(u);try{for(p.s();!(m=p.n()).done;){var g,y=m.value,x=S(l);try{for(x.s();!(g=x.n()).done;){var b="/LSDE_2021_W4/data/hourly/"+[h,y,g.value,o+".json"].join("/");f.push(fetch(b).then((function(e){return e.json()})))}}catch(v){x.e(v)}finally{x.f()}}}catch(v){p.e(v)}finally{p.f()}}}catch(v){d.e(v)}finally{d.f()}Promise.all(f).then((function(e){var t,n={},a=S(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;for(var s in i)s in n||(n[s]=[]);for(var u in i)n[u]=[].concat((0,r.Z)(n[u]),(0,r.Z)(i[u]))}}catch(v){a.e(v)}finally{a.f()}for(var l in Object.keys(n))n[l]=n[l].sort((function(e,t){return e.y<t.y?1:e.y>t.y?-1:0}));c(o,n)}))},M=function(e,t){var n,r=E("trafficType"),a=E("accessType"),i=E("domains"),o=e.toString()+"-"+t.toString().padStart(2,"0"),s=[],c=S(r);try{for(c.s();!(n=c.n()).done;){var u,l=n.value,d=S(a);try{for(d.s();!(u=d.n()).done;){var m,h=u.value,p=S(i.includes("All")?f:i);try{for(p.s();!(m=p.n()).done;){var y="/LSDE_2021_W4/data/monthly/"+[l,h,m.value,o+".json"].join("/");s.push(fetch(y).then((function(e){return e.json()})))}}catch(x){p.e(x)}finally{p.f()}}}catch(x){d.e(x)}finally{d.f()}}}catch(x){c.e(x)}finally{c.f()}Promise.all(s).then((function(e){var t={};for(var n in e){var r=e[n];for(var a in r){var i=r[a];i.x in t?t[i.x]+=i.y:t[i.x]=i.y}}var s=Object.entries(t).map((function(e){return{x:e[0],y:e[1]}})).sort((function(e,t){return e.x<t.x?-1:e.x>t.x?1:0}));g(o,s)}))},A=String(n).padStart(2,"0");return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-8 md:gap-10",children:[(0,p.jsxs)("div",{className:"md:col-span-6",children:[(0,p.jsx)(x,{data:h,selectedMonths:C}),(0,p.jsxs)("div",{className:"mt-6",children:[(0,p.jsx)(b,{data:s,selectedDates:w,currentHour:n}),(0,p.jsx)("p",{className:"mt-4 text-xs text-justify mx-14",children:"The sorted distribution of page views. The x-axis represents the pages and the y-axis shows the page views. The pages are sorted according to their number of views, and their titles are left out as the focus is on the distribution. The plot is log-log to highlight the power law distribution - few pages have many views (top-left corner) while many pages only have few views (bottom-right corner)."})]})]}),(0,p.jsxs)("div",{className:"mt-10 md:mt-0 md:col-span-2",children:[(0,p.jsxs)("div",{className:"mb-4",children:[(0,p.jsx)("span",{className:"text-gray-700 font-medium",children:"Year & month"}),(0,p.jsx)(N,{options:Z,defaultOptions:v,onChange:function(e){return _(e)}})]}),(0,p.jsxs)("div",{className:"mb-4",children:[(0,p.jsx)("span",{className:"text-gray-700 font-medium",children:"Days"}),(0,p.jsx)(N,{options:T,defaultOptions:y,onChange:function(e){D(e)}})]}),(0,p.jsxs)("div",{className:"my-4",children:[(0,p.jsxs)("span",{className:"text-gray-700 font-medium",children:["Hour (",A,":00 - ",A,":59)"]}),(0,p.jsx)("div",{className:"mx-2 my-2",children:(0,p.jsx)(k,{defaultValue:n,min:0,max:23,step:1,onChange:function(e){return i(e)}})})]}),(0,p.jsx)(O,{groupName:"trafficType",prettyName:"Traffic type",options:u}),(0,p.jsx)(O,{groupName:"accessType",prettyName:"Access type",options:l}),(0,p.jsx)(O,{groupName:"domains",prettyName:"Domain",options:f})]})]})})}function _(){return(0,p.jsx)("ul",{className:"my-8",children:[{name:"Aleksander Janczewski",link:"https://www.linkedin.com/in/aleksander-janczewski/",image:"/LSDE_2021_W4/authors/alex.jpeg"},{name:"Gilles Magalhaes",link:"https://www.linkedin.com/in/gilles-magalhaes-ribeiro/",image:"/LSDE_2021_W4/authors/gilles.jpeg"},{name:"Charel Felten",link:"https://www.linkedin.com/in/charel-felten/",image:"/LSDE_2021_W4/authors/charel.jpeg"}].map((function(e,t){return(0,p.jsx)("li",{className:"inline px-4",children:(0,p.jsxs)("a",{href:e.link,className:"text-indigo-400 hover:text-indigo-800",children:[(0,p.jsx)("img",{src:e.image,className:"inline-block h-8 w-8 rounded-full ring-2 ring-white"}),(0,p.jsx)("span",{className:"pl-3 font-medium",children:e.name})]})},t)}))})}function Z(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{className:"text-2xl font-medium",children:"LSDE 2021: DDoS Detection (M4)"}),(0,p.jsx)(_,{}),(0,p.jsx)(C,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4570)}])}},function(e){e.O(0,[774,739,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);