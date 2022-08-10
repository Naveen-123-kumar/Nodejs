const fs=require('fs')
const bioData={
    name:'Naveen',
    age:20,
    profession:'Computer Science and Engineering'
}
const data1=JSON.stringify(bioData);
// fs.writeFile("data.json",data1,(err)=>{
//     console.log(err);
// })  
fs.readFile('data.json',"utf-8",(err,data)=>{
    let stringdata=JSON.parse(data);
    console.log(stringdata);
})