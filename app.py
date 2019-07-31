from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_heroku import Heroku
import os

app = Flask(__name__)
heroku = Heroku(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "app.sqlite")

CORS(app)

db = SQLAlchemy(app)
ma = Marshmallow(app)

#We need to decide names of our tables/classes
class Product(db.Model):
    __tablename__ = "products"
    product_id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(50))
    product_price = db.Column(db.Float(500))

    def __init__(self, product_name, product_price):
        self.product_name = product_name
        self.price = price

class ProductSchema(ma.Schema):
    class Meta:
        fields = ("id", "product_name", "product_price")

product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

@app.route("/") #root page
def greeting():
    return "<h1>Donut shop API in construction...</h1>" #displayed hello in the homepage or root

@app.route("/products",methods=["GET"])
def get_products():
    all_products = Product.query.all()
    result = products_schema.dump(all_products)
    return jsonify(result.data)


if __name__ =="__main__":
    app.debug = True
    app.run()    