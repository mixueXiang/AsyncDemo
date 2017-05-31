//schemas.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

//省信息表
var provinceSchema = new Schema({ 
	province_name: String
}, {
	collection: 'province',
    versionKey: false
});

//区信息表
var AreaSchema = new Schema({ 
	area_name: String,
	province_id: {
		type: ObjectId,
		ref: 'province',
		default: ObjectId('592ebd57b8788be087fc633f')
	},
}, {
	collection: 'area',
    versionKey: false
});

//县信息表
var CountrySchema = new Schema({ 
   country_name: String,
   area_id: {
   		type: ObjectId,
		ref: 'area'
   },
}, {
	collection: 'country',
    versionKey: false
});

//镇信息表
var TownSchema = new Schema({ 
	town_name: String,
	country_id: {
		type: ObjectId,
		ref: 'country'
	}
}, {
	collection: 'town',
    versionKey: false
});


// export them 
exports.provinceSchema = provinceSchema;
exports.AreaSchema = AreaSchema;
exports.CountrySchema = CountrySchema;
exports.TownSchema = TownSchema;
