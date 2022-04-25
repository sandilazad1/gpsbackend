const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Obdi = require('./routes/odbi_data')
const User = require("./routes/users")
var cors = require('cors')
 
const db = require('./database/db')

const app = express();
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.json());


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