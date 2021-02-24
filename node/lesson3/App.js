const express = require('express')

const path = require('path')

const appiRouter=require('./router/appi.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'static')));

app.use('/',appiRouter)

app.listen(5000,()=>{
    console.log('App listen 5000')
})

