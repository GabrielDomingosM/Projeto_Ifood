from flask import Flask
from database.db import db
from routes.routeIndex import routeIndex
from flask_cors import CORS
class MyServer():
    def __init__(self) -> None:
        self.app = Flask(__name__)
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:''@localhost/ifood'
        db.init_app(self.app)
        routeIndex(self.app)

    def run(self):
        self.app.run(port=300, debug=True, host='localhost')

app = MyServer()
app.run()