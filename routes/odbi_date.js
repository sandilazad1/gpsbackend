const express = require("express");
const router = express.Router();


router.get('/',(req,res)=>{
    res.send(`<h1>get obdi_data<h1/>`);
});

router.post('/',(req,res)=>{
    res.send(`<h1>get obdi_data<h1/>`);
});

module.exports = router

