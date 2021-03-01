const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const appiRouter=require('./router/appi.router');

const app = express();

_connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'static')));

app.use('/',appiRouter)

app.listen(5000,()=>{
    console.log('App listen 5000')
})

function _connectDB(){
    mongoose.connect('mongodb://localhost:27017/my_database',{useNewUrlParser:true, useUnifiedTopology: true });

    const connection=mongoose.connection;

    connection.on('error',(error)=>{
        console.log(error)
    })
}
