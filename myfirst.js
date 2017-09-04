var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //  res.write('hello world');
     res.end('HELLO WORLD');
    // res.write(req.url);
}).listen(5670);

// console.log(http);
