const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  eventName: String,
  location: String,
  description: String,
  imageLink: String,
  date: Date,
});

module.exports.Event = mongoose.model("Event", eventSchema);
