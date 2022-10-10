const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PensionerSchema = new Schema({
  name: String,
  dob: String,
  pan: Number,
  salary: Number,
  allowances: Number,
  selfOrFamily: String,
  bankDetails: {
    name: String,
    number: Number,
    publicOrPrivate: String
  },
});

module.exports = User = mongoose.model("pensioner", PensionerSchema);