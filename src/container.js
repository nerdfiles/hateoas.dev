const server = require('./interfaces/http/server.js');
const PORT = process.env.PORT || 3001;
const SERVER_START = 'SERVER_START';
console.time(SERVER_START);
module.exports = {
  run: function () {
    server.listen(PORT, () => {
      console.log(`serving on https://localhost:${PORT}`);
      console.timeEnd(SERVER_START);
    });
  }
};

