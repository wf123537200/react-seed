import React from 'react';
import ReactDOM from 'react-dom';
import RouterWrap from './router';
// 主题样式引入
import '@tencent/ttd-ui';
import './styles/index.scss';

// 公共组件
import Header from './components/Header';

// 当前APP入口组件
const App = () => (
    <div>
        <Header />
        {/* 这里可以增加侧边栏导航 */}
        {/*<Sidebar />*/}
        <RouterWrap />
    </div>
);

// bind dom
const render = (Component) => {
    ReactDOM.render(
        <Component/>,
        document.getElementById('app')
    );
};

// bootstrap
render(App);

// 用于hot loader
if (module.hot) {
    module.hot.accept(App, () => {
        render(App)
    });
}