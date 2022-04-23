const express= require('express')
const employe= require('./mongooseemployes')
require('./mongooseconfig')
const app = express()
app.use(express.json())

app.post('/create',async(req,resp)=>{

    const data=await employe(req.body)
    const data1= await data.save()
  
    resp.send(data1)
})



app.get('/get',async(req,resp)=>{
    const data=await employe.find()
    resp.send(data)
})


app.delete('/delete/:_id', async(req,resp)=>{
    const data= await employe.deleteOne(req.params)
    resp.send(data)
})


app.put('/update/:_id',async(req,resp)=>{
    const data=await employe.updateOne(
        req.params,
        {$set:(req.body)}
    )
    resp.send(data)
})

app.get('/search/:key',async(req,resp)=>{
    
    const data=await employe.find(
        {
            "$or":[
              {'name':{$regex:req.params.key}},
              {'position':{$regex:req.params.key}}
            ]
        }
    )
   
    resp.send(data)
})



app.listen(5000)
//thid file is with mongooseconfig and mongooseemployes