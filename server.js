const http = require('http');

const todos = [
    
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Node.js');
    res.write('<h1>Hello</h1>');
    res.write('<h2>Hello Again</h2>');
    res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));