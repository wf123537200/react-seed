import React from 'react'
import {
    HashRouter as Router,
    Route
} from 'react-router-dom'

import Bundle from './utils/Bundle';
// pages
import Home from './pages/Home';
import Component from 'bundle-loader?lazy!./pages/Component';

const lazyLoad = (props, Component) => (
    <Bundle load={Component}>
        {(Container) => <Container {...props}/>}
    </Bundle>
);

const routesConf = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/component',
        component: props => lazyLoad(props, Component)
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
            <Route key="home" path="/" component={Home} exact/>
            {renderRoute(routesConf)}
        </div>
    </Router>
);

export default RouterWrap;
