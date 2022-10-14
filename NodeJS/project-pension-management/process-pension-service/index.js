const express = require("express");
const app = express();
const mongoose = require("mongoose");
const amqp = require("amqplib");
//const Product= require('./Product');
const isAuthenticated = require('../isAuthenticated');
app.use(express.json());
var channel, connection;
const Pensioner = require('./Pension');
var pensionAmount = 0;
var bankServiceCharge=0;


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
  }


    function createPension(pensioners, aadhaar){
      let newPensionAmount = 0;
      console.log(pensioners[0].selfOrFamily);
     
        if (pensioners[0].selfOrFamily == "Self")
        {
            newPensionAmount = (pensioners[0].salary * 0.8) + pensioners[0].allowances
        }
        else if (pensioners[0].selfOrFamily == "Family")
        {
            newPensionAmount = (pensioners[0].salary * 0.5) + pensioners[0].allowances
        }

        if (pensioners[0].bankDetails.publicOrPrivate == "Public")
        {
            bankServiceCharge = 500;
        }
        else if (pensioners[0].bankDetails.publicOrPrivate == "Private")
        {
            bankServiceCharge = 550;
        }
        pensionAmount = newPensionAmount;
      
      const newPension = new Pensioner({
        pensioners,
        pensionAmount: newPensionAmount,
        bankServiceCharge: 500
    });
    newPension.save();
    return newPension;
  }

  connect().then(() => {
    channel.consume("PENSION", data => {
      const {pensioners, pensionAmount} = JSON.parse(data.content);
      const newPension = createPension(pensioners, pensionAmount)
      console.log("consuming pension queue")
      console.log(pensioners[0]);
      console.log("Pension amount = "+pensionAmount);
      console.log("Bank Service Charge = "+bankServiceCharge);
      channel.ack(data);
      channel.sendToQueue("PENSIONER", Buffer.from(JSON.stringify({newPension})));
    })
  });

  //create a new product
  //buy a new product

app.listen(5002, () => {
    console.log(`order service is working at port 5002`);
});