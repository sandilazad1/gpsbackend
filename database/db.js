const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://obdi:470525pA@cluster0.kz4al.mongodb.net/obdi_data?retryWrites=true&w=majority');

const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err);
})

db.once('open',()=>{
    console.log("database connected");
})


const { Schema } = mongoose;
const obdi_data_schema = new Schema({
  deviceID:  String, // String is shorthand for {type: String}
  author: String,
  data:   {},
  date: { type: Date, default: Date.now },
});


const obdi_data = mongoose.model('obdiData',obdi_data_schema);


module.exports = obdi_data
