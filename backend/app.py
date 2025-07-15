from flask import Flask, jsonify, request
from data import db, Kullanici

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123@192.168.1.115:5432/test_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/kullanicilar', methods=['GET'])
def selamla():
    kullanicilar = Kullanici.query.all()  # liste gelir
    # Her birini dict'e çeviriyoruz
    return jsonify([k.to_dict() for k in kullanicilar])

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    kullanici = Kullanici.query.filter_by(username=ussername).first()

    if kullanici and kullanici.password == password:
        return jsonify({"message": "Giriş başarılı", "username": kullanici.username})
    else:
        return jsonify({"message": "Kullanıcı adı veya şifre yanlış"}), 401


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

