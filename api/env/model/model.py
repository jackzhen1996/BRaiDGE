import pandas as pd

#get all rows that matched county
#use to get all coordinates based on county
#Inputs:
#String county, DataFrame data
#Output: JSON 
def getRowsBasedOnCounty(county, data):
  rows =  (data.loc[data['county_name'] ==  county])
  return rows[['latitude','longitude','structure_kind_43a','structure_type_43b','structure_number_008']].to_json(orient = 'records')

#get single row that matched latitude, returned only selected columns
#use this in full page view
#Inputs:
#Int lat, DataFrame data
#Output: JSON 
def getRowBasedOnLat(lat,data):
  row = (data.loc[data['latitude'] ==  lat])
  return row.to_json(orient = 'records')

#get singlow row that matched latitude, return only selected columns
#use this in preview box
def getPreviewBasedOnLat(lat,data):
  rows = (data.loc[data['latitude'] ==  lat])
  return rows[['structure_type_43b','structure_kind_43a']].to_json(orient = 'records')