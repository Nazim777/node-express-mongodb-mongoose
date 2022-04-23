const dbconnect=require('./mongodb')
const main= async()=>{
    const data= await dbconnect()
    const data1= await data.find({}).toArray()

    console.log(data1)
}
main()