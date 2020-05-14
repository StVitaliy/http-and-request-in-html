const http=require('http');
const request = require("request");
const fs=require('fs')
const privat = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
http.createServer(function(req,res){
      if(req.url==='/courses'){

            request.get(privat, (error, response, body) => {  //по запросу получаем файл
                  fs.writeFile('index.html', body, function(error){//записываем в файл
                        if(error) throw error; 
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