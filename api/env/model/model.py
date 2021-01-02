import pandas as pd

#get all rows that matched county
#use to get all coordinates based on county
#Inputs:
#String county, DataFrame data
#Output: JSON 
def getRowsBasedOnCounty(county, data):
  rows =  (data.loc[data['county_name_c'] ==  county])
  return rows[['latitude','longitude']].to_json(orient = 'records')

#get single row that matched latitude, returned only selected columns
#use this in full page view
#Inputs:
#Int lat, DataFrame data
#Output: JSON 
def getRowBasedOnLat(lat,data):
  rows = (data.loc[data['latitude'] ==  lat]).drop(['latitude','longitude'], axis = 1)
  return rows.to_json(orient = 'records')