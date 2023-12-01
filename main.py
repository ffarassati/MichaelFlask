from flask_restful import Api
from app_server import app
from endpoints.home import Home

api = Api(app)
api.add_resource(Home, '/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=82, debug=True)
    
