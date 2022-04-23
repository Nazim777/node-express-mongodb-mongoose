const dbconnect = require('./mongodb')
const express= require('express')
const app = express()
const mongodb= require('mongodb')
app.use(express.json())

app.get('/',async(req,resp)=>{
    const data= await dbconnect()
    const data1= await data.find().toArray()
    resp.send(data1)
})
/*
app.post('/',async(req,resp)=>{
    let data= await dbconnect()
    let data1= await data.insertOne(req.body)
    resp.send(data1)
    
})
*/
app.post('/',async(req,resp)=>{
    const data= await dbconnect()
    const data1= await data.insertMany(req.body)
    resp.send(data1)
})

/*
app.put('/',async(req,resp)=>{
    const data= await dbconnect();
    const data1= await data.updateOne(
        {name:'Karim Uddin'},
        {$set:req.body}    )
        resp.send({name:'Karim Uddin'})
})
*/
app.put('/',async(req,resp)=>{
    const data= await dbconnect();
    const data1= await data.updateOne(
        {name:req.body.name},
       {$set:req.body}     )
        resp.send({name:'Mohammad'})
})
app.delete("/:id",async(req,resp)=>{
    
    const data= await dbconnect()
    const data1= await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(data1)
})

app.listen(5000)