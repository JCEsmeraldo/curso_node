const http = require('http');

const server = http.createServer( function(req, res){
    const categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Notícias de tecnologia</body></html>")
    } else if(categoria == '/moda'){
        res.end("<html><body>Notícias de modas</body></html>")
    } else if(categoria == '/beleza'){
        res.end("<html><body>Notícias de beleza</body></html>")
    }else{
        res.end("<html><body>Portal de notícias</body></html>")
    }
})

server.listen(3000);
