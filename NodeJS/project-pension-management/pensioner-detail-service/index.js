const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const Pensioner = require("./Pensioner");
const isAuthenticated = require("../isAuthenticated");
app.use(express.json());
var channel, connection;

mongoose.connect(
  "mongodb://localhost:27017/pensioner-detail-service",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`pensioner detail service DB  Connected`);
  }
);

async function connect() {
  const amqpServer = "amqp://localhost:5672";
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("PENSIONER");
}

connect();
// create a new product
// buy a new product

app.post("/pensioner/create", isAuthenticated, async (req, res) => {
  const { aadhaar,name, dob, pan, salary, allowances, selfOrFamily, bankDetails} = req.body;
  const newPensioner = new Pensioner({
    aadhaar,
    name,
  dob,
  pan,
  salary,
  allowances,
  selfOrFamily,
  bankDetails
  });
  newPensioner.save();
  return res.json(newPensioner);
});

app.get("/allpensioners", async (req, res) => {
  try {
    const pensioners = await Pensioner.find();
    res.json(pensioners);
  } catch (err) {
    res.json(err);
  }
});

app.get("/pensioner/:aadhaar", async (req, res) => {
  const aadhaar = req.params.aadhaar;

  try {
    const pensioner = await Pensioner.find({aadhaar : aadhaar }, req.body);
    res.json(pensioner);
  } catch (error) {
    res.json(error);
  }
});

// user will send a lift of the products that the user wants to buy , they will be identified by the product id
// the order will be created of those products and the sum of the products prices will be the total billing amount

// app.post("/product/buy", isAuthenticated, async (req, res) => {
//   const { ids } = req.body;
//   const products = await Product.find({ _id: { $in: ids } });

//   channel.sendToQueue(
//     "ORDER",
//     Buffer.from(
//       JSON.stringify({
//         products,
//         userEmail: req.user.email,
//       })
//     )
//   );
//   channel.consume("PRODUCT", data => {
//     console.log("consuming product queue");
//      order = JSON.parse(data.content);
//      channel.ack(data);
//   })
//   return res.json(order)
// });

app.listen(5001, () => {
  console.log(`product service is working at port 5001`);
});