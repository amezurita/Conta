const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const paymentSchema = new Schema(
  {
    name: {
      type: String
    },
    amount: {
      type: Number
    },
    owner: String,
    isPaid: Boolean,
    description: String,
    property: { type: Schema.Types.ObjectId, ref: "property" },
  },
  {
    timestamps: true,
    versionkey: false
  }
);

module.exports = model("Payment", paymentSchema);
