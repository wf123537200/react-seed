import React from 'react'
import {
    HashRouter as Router,
    Route
} from 'react-router-dom'

// pages
import Home from './pages/Home';
import Page1 from './pages/Page1';

const routesConf = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/page1',
        component: Page1,
        // 使用此方法，父组件必须实现shouldComponentUpdate，并返回Boolean值
        routes: [
            {
                path: '/page1/a',
                component: Home
            },
            {
                path: '/page1/b',
                component: Page1
            }
        ]
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
