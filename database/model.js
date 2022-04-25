const mongoose = require('mongoose');
const { Schema } = mongoose;
const obdi_data_schema = new Schema({
  deviceID:  String, // String is shorthand for {type: String}
  author: String,
  data:   {},
  date: { type: Date, default: Date.now },
});

module.exports = obdi_data_schema

