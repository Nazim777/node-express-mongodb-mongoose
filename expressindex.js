/*
const express=require('express');
const app = express()
app.get('',(req,resp)=>{
    resp.send(` 
       <h1>hello this a home page</h1>
      <a href="/about">go to about page</a>

      `
    )
})
app.get('/about',(req,resp)=>{
    resp.send(`  
       <h1>hello this is a about page</h1>
       <a href="/">go to home page</a>
       `
    )
})
app.get('/contact',(req,resp)=>{
    resp.send([
        {name: 'Mohammad Nazim Hossain',email: 'iamnazimhossain@gmail.com'},
        {name: 'Rahim Uddin',email:'rahim@gamil.com'}
    ])
})
app.listen(5000)
*/
/*
const express = require('express');
const path= require('path');
const app = express();
const dirpath= path.join(__dirname,'public')
app.use(express.static(dirpath))


app.listen(5000)
*/
/*
const express= require('express');
const path= require('path')
const app= express()
const dirpath= path.join(__dirname,'public')
app.use(express.static(dirpath));
app.listen(5000)
*/
/*
const express= require('express');
const path= require('path')
const app= express()
const dirpath=path.join(__dirname,'public')
app.get('',(req,resp)=>{
    resp.sendFile(`${dirpath}/index.html`)
});
app.get('/about',(_,resp)=>{
    resp.sendFile(`${dirpath}/about.html`)
})
app.get('/contact',(_,resp)=>{
    resp.sendFile(`${dirpath}/contact.html`)
})
app.set('view engine','ejs')


app.get('/profile',(_,resp)=>{
    const user={
        name:'Mohammad Nazim Hossain',
        email:'iamnazimhossain@gmail.com'
    }
    resp.render('profile',{user})
})
app.get('/service',(_,resp)=>{
    resp.render('service')
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${dirpath}/404page.html`)
})



app.listen(5000);
*/
/*
const express =require('express');
const app=express();
const reqfilter= require('./middleware')
app.set('view engine','ejs');
app.get('',(_,resp)=>{
    resp.render('home')
})
app.get('/profile',reqfilter,(_,resp)=>{
    const user={
        name:'Mohammad Nazim Hossain',
        email: 'iamnazimhossain@gmail.com',
        age:22,
        height:5.7

    }
    resp.render('profile',{user})
})
app.get('/service',reqfilter,(_,resp)=>{
    resp.render('service')
})
app.get('*',(_,resp)=>{
    resp.render('404page')
})
app.listen(5000)
*/