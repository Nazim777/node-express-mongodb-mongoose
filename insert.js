const dbconnect=require('./mongodb')



const insertdata=async()=>{
    const data= await dbconnect()
    const data1= await data.insertMany(
        [
            {name:'Mohammad Safiq',position:'engineer',category:'it sector'},
            {name: 'Mesba-Ul Hoque',position:'android developer',category:'engineer'},
            {name:'Abdur Rahman',position:'software egnineer',category:'it sector'}
        ]
    )

   if(data1.acknowledged){
       console.log('data inserted')
   } 

}
insertdata()