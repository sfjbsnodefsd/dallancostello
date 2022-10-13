const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PensionSchema = new Schema({
    pensioners: [{aadhaar: Number}],
    pensionAmount: Number,
    bankServiceCharge: Number,
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Pension = mongoose.model("pension", PensionSchema);