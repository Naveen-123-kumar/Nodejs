let fs=require('fs');
// fs.writeFileSync('tem.text','Hi,darling');
fs.writeFileSync('tem.text','I love you')
fs.appendFileSync('tem.text','She Loves me')
fs.renameSync('tem.text','tem.txt')
// fs.unlinkSync('./tem.txt')
const data=fs.readFileSync('tem.txt')
// fs.mkdirSync('MyName')
// fs.rmdirSync('MyName')
console.log(data.toString());