from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__, static_url_path='',  static_folder='public')

CORS(app, origins="*", send_wildcard=True)
authorizations = {
    'Basic Auth': {
        'type': 'basic',
        'in': 'header',
        'name': 'Authorization'
    },
    'apikey': {
        'type': 'apiKey',
        'in': 'header',
        'name': 'Authorization',
        'description': "Type in the *'Value'* input box below: **' &lt;JWT&gt;'**, where JWT is the token"
    }
}

app.config.from_object('config.Config')

db = SQLAlchemy(app)
