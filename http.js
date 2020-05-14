const http=require('http');
const https=require('https');
const fs=require('fs')
const privat = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
http.createServer(function(req,res){
      if(req.url==='/courses'){

 https.get(privat, (res) => {             
            res.on('data', (url) => {
            fs.writeFile('index.html', url, function(error){
             if(error) throw error; // если возникла ошибка
 });
 });
 });

 let page = fs.readFileSync('index.html', 'utf8');
 res.writeHead(200,{'Content-Type':'text/json; charset=utf-8'});
      res.end(page);
      }else{
            res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
            res.end('введите  http://localhost:3000/courses')
          }

  }).listen(3000,function(){
   console.log('server started');
  });
  