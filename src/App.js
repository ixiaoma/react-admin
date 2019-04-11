import React, { Component } from 'react';
import Routes from './routes';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import BreadcrumbCustom from './components/BreadcrumbCustom';
import { Layout } from 'antd';
import { receiveData } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { Content } = Layout;

class App extends Component {
    state = {
        collapsed: false,
        title: ''
    };
    getClientWidth = () => { // 获取当前浏览器宽度并设置responsive管理响应式
        const { receiveData } = this.props;
        const clientWidth = window.innerWidth;
        receiveData({isMobile: clientWidth <= 992}, 'responsive');
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    componentWillMount() {
        const { receiveData } = this.props;
        const user = sessionStorage.getItem('user')
        user && receiveData(user, 'auth');
        this.getClientWidth();
        window.onresize = () => {
            this.getClientWidth();
        }
    };
    render() {
        const { auth, responsive } = this.props;
        return (
                <Layout>
                    {!responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed} />}
                    <Layout style={{flexDirection: 'column'}}>
                        <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} />
                        <BreadcrumbCustom first="UI" second="图标" />
                        <Content>
                            <Routes auth={auth} />
                        </Content>
                    </Layout>
                </Layout>
        );
    }
}

const mapStateToProps = state => {
    const { auth = {data: {}}, responsive = {data: {}} } = state.httpData;
    return {auth, responsive};
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
