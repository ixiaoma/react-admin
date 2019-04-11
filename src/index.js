import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { AppContainer } from 'react-hot-loader';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Login from './pages/Login';
import App from './App';
import './style/lib/animate.css';
import './style/index.less';

// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/login" push />} />        
                    <Route path="/app" component={App} />
                    <Route path="/404" component={NotFound} />
                    <Route path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    </AppContainer>
 ,
  document.getElementById('root')
);