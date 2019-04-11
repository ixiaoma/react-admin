import { get, post } from './tools';
import _API from './config';


export const LoginFn = params=> post(_API.LOGIN,params)
export const getBbcNews = () => get({ url: _API.NEWS_BBC });

export const npmDependencies = () => get('./npm.json').then(res => res.data).catch(err => console.log(err));

export const weibo = () => get('./weibo.json').then(res => res.data).catch(err => console.log(err));

export const gitOauthLogin = () => get({ url: `${_API.GIT_OAUTH}/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin` });
export const gitOauthToken = code => post({ 
    url: `https://cors-anywhere.herokuapp.com/${_API.GIT_OAUTH}/access_token`,
    data: {
        client_id: '792cdcd244e98dcd2dee',
        client_secret: '81c4ff9df390d482b7c8b214a55cf24bf1f53059',
        redirect_uri: 'http://localhost:3006/',
        state: 'reactAdmin',
        code,
    } 
});
// {headers: {Accept: 'application/json'}}
export const gitOauthInfo = access_token => get({ url: `${_API.GIT_USER}access_token=${access_token}` });

// easy-mock数据交互
// 管理员权限获取
export const admin = () => get({ url: _API.MOCK_AUTH_ADMIN });
// 访问权限获取
export const guest = () => get({ url: _API.MOCK_AUTH_VISITOR });