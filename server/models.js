//models.js

var schemas = require('./schemas');
var mongoose = require('mongoose');

//省信息表
var provinceModel = mongoose.model('province', schemas.provinceSchema);

//区信息表
var AreaArcModel = mongoose.model('area', schemas.AreaSchema);

//县信息表
var CountryModel = mongoose.model('country', schemas.CountrySchema);

//镇信息表
var TownModel = mongoose.model('town', schemas.TownSchema);

//导出模块
exports.provinceModel = provinceModel;
exports.AreaArcModel = AreaArcModel;
exports.CountryModel = CountryModel;
exports.TownModel = TownModel;

