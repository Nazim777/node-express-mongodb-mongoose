/*
const App =require('./App')
const http =require('http')
*/
/*
const data=(req,resp) =>{
    resp.write('hello this is Mohammad Nazim Hossain and i am from bangladesh')
    resp.end()
}
http.createServer(data).listen(4500)
*/
/*
http.createServer((req, resp)=>{
    resp.write('hello this is Mohammad Nazim Hossain')
    resp.end()

}).listen(4500)
*/
/*
const colors=require('colors')
console.log('hello'.green)
*/
/*
console.log('hello')
console.log('hello this is a nodemon')
console.log('hello this is Mohammad Nazim Hossain')
const a= 5;
const b=5;
console.log(a+b)
console.log('hello this is a new nodemon')
*/
/*
const http= require ('http')
http.createServer((req, resp)=>{
   resp.writeHead(200,{'content-Type':'application/json'});
   resp.write(JSON.stringify({name:'Mohammad Nazim Hossain', email: 'iamnazimhossain@gmail.com'}));
   resp.end()
}).listen(5000)
*/
/*
const http = require('http');
const data= require('./data')
const api= require('./api')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application/json'});
    resp.write(JSON.stringify(api));
    resp.end()
}).listen(5000)
*/
/*
const http = require('http');
const api= require('./api');
const data= require('./data')
http.createServer((req,resp)=>{
    resp.writeHead(200, {'content-Type': 'application/json'});
    resp.write(JSON.stringify(api));
    resp.end()
}).listen(5000)
*/
/*
const fs= require('fs')
fs.writeFileSync('Apple.txt','hello this is a apple file');
*/
/*
const fs= require('fs');
const path=require('path')
const dirpath=path.join(__dirname,'files')
for(i=0;i<5; i++){
    fs.writeFileSync(dirpath+`/hello${i}.txt`,'hello this a apple file')
}
*/
/*
const fs= require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'allfiles');
for(i=0;i<4;i++){
    fs.writeFileSync(dirpath+`/hello${i}.txt`,'hello all file is created')
}
*/
/*
const fs= require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'allfiles');
fs.readdir(dirpath,(err,files)=>{
   // console.log(files)
   files.forEach(( item)=>{
       console.log(item)

   })

})
*/
/*
const fs= require('fs');
const path = require('path');
const dirpath =path.join(__dirname,'curd');
const filepath= `${dirpath}/sayhello.txt`;
*/
//file create
//fs.writeFileSync(filepath,'hello the new file is created');
//file read
//fs.readFile(filepath,'utf-8',(err, item)=>{
  //  console.log(item)

//})
//file update
//fs.appendFile(filepath, ' and the file is in a txt form',(err, item)=>{
  //  console.log('file is updated')
//})
// file rename
//fs.rename(filepath,`${dirpath}/sayhi.txt`,(err,item)=>{
  //  console.log('file name is renamed');
//})
//file delete
//fs.unlinkSync(`${dirpath}/sayhi.txt`)
/*
const fs= require('fs');
const path= require('path');
const dirpath = (__dirname,'curd');
const filepath = `${dirpath}/sayhello.txt`;
//fs.writeFileSync(filepath,'helo this is created')
//fs.readFile(filepath,'utf-8',(err,item)=>{
  //  console.log(item)
//})
//fs.appendFile(filepath,' and this file is a txt form',(err,item)=>{
  //  console.log('file is updated')
//})
//fs.rename(filepath,`${dirpath}/sayhi.txt`,(err,item)=>{
  //  console.log('file is renamed')
//})
fs.unlinkSync(`${dirpath}/sayhi.txt`)
*/
