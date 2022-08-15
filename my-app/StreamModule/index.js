const fs=require('fs');
const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
   
    // fs.readFile('input.txt',function(err,data){
    //     if(err){
    //         return console.error(err)
    //     }
    //     res.end(data.toString())
    // })
    const readstring=fs.createReadStream("input.txt")
    // readstring.on('data',(chuckdata)=>{
    //     res.write(chuckdata);
    // })
    // readstring.on('end',()=>{
    //     res.end()
    // })
    // readstring.on('error',(err)=>{
    //     console.log(err)
    //     res.end("The file does not exist")
    // })
    readstring.pipe(res)

})
server.listen('8000',"127.0.0.1")