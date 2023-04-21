const express = require('express');
const body_parser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;
app.use(body_parser.urlencoded({extended: false }));

// Ao requisitar com o verbo GET com path '/', envie a página 'login.html'
app.get('/', function(req, res) {
    res.sendFile('login.html', { root: __dirname });
});

// Ao requisitar com o verbo GET com path '/login', mostre o conteúdo dos
// parâmetros 'usuario' e 'senha'
app.get('/login', function(req, res) {
    const usuario = req.query.usuario;
    const senha = req.query.senha;
    res.send('GET: usuario: ' + usuario + ' senha: ' + senha);
});

// Ao requisitar com o verbo POST com path '/login', mostre o conteúdo dos
// parâmetros 'usuario' e 'senha'
app.post('/login', function(req, res) {
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    res.send('POST: usuario: ' + usuario + ' senha: ' + senha);
});

// Executar o serviço na porta 8080
app.listen(port);

// Logging
console.log('Servidor inicializado em http://localhost:' + port + '...');
