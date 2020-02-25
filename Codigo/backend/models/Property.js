const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const PLM = require("passport-local-mongoose")

const propertySchema = new Schema({
      name: String,
      rent: Number,
      tennants: String,
      photo: String,
      bedrooms: Number,
      bathrooms: Number,
      lotSize: Number,
      location: {
        address: {
          type: String,
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
      balance: Number,
      incomebal: Number,
      outcomebal: Number,
      owner: String,
        placeType: {
          type: String,
          enum: ["House", "Apartment", "Other"]
        }
      },
      {
        timestamps: true,
        versionkey: false

      })

    module.exports = model("Property", propertySchema)