const express = require('express');
const app = express();
const  mongoose  = require('mongoose');
require('dotenv/config')
var bodyParser = require('body-parser')
const cors = require('cors')

//RoutesObjects

const creditoRoutes = require('./routes/credito');

app.use(bodyParser.json())
app.use(cors())

//MW Routes
app.use('/credito', creditoRoutes)



app.get('/', (req,res) =>{
    res.send("Home")
});


mongoose.connect(process.env.DB_UNAPEC, { useUnifiedTopology: true },()=>{
    console.log("Succes")
})

app.listen(4040, ()=> console.log('Listen '))



