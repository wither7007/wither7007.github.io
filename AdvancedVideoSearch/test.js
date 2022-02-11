const http = require('http')
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(
        {
            ok: true,
            timeStamp: new Date().toISOString()
        }
    ))
}).listen(3000)