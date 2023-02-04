const http = require("http");
const httpProxy = require("http-proxy");

// 新建一个代理 Proxy Server 对象
const proxy = httpProxy.createProxyServer({});

// 捕获异常
proxy.on("error", function (err, req, res) {
  res.writeHead(500, {
    "Content-Type": "text/plain",
  });
  res.end(`Something went wrong. And we are reporting a custom error message.`);
});

// 在每次请求中，调用 proxy.web(req, res config) 方法进行请求分发
const server = http.createServer(function (req, res) {
  // 在这里可以自定义你的路由分发
  const host = req.headers.host;
  console.log(`host`, host)
  switch (host) {
    case "localhost:8888":
      proxy.web(req, res, { target: "http://localhost:8642" });
      break;
    case "boy.veblen.com":
      proxy.web(req, res, { target: "http://localhost:9527" });
      break;
    default:
      proxy.web(req, res, { target: "http://localhost:8642" });
      // res.writeHead(200, {
      //   "Content-Type": "text/plain",
      // });
      // res.end("Welcome to my server!");
  }
});

const port = 8888
console.log(`listening on http://localhost:${port}`);
server.listen(port);
