var express = require('express');
var router = express.Router();
var connection = require('../db/connect');

/* 注意：新增无需登录的接口时需要在app.js内加入白名单 */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//登陆
router.post('/login', function(req, res, next) {
  var userName = req.body.userName;
  var password = req.body.password;
  var sql = 'SELECT * FROM user WHERE Username=?';
  var sqlParams = [userName];
  connection.query(sql, sqlParams, function(err, result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }
    if (result.length === 0) {
      res.json({
        status: 0,
        msg: '用户名不存在',
        data: ''
      });
      return;
    }
    if (password === result[0].Password) {
      res.cookie('username', result[0].Username, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 365
      });
      res.json({
        status: 200,
        msg: 'success',
        data: ''
      });
    } else {
      res.json({
        status: 0,
        msg: '密码错误',
        data: ''
      });
    }
  });
});

//注册
router.post('/reg', function(req, res, next) {
  var userName = req.body.userName;
  var password = req.body.password;
  var sql = 'SELECT * FROM user WHERE Username=?';
  var sqlParams = [userName];
  connection.query(sql, sqlParams, function(err, result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }
    if (result.length !== 0) {
      res.json({
        status: 0,
        msg: '用户已存在！',
        data: ''
      });
      return;
    }
    sql = 'INSERT INTO user(Username,Password) VALUES(?,?)';
    sqlParams = [userName, password];
    connection.query(sql, sqlParams, function(err, result) {
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
        data: ''
      });
    });
  });
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
    // result.push({'aa':'bb'})
    res.json({
      status: 200,
      msg: 'success',
      data: result
    });
  });
});


module.exports = router;
