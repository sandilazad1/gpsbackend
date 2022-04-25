const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://obdi:470525pA@cluster0.kz4al.mongodb.net/obdi_data?retryWrites=true&w=majority');

const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err);
})

db.once('open',()=>{
    console.log("database connected");
})





