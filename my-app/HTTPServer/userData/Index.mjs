import http from "http";
import fs from "fs"
import path from "path"
// import  url  from "url";
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('Hello,Naveen this side from Prepbytes!');
    }
    else if(req.url=='/about'){
        res.end('This is about page');
    }
    else if(req.url=='/contact'){
        res.end('This is contact page');
    }
    else if(req.url=='/userapi'){
        fs.readFile(`${_dirname}/UserApi/userApi.json`,'utf-8',(err,data)=>{
            // res.end(data)
            console.log(data);
        })
        res.end('Hi')
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end('404 page');
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log('Server is running on port number:8000')
})