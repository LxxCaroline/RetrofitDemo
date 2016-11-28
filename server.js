var http = require('http'); 
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) { 
	res.writeHead(200, {'Content-Type': 'text/plain'});
	if (req.url == "/favicon.ico") {
		res.end("");
		return ;
	}
    // 获取当前收到请求的时间 
    var date = new Date(Date.now()); 
    console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"----"+req.url + "/n");
	var pathname = url.parse(req.url).pathname;
	var file = fs.readFileSync("./default.txt");
	var content=file.toString("base64");
	console.log("content:"+content);
	res.end(content);
}).listen(8080, "10.240.88.201");  
console.log('Server running at http://10.240.88.201:8080/');   
