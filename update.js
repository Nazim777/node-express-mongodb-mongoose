const dbconnect= require('./mongodb')

/*
const updatedata= async()=>{
    let data= await dbconnect()
   let data1= await data.updateOne(
       {name:'Mohammad Nazim Hossain'},{$set:{position:'software engineer'}}
   )
console.log(data1)
    
}
updatedata()
*/
const updatedata=async()=>{
    const data= await dbconnect()
    const data1= await data.updateOne(
        {name:'Abdus salam'},{$set:{category:'engineer'}}
    )
    console.log(data1)
}
updatedata()