const express = require("express");
const router = express.Router();


router.get('/',(req,res)=>{
    res.send(`<h1>get obdi_data<h1/>`);
});

router.post('/',(req,res)=>{
    const Name =  req.body;
     console.log(Name);
    res.status(201).json(Name)
});

module.exports = router

