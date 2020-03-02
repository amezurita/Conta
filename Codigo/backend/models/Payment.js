const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const PLM = require("passport-local-mongoose");

const paymentSchema = new Schema(
  {
    name: {
      type: String
    },
    by: String,
    amount: {
      type: Number
    },
  owner: String,
  property: {type:Schema.Types.ObjectId, ref:"property"},
    description: String
  },
  {
    timestamps: true,
    versionkey: false
  }
);

module.exports = mongoose.model("Payment", paymentSchema);