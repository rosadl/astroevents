const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const EventSchema = new Schema({
  name       : String,
  place      : String,
  date       : String,
  imageUrl   : String,
  description: String,
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
