import React, { Component } from 'react';
import Routes from './routes';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import BreadcrumbCustom from './components/BreadcrumbCustom';
import { Layout } from 'antd';
import { responClient } from './reducers/app';
import { connect } from 'react-redux';

const { Content } = Layout;

class App extends Component {
    state = {
        collapsed: false,
        title: ''
    };
    getClientWidth = () => { // 获取当前浏览器宽度并设置responsive管理响应式
        const { responClient } = this.props;
        const clientWidth = window.innerWidth<= 992;
        responClient(clientWidth);
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    componentWillMount() {
        this.getClientWidth();
        window.onresize = () => {
            this.getClientWidth();
        }
    };
    render() {
        const { isMobile } = this.props;
        return (
                <Layout>
                    {!isMobile && <SiderCustom collapsed={this.state.collapsed} />}
                    <Layout style={{flexDirection: 'column'}}>
                        <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
                        <BreadcrumbCustom first="UI" second="图标" />
                        <Content>
                            <Routes/>
                        </Content>
                    </Layout>
                </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMobile:state.app.isMobile
    }
};
const mapDispatchToProps = dispatch => {
    return{
        responClient: isMobile => {
            dispatch(responClient(isMobile))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
