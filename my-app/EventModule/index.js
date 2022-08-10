const EventEmiter=require('events')
const event=new EventEmiter();
event.on('saymyName',(a,b)=>{
console.log(`My Name is ${a} and roll number is ${b}`)
})

event.emit('saymyName','Naveen',"20");
