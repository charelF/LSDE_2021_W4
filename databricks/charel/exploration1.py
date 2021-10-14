# Databricks notebook source
# MAGIC %md
# MAGIC 
# MAGIC #### visualisations:
# MAGIC - visualisations: https://docs.databricks.com/notebooks/visualizations/index.html
# MAGIC - dashboards (combination of graphs): https://docs.databricks.com/notebooks/dashboards.html
# MAGIC - interactive tables: https://docs.databricks.com/notebooks/widgets.html

# COMMAND ----------

from pyspark.sql.functions import col, count, desc, asc

# COMMAND ----------

# MAGIC %sh
# MAGIC ls -lhS /dbfs/mnt/group09

# COMMAND ----------

df = spark.read.parquet("/mnt/group09/pageviews-20190907-user.parquet")

# COMMAND ----------

df.show(10)

# COMMAND ----------

query = df.groupby("hour").sum("count").orderBy(asc("hour"))

# COMMAND ----------

query.show()

# COMMAND ----------

display(query)

# COMMAND ----------

# import pandas as pd

# pandasdf = pd.read_parquet("/dbfs/mnt/group09/cleansample.parquet")

# pandasdf

# COMMAND ----------


