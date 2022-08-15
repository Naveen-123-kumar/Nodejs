const express=require("express");
const app=express()
app.get("/", (req, res) => {
    res.write("<h1>Hello</h1>")
    res.write("<h1>Hello</h1>")

    res.send()
  })
  app.get("/home", (req, res) => {
    res.send('This is home page')
  })
  app.get("/about", (req, res) => {
    res.send('this is about page')
  })
//   app.get("/tem", (req, res) => {
//     res.send([{
//         name:'Naveen',
//         age:32
//     },
//     {
//         name:'Naveen',
//         age:32
//     },
//     {
//         name:'Naveen',
//         age:32
//     }
// ]);
//   })
app.get("/tem", (req, res) => {
    res.json([{
        name:'Naveen',
        age:32
    },
    {
        name:'Naveen',
        age:32
    },
    {
        name:'Naveen',
        age:32
    }
]);
  })
  
  app.listen('8000',()=>{
    console.log('error');
  });