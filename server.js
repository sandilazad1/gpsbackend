const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());

const PORT = process.env.PORT || 3000

app.post('api/obdi/data',(req,res)=>{
    const odbiData = req.body
    console.log(odbiData)
});

app.listen(PORT,()=>{
    console.log(`server in running ${PORT}`);
})