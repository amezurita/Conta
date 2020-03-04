const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const propertySchema = new Schema(
  {
    name: String,
    description: String,
    rent: Number,
    photo: String,
    bedrooms: Number,
    bathrooms: Number,
    lotSize: Number,
    location: {
      address: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    },
    balance: Number,
    incomebal: Number,
    outcomebal: Number,

    placeType: {
      type: String,
      enum: ["House", "Apartment", "Other"]
    },

    owner: String,
    tennants: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true,
    versionkey: false
  }
);

module.exports = model("Property", propertySchema);
