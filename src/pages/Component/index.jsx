import React, {PropTypes} from 'react';

// 静态方法，不随react实例创建
/* eslint no-unused-vars: 0 */
function staticMethod() {
}

// props 类型检查，对每一个输入参数都必须检查
const propTypes = {};

// props默认值，对每一个输入参数都必须加入默认值
const defaultProps = {};

// 创建React类
class Page1 extends React.PureComponent {
    // 构造函数
    constructor(props) {
        super(props);
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
        return (
            <div>
                <div>
                    <a href="https://ant.design">包含所有ant.design（v 2.10.0）组件</a>
                </div>
                <div>及自定义组件</div>
            </div>
        );
    }
}

Page1.propTypes = propTypes;
Page1.defaultProps = defaultProps;

export default Page1;