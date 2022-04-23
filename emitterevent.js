
/*
const os= require('os')

console.log(os.arch())

console.log(os.homedir())
console.log(os.cpus())

console.log(os.freemem()/(1024*1024*1024))
console.log(os.totalmem()/(1024*1024*1024))

console.log(os.hostname())
console.log(os.platform())

*/


const express= require('express')
const Eventemitter= require('events')
const app= express()
const event = new Eventemitter()
let count=[]
event.on('countapi',()=>{
    count++
    console.log('hello event call',count)

})

app.get('/',(req,resp)=>{
    resp.send('api called')
    event.emit('countapi')
})



app.get('/search',(req,resp)=>{
    resp.send('search api called')
    event.emit('countapi')
})

app.get('/update',(req,resp)=>{
    resp.send('update api called')
    event.emit('countapi')
})
app.listen(5000)


