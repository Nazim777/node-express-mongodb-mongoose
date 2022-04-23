const {MongoClient} =require('mongodb')
const url= 'mongodb://localhost:27017'
const client= new MongoClient(url)
const databasename= 'team'
const dbconnect=async()=>{
    const result = await client.connect();
    const db= result.db(databasename);
    return db.collection('profie')
}
module.exports=dbconnect;