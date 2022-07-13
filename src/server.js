// IMPORTANDO BIBLIOTECAS NECESSARIAS
const http = require('http');
require('dotenv/config');

// WEBSERVER HTTP
http.createServer(function(req, res){
    res.end('<h1>Chapter SysAdmin</h1>');
}).listen(process.env.APP_PORT);

// EXIBINDO LOG DO HTTP SERVER 
console.log("Server running!")

// sleep function
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Funcao assincrona que printa a variavel de ambiente
async function printvalue() {
  while(process.env.DEVOPS){
    console.log(process.env.DEVOPS);
    await sleep(20000);
  }
}

// chamando a função para printar o valor da variavel no log
printvalue()