/**
 * 接口地址配置文件
 */


//登录
const LOGIN = 'auth/login'; // 管理员权限接口

//easy-mock模拟数据接口地址
const EASY_MOCK = 'https://www.easy-mock.com/mock';
const MOCK_AUTH = EASY_MOCK + '/597b5ed9a1d30433d8411456/auth'; // 权限接口地址
const MOCK_AUTH_ADMIN = MOCK_AUTH + '/admin'; // 管理员权限接口
const MOCK_AUTH_VISITOR = MOCK_AUTH + '/visitor' // 访问权限接口

// github授权
const GIT_OAUTH = 'https://github.com/login/oauth';
// github用户
const GIT_USER = 'https://api.github.com/user';

// bbc top news
const NEWS_BBC = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=429904aa01f54a39a278a406acf50070';



export default {
    LOGIN,
    MOCK_AUTH_ADMIN,
    MOCK_AUTH_VISITOR,
    GIT_OAUTH,
    GIT_USER,
    NEWS_BBC
}
