var express = require('express');
var router = express.Router();
var connection = require('../db/connect');
var utils = require('utility'); //sha1、md5加密方法

/* 注意：新增无需登录的接口时需要在app.js内加入白名单 */

//登陆
router.post('/login', function(req, res, next) {
  var userName = req.body.userName;
  var password = utils.md5(req.body.password);
  var sql = 'SELECT * FROM study_user WHERE Username=?';
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
  var password = utils.md5(req.body.password);
  var sql = 'SELECT * FROM study_user WHERE Username=?';
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
    sql = 'INSERT INTO study_user(Username,Password) VALUES(?,?)';
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

// 修改密码
router.post('/updatePassword', function(req, res, next) {
  var userName = req.body.userName;
  var password = utils.md5(req.body.password);
  var newPassword = utils.md5(req.body.newPassword);
  var selectSql = 'SELECT * FROM study_user WHERE Username=?';
  var sqlParams = [userName];
  connection.query(selectSql, sqlParams, function(err, result) {
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
      var uid = result[0].uid
      
      var sql = 'UPDATE study_user SET Username=?,Password=? WHERE uid=?';
      var updateParams = [userName, newPassword, uid]
      connection.query(sql, updateParams, function(err, result) {
        
        if (err) {
          console.log('server:错误')
          res.json({
            status: 500,
            msg: err,
            data: ''
          });
          return;
        }
        console.log('server:修改成功')
        res.json({
          status: 200,
          msg: 'success',
          data: ''
        });
      });
    } else {
      res.json({
        status: 0,
        msg: '原密码不正确，请重新输入',
        data: ''
      });
    }
  });
});

// 热销商品
router.get('/hotsale', function(req, res, next) {
  var sql = `SELECT * FROM study_good WHERE find_in_set('1',GoodItem)`;
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
