from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Kullanici(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"<Kullanici {self.username}>"
    
    

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email
        }
