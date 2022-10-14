const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PensionSchema = new Schema({
    pensioners: [{aadhaar: Number}],
});

module.exports = Pension = mongoose.model("pension", PensionSchema);