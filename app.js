// 引入模块
var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');

var config = require('./webpack.config');

//连接mongodb数据库
var mongoose = require('mongoose');
require('express-mongoose'); 

mongoose.connect('mongodb://localhost/areadb');
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});
var models = require('./server/models');
//models
var Province = models.provinceModel;
var Area = models.AreaArcModel;
var Country = models.CountryModel;
var Town = models.TownModel;

// 对所有(/)URL或路由返回main.html 
app.get('/', function (req, res) {
    res.render('main');
});

// 设置views路径和模板
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// 静态文件配置
app.use('/client/src', express.static(path.join(__dirname, 'client/src')));

//省信息接口
app.get('/province', function(req, res) { 
    res.send(Province.find());
});

//区信息接口
app.get('/area', function(req, res) {
    var data_id = req.query.data_id;
    res.send(Area.find({province_id: data_id}));
});

//县信息接口
app.get('/country', function(req, res) { 
    var data_id = req.query.data_id;
    res.send(Country.find({area_id: data_id}));
});

//镇信息接口
app.get('/town', function(req, res) { 
    var data_id = req.query.data_id;
    res.send(Town.find({country_id: data_id}));
});

    
// 启动一个服务，监听从端口进入的所有连接请求

var server = app.listen(config.port, config.host, function(err){  
    if (err) {
        console.log(err);
    }
    console.log('Listening at http://' + config.host + ':' + config.port);
}); 