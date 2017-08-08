import React from 'react'
import {
    HashRouter as Router,
    Route
} from 'react-router-dom'

// pages
import Home from './pages/Home';
import Component from './pages/Component';

const routesConf = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/component',
        component: Component,
    }
];

const renderRoute = (routes) => {
    return routes.map((r, i) => {
        if(r.routes) {
            return [<Route key={r.path + i} path={r.path} component={r.component} />, renderRoute(r.routes)];
        }
        return (<Route key={i} path={r.path} component={r.component} />);
    })
};

const RouterWrap = () => (
    <Router>
        <div className="container">
            {renderRoute(routesConf)}
        </div>
    </Router>
);

export default RouterWrap;
