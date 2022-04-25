const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const obdi_data_schema = require('../database/model')

const obdi_data = mongoose.model('obdi_data',obdi_data_schema);


router.get('/',(req,res)=>{
    res.send(`<h1>get obdi_data<h1/>`);
});

router.post('/',(req,res)=>{
    const DATA =  req.body;
    obdi_data.create({deviceID:"02",author:"sandil",data:DATA});
     console.log(DATA);
    res.status(201).json(DATA)
});

module.exports = router

