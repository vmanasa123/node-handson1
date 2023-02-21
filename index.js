const http = require("http");

const server = http.createServer((req, res)=>{
    
    if(req.url === '/'){
        res.write("Home page");
        res.end()
    }
   else if(req.url === '/about'){
        res.write("about page");
        res.end()
    }
    else if(req.method === '/contact'){
        res.write("contact page");
        res.end()
    }
});

server.listen(3003);