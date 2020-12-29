import pickle 
from flask import Flask,request, jsonify
from flask_cors import CORS
from model.model import getRowsBasedOnCounty

app = Flask(__name__)

#test route: returns a dummy object
@app.route('/time')
def get_current_time():
    return {'time': 'time received!'}

#test route: submits search returns response
@app.route('/search', methods = ['POST'])
def post_search():
    req_data = request.get_json()
    location = req_data['location']
    if (location == 'san diego'):
        latitude = 32.806445
        longitude = -117.135476
    if (location == 'san francisco'):
        latitude = 37.725170
        longitude = -122.438336

    return {"latitude": latitude, "longitude":longitude}

    
@app.route('/testData', methods = ['POST'])
def getRow():
    #get requst body
    req_data = request.get_json()
    county = req_data['location']

    #open up bin file that contains the model
    with open('./model/model.bin', 'rb') as f_in:
        model = pickle.load(f_in)
        f_in.close()

    #pass arguments into function to get output
    result = getRowsBasedOnCounty(county,model)

    #return output
    return result

if __name__ == '__main__':
    app.run(debug = True, host= '0.0.0.0', port = 5000)


