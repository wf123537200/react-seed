import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {getInitialState, reducers} from './reducers';
import {initStore} from 'utils/store'

// 静态方法，不随react实例创建
/* eslint no-unused-vars: 0 */
function staticMethod() {
}

// props 类型检查，对每一个输入参数都必须检查
const propTypes = {};

// props默认值，对每一个输入参数都必须加入默认值
const defaultProps = {};

// 创建React类
class Home extends React.PureComponent {
    // 构造函数
    constructor(props) {
        super(props);
        // 初始刷store，也可以在这里增加中间件
        this.store = initStore(reducers, getInitialState());
        this.state = {};
    }

    // 参数传递类方法
    getChildContext() {
    }

    // life cycle hook 方法，请按照顺序
    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

    shouldComponentUpdate() {
    }

    componentWillUpdate() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    // event 类方法，采用直接绑定的箭头函数形式取代bind(this)的写法, 传参例外
    // event 以on开头
    onEvent = () => {
    };

    // getter 类渲染类方法 以get开头
    getSelectReason = () => {
    };

    // render 类渲染方法 以render开头
    renderNavigation = () => {
    };

    // 渲染方法
    render() {
        return (<Provider store={this.store}>
            <div>
                <div>
                    <h1>React Redux Seed 2</h1>
                    这个种子项目用于快速的搭建起一个基于 react redux 的项目，种子项目基于当前的实践沉淀而来，后续可根据需要不断扩展
                    轻量级，如需使用重量级框架，则可以使用 [http://git.code.oa.com/fd-base-js/react-redux-seed]
                </div>
                <div>
                    <h1>使用说明</h1>
                    <a href="http://git.code.oa.com/fd-base-js/react-seed2">猛戳这里看文档</a>
                </div>
            </div>
        </Provider>);
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;