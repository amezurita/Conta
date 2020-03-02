const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const PLM = require("passport-local-mongoose");

const tennantSchema = new Schema({
  name: String,
  email: String,
  password: String,
  photo: String,
  facebookID: String,
  googleID: String,
  house: {type:Schema.Types.ObjectId, ref:"property"},
  payments: {type:[Schema.Types.ObjectId], ref:"payments"}, 
  role: String
});
tennantSchema.plugin(PLM, { usernameField: "email" });
const User = mongoose.model("Payment", userSchema);
module.exports = User;