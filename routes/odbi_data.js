const express = require("express");
const router = express.Router();
const db = require('../database/db')




router.get('/',(req,res)=>{
    res.send(`<h1>get obdi_data<h1/>`);
});

router.post('/',(req,res)=>{
    const body =  req.body;
    db.obdi_data.create(body, function (err, small) {
        if (err) return handleError(err);
        // saved!
      });
     console.log(Name);
    res.status(201).json(Name)
});

module.exports = router

