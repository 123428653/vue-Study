var express = require('express');
var router = express.Router();
var connection = require('../db/connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 热销商品
router.get('/hotsale', function(req, res, next) {
  var sql = `SELECT * FROM good WHERE find_in_set('1',GoodItem)`;
  connection.query(sql, function(err, result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }
    res.json({
      status: 200,
      msg: 'success',
      data: result
    });
  });
});

module.exports = router;
