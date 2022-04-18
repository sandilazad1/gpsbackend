const express = require("express");
const router = express.Router();


router.get('/',(req,res)=>{
    res.send(`<h1>get obdi_data<h1/>`);
});

router.post('/',(req,res)=>{
    const name =  req.body.name;
    console.log(name);

    res.status(201).json({
        message: name
    })
});

module.exports = router

