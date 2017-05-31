//HomePage.js
import './home.less';
import '../../static/css/reset.less';
import React, { Component } from 'react';
import { render } from 'react-dom';

var HomeStore = require('../../components/HomeStore');

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            provinceInfo: [],
            areaInfo: [],
            countryInfo: [],
            townInfo: []
        };
        HomeStore.dispose();
        HomeStore.listen(['provinceInfo','areaInfo','countryInfo','townInfo'], this);
    }

    componentDidMount() {
        //获取省份数据
        HomeStore.getProvinceInfo();
    }

    afterGetProvinceInfo = (data) => {
        console.log('ProvinceInfo=======',data);
        if(!data) {
            return;
        }
        this.setState({
            provinceInfo: data,
        });
    }

    afterGetAreaInfo = (data) => {
        console.log('AreaInfo=======',data);
        if(!data) {
            return;
        }
        this.setState({
           areaInfo: data,
        });
    }

    afterGetCountryInfo = (data) => {
        console.log('CountryInfo=======',data);
        if(!data) {
            return;
        }
        this.setState({
           countryInfo: data,
        });
    }

    afterGetTownInfo = (data) => {
        console.log('TownInfo=======',data);
        if(!data) {
            return;
        }
        this.setState({
           townInfo: data,
        });
    }

    provinceClickHandler = (e) => {
        let cur = e.currentTarget;
        let dataId = cur.getAttribute('data-id');
        HomeStore.getAreaInfo({data_id: dataId});
    }

    areaClickHandler = (e) => {
        let cur = e.currentTarget;
        let dataId = cur.getAttribute('data-id');
        HomeStore.getCountryInfo({data_id: dataId});
    }

    countryClickHandler = (e) => {
        let cur = e.currentTarget;
        let dataId = cur.getAttribute('data-id');
        HomeStore.getTownInfo({data_id: dataId});
    }


    getProvinceDom = () => {
        const me = this;
        let provinceData = this.state.provinceInfo || [];
        return (<div className="province-wrapper list">
                    <h3>请选择</h3>
                    <ul className="province-list">
                            {
                               provinceData.map(function(item, i){
                                   return (
                                       <li nIndex={i} data-id={item._id} onClick={me.provinceClickHandler.bind(me)}>{item.province_name}</li> 
                                   )
                               })
                            }
                    </ul>
                </div>)
        
    }

    getAreaDom = () => {
        const me = this;
        let areaData  = this.state.areaInfo || [];
        return (<div className="area-wrapper list">
                     <h3>请选择</h3>
                     <ul className="area-list">
                             {
                                areaData.map(function(item, i){
                                    return (
                                        <li nIndex={i} data-id={item._id} onClick={me.areaClickHandler.bind(me)}>{item.area_name}</li> 
                                    )
                                })
                             }
                     </ul>
                </div>)
        
    }

    getCountryDom = () => {
        const me = this;
        let countryData  = this.state.countryInfo  || [];
        return (<div className="country-wrapper list">
                     <h3>请选择</h3>
                     <ul className="area-list">
                             {
                                countryData.map(function(item, i){
                                    return (
                                        <li nIndex={i} data-id={item._id} onClick={me.countryClickHandler.bind(me)}>{item.country_name}</li> 
                                    )
                                })
                             }
                     </ul>
                </div>)
    }

    getTownDom = () => {
        const me = this;
        let townData  = this.state.townInfo  || [];
        return (<div className="town-wrapper list">
                     <h3>请选择</h3>
                     <ul className="area-list">
                             {
                                townData.map(function(item, i){
                                    return (
                                        <li nIndex={i} data-id={item._id}>{item.town_name}</li> 
                                    )
                                })
                             }
                     </ul>
                </div>)
    }

    render() {
        const me = this;
        
        return (
                <div className="container">
                    {this.getProvinceDom()}
                    {this.getAreaDom()}
                    {this.getCountryDom()}
                    {this.getTownDom()}                    
                </div>
        )
    }
}
