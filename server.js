const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const Obdi =require('./routes/odbi_data')
const User = require("./routes/users")

const app = express();
app.use(morgan('combined'))
app.use(bodyParser.urlencoded());

const PORT = process.env.PORT || 3000

app.use('/user',User)
app.use('/obdi_data',Obdi)



app.get('/',(req,res)=>{
    console.log("call")
    res.send(`<h1>Api call<h1/>`);
});

app.listen(PORT,()=>{
    console.log(`server in running ${PORT}`);
})