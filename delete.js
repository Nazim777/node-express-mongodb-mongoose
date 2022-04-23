const dbconnect= require('./mongodb')

/*
const deletedata=async()=>{
    const data= await dbconnect()
    const data1= await data.deleteOne({name:'Mohammad Elias'})
    if(data1.acknowledged){
        console.log('data deleted')
    }
}

deletedata()
*/
const deletedata=async()=>{
    const data= await dbconnect()
    const data1= await data.deleteMany({position:'android developer'})
    if(data1.acknowledged){
        console.log('data deleted')
    }
}

deletedata()