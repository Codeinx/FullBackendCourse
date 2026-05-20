const http = require('http');

const todos = [
    {id: 1, tet: 'Todo One'},
    {id: 2, tet: 'Todo Two'},
    {id: 3, tet: 'Todo Three'},
]

const server = http.createServer((req, res) => {
    // res.statusCode = 404;
    // res.setHeader('Content-Type', 'application/json');
    // res.setHeader('X-Powered-By', 'Node.js');

    res.writeHead(404, {
       'Content-Type': 'application/json',
       'X-Powered-By': 'Node.js' 
    });

    // res.write('<h1>Hello</h1>');
    // res.write('<h2>Hello Again</h2>');
    res.end(JSON.stringify({
        success: false,
        error: 'Not found',
        data: null
    }));
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));