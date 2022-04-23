const {MongoClient}= require('mongodb')
const url='mongodb://localhost:27017';
const database='team'
const client= new MongoClient(url);
const getdata=async()=>{
    const result=await client.connect();
    const db= result.db(database);
    const collection=db.collection('profie');
    let response= await collection.find({}).toArray();
    console.log(response)
}
getdata()


  



const {MongoClient} =require('mongodb')
const databases='users';
const urls= 'mongodb://localhost:27017';
const clients= new MongoClient(urls)
const getdatas=async()=>{
    const result=await clients.connect()
    const db= result.db(databases)
    const collection= db.collection('biadata')
    const response= await collection.find({}).toArray()
    console.log(response)
    
}
getdatas()