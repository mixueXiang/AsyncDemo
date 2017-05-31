//HomeStore.js 获取数据来源

define('HomeStore', function() {

	var StoreBase = require('../utils/StoreBase.js');
    var Utils = require('../utils/Utils.js');

    var hostName = 'http://localhost:8080';
    var GET_PROVINCE_PATH = hostName + '/province';
    var GET_AREA_PATH = hostName + '/area';
    var GET_COUNTRY_PATH = hostName + '/country';
    var GET_TOWN_PATH = hostName + '/town';
   

    var HomeStore = StoreBase.createClass({
    	actions: {
            //获取省信息
            getProvinceInfo: function(params) {
                var me = this;
                Utils.getAjaxData(GET_PROVINCE_PATH, params, function (data) {
                    me.done('provinceInfo', data, true);
                }, function (data) {
                    me.error('provinceInfo',data);
                });
            },

            getAreaInfo: function(params) {
                var me = this;
                Utils.getAjaxData(GET_AREA_PATH, params, function (data) {
                    me.done('areaInfo', data, true);
                }, function (data) {
                    me.error('areaInfo',data);
                });
            },

            getCountryInfo: function(params) {
                var me = this;
                Utils.getAjaxData(GET_COUNTRY_PATH, params, function (data) {
                    me.done('countryInfo', data, true);
                }, function (data) {
                    me.error('countryInfo',data);
                });
            },

            getTownInfo: function(params) {
                var me = this;
                Utils.getAjaxData(GET_TOWN_PATH, params, function (data) {
                    me.done('townInfo', data, true);
                }, function (data) {
                    me.error('townInfo',data);
                });
            },

    	},
    	filters: {
    		pushToArr: function(data) {
  				
    		},
    		valid: function(data) {

    		}
    	},

    });
	return HomeStore;
});