import pandas as pd

def getRowsBasedOnCounty(county, data):
  return (data.loc[data['county_names'] ==  county]).to_json(orient = 'records')

