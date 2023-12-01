from flask_restful import Resource
from flask import send_from_directory

class Home(Resource):
    def get(self):
        return send_from_directory('public', 'index.html')
                    