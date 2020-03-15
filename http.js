const http = require('http');

http.createServer(function(request, response){
	console.log('hello dinhbao');
	response.writeHead(200,{'Content-Type':'text/html'})
	response.end('<h1> Hello dinhbao</h1>')
}).listen(3000)