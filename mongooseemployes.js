const mongoose = require('mongoose');
const employeshema= new mongoose.Schema({
    name:String,
    position:String,
    salary:Number
}) 
module.exports= mongoose.model('employes',employeshema)