const http = require('http');
const { app } = require('./app');

const normalizePort = val => {
    const port = parseInt(val, 10);
    
    if (port !== NaN) {
        return val;
    } else if( port >= 0){
        return port;
    } else {
        return false;
    }
}

const port = normalizePort(process.env.PORT || "3000");

app.set('port', port);
const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Listening on port` + port);
});
