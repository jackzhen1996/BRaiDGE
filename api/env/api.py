import time
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#test route: returns a dummy object
@app.route('/time')
def get_current_time():
    return {'time': 'received a'}


