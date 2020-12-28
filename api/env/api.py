import time
from flask import Flask,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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

if __name__ == '__main__':
    app.run(debug = True, port = 5000)


