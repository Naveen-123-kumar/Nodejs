// let fs=require('fs');
// fs.writeFileSync('bio.txt','Naveen loves Sapna');
// fs.appendFileSync('bio.txt','Sapna also loves Naveen');
// let temData=fs.readFileSync('bio.txt')
// let g=temData.toString();
// console.log(g)
// fs.renameSync('bio.txt','bioData.txt')
// fs.mkdirSync('Naveen');
// fs.unlinkSync('./bioData.txt')
// fs.rmdirSync('Naveen')
// fs.mkdir('NewFolder')

const fs=require('fs');
// fs.mkdirSync('Path')
// fs.rmdirSync('Path')
// fs.writeFile('love.txt','Naveen loves Anu',(err)=>{
//     console.log('file is created');
//     console.log(err)
// })
// fs.mkdir('Asyn',(e)=>{
//     console.log('Folder Crated')
// })
// fs.writeFile('./Asyn/bio.txt','Naveen is a SDE1',(e)=>{
//     console.log('File Created');
// })
fs.writeFile('tem.txt','Naveen loves Sapna',(err)=>{
    console.log('File has been created')
    console.log(err)
})

fs.appendFile('tem.txt','Hii',(err)=>{
    console.log(err);
})
fs.readFile('tem.txt','utf-8',(err,data)=>{
    console.log(data.toString());
})
// fs.unlink('tem.txt',(err)=>{
//     console.log(err);
// })
