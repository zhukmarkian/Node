const express = require('express')
const expressHbs = require('express-handlebars')
const path = require('path')
const app = express();
const fs = require('fs')
const userPath=path.join(__dirname , '/Users.txt')
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'views')))
app.set('view engine','.hbs');
app.engine('.hbs',expressHbs({
    defaultLayout: false
}));
app.set('views',path.join(__dirname,'views'))

app.get('/registration',(req, res) => {
    res.render('registration')
})

let users=[]
app.post('/registration',((req, res) =>{
    if (users.some(value => value.email===req.body.email)){
        res.redirect('/error')
         return
    }


    fs.writeFile(userPath, JSON.stringify(users), err => {
        if (err) {
            console.log(err);

        }})
    res.redirect('/users')
    users.push(req.body);
} ))

app.get('/error', (req, res) => {
    res.render('error');
});


app.get('/login',(req, res) => {
    res.render('login')
})
app.post('/login',(req, res) => {
    if (users.some(value => value.email!==req.body.email)){
        res.redirect('/error')
        return
    }
    fs.writeFile(userPath, JSON.stringify(users), err => {
        if (err) {
            console.log(err);

        }})
    res.redirect('/users')

})
app.get('/users',((req, res) =>{
    res.render('users',{users})


} ))

app.listen(5000,()=>{
    console.log('App listen 5000')
})

