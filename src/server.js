// IMPORTANDO BIBLIOTECAS NECESSARIAS
const http = require('http');
const sleep = require('sleep');
require('dotenv/config');

// WEBSERVER HTTP
http.createServer(function(req, res){
    res.end('<h1>Chapter SysAdmin</h1>');
}).listen(process.env.APP_PORT);

// EXIBINDO LOG DO HTTP SERVER 
console.log("Server running!")

// exibi no log a cada 20 segundos a variavel de ambiente
while(process.env.DEVOPS){
  console.log(process.env.DEVOPS);
  sleep.sleep(20);
}