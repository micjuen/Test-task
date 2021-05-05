const http = require('http');
const url = 'http://apimeme.com/meme?meme=Alarm-Clock&top=Top+text&bottom=Bottom+text';

http.get(url,(res)=>{
  let body = '';
  res.on('data',(elem) => body +=elem);
  res.on('end',()=> console.log(body));
});