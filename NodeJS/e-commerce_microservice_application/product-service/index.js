const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const Product= require('./Product');
const isAuthenticated = require('../isAuthenticated');
app.use(express.json());
var channel, connection;

mongoose.connect(
    "mongodb://localhost:27017/product-service",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log(`product service DB  Connected`);
    }
  );

  async function connect(){
    const amqpServer = "amqp://localhost:5672"
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("PRODUCT")

  }
  connect();

  //create a new product
  //buy a new product

  app.post("/product/create", isAuthenticated, async (req, res) => {
    const {name, description, price} = req.body;
    const newProduct = new Product({
      name,
      description,
      price
    });
    return res.json(newProduct);
  })

  app.post("/product/buy", isAuthenticated, async (req, res) => {
    const [ids] = req.body;
    const products = await Product.find(_id, { $in: ids});

    channel.sendToQueue("ORDER", 
    Buffer.from(
      JSON.stringify({
      products,
      userEmail: req.user.email,
    })
    )
    );
  });

app.listen(5001, () => {
    console.log(`product service is working at port 5001`);
});