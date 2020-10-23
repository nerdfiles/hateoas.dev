const { Router } = require('express');
const path = require('path');
const router = Router();
router.get('/', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, 'transitions/index.html'));
});
module.exports = router;

