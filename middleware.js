module.exports=reqfilter=(req,resp,next)=>{
    if(!req.query.age){
       resp.send(' <h1>please provide your age</h1>')
    }else if(req.query.age<18){
        resp.send('<h1>you are under age</h1>')
    }else{
        next()
    }
}