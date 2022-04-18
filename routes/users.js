const express = require("express");
const router = express.Router();

router.post('/create/',(req,res)=>{
    res.send(`<h1>Create User<h1/>`);
});
router.get('/find/:id',(req,res)=>{
    res.send(`<h1>get user<h1/>`);
});

router.patch('/update/:id',(req,res)=>{
    res.send(`<h1>update user<h1/>`);
});
router.delete('/delete/:id',(req,res)=>{
    res.send(`<h1>delete user<h1/>`);
});

module.exports = router

