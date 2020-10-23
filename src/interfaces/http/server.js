const express = require('express');
const router = require('./router.js');
const middleware = require('./middleware/index.js');
const server = express();
server.use(middleware.serveStatic);
server.use(router);
module.exports = server;

