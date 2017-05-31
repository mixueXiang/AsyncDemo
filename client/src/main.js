import React, { Component } from 'react';
import { render } from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home/HomePage';

render((
        <HashRouter> 
            <Switch>
                <Route path="/index" component={HomePage}/>
                <Route path="/" component={HomePage}/>      
            </Switch> 
        </HashRouter>    
    ),
    document.getElementById('async-demo')
);
