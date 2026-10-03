const http = require("http");
const server = http.createServer((req, res) => res.end("Hello from CI/CD!"));
module.exports = server;
if (require.main === module) server.listen(3000);
