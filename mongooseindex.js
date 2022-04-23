/*
const mongoose= require('mongoose')
const main= async()=>{
    await mongoose.connect("mongodb://localhost:27017/team")
    const profileschema= new mongoose.Schema({
        name:String,
        position:String,
        salary:Number
        
    })

    const profilemodel= mongoose.model('employes',profileschema)
    let data = new profilemodel({name:'Murad Ali', position:'manager',salary:50000})
   let data1= await data.save()
    console.log(data1)
}
main()
*/




const mongoose= require('mongoose')
mongoose.connect("mongodb://localhost:27017/team")
const profileschema= new mongoose.Schema({
    name:String,
    position:String,
    salary:Number
    
})

const saveindb= async()=>{
    
    const profilemodel= mongoose.model('employes',profileschema)
    let data = new profilemodel({name:'Mukit Ali', position:'teacher',salary:80000})
   let data1= await data.save()
    console.log(data1)
}



const updateindb=async()=>{
    const data= await mongoose.model('employes',profileschema)
    const data1= await data.updateOne(
        {name:'Murad Ali'},{$set:{name:'Ahmed Uddin',salary:80000}}
    )
    console.log(data1)
}




const deletindb=async()=>{
    const data= await mongoose.model('employes',profileschema)
    const data1= await data.deleteOne({name:'Mukit Ali'})
    console.log(data1)


}



const findindb=async()=>{
    const data= await mongoose.model('employes',profileschema)
    const data1= await data.find()
    console.log(data1)

}
findindb()
