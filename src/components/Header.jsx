import React, {PropTypes} from 'react';
import {Menu, Icon} from 'tbdd';
import {Button, DatePicker} from 'tbdd'

// 静态方法，不随react实例创建
/* eslint no-unused-vars: 0 */
function staticMethod() {
}

// props 类型检查，对每一个输入参数都必须检查
const propTypes = {};

// props默认值，对每一个输入参数都必须加入默认值
const defaultProps = {};

// 创建React类
class Header extends React.PureComponent {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            current: 'home',
        };
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

    componentWillUpdate() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    static shouldComponentUpdate() {
        return true;
    }

    // event 类方法，采用直接绑定的箭头函数形式取代bind(this)的写法, 传参例外
    // event 以on开头
    onClick = (e) => {
        this.setState({
            current: e.key,
        });
        location.hash = '#/' + e.key;
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
            <div className="header">
                <Menu
                    onClick={this.onClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        <Icon type="mail"/>首页
                    </Menu.Item>
                    <Menu.Item key="page1">
                        <Icon type="appstore"/>page1
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;