const express = require("express");
const app = express();
const mongoose = require("mongoose");
const amqp = require("amqplib");
//const Product= require('./Product');
const isAuthenticated = require('../isAuthenticated');
app.use(express.json());
var channel, connection;
const {Pension} = require('./Pension');


mongoose.connect(
    "mongodb://localhost:27017/process-service",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log(`process service DB  Connected`);
    }
  );

  async function connect(){
    const amqpServer = "amqp://localhost:5672"
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("PENSION")


    function createPension(pensioners, aadhaar){
      let newPensionAmount = 0;
      for(t=0; t<pensioners.length; ++t) {
        if (pensioners[t].selfOrFamily == "Self")
        {
            newPensionAmount = (pensioners[t].salary * 0.8) + pensioners[t].allowances
        }
        else if (pensioners[t].selfOrFamily == "Family")
        {
            newPensionAmount = (pensioners[t].salary * 0.5) + pensioners[t].allowances
        }
      }
      const newOPension = new Pension({
        pensioners,
        pensionAmount: newPensionAmount,
        bankServiceCharge: 500
    });
    newPension.save();
    return newPension;
  }
  }
  connect().then(() => {
    channel.consume("PENSION", data => {
      const {pensions, aadhaar} = JSON.parse(data.content);
      const newPension = createPension(pensions, aadhaar)
      console.log("consuming pension queue")
      console.log(pensions);
      channel.ack(data);
      channel.sendToQueue("PENSIONER", Buffer.from(JSON.stringify({newPension})));
    })
  });

  //create a new product
  //buy a new product

app.listen(5002, () => {
    console.log(`order service is working at port 5002`);
});