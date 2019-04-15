import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AppContainer } from 'react-hot-loader';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import App from './App';
import './style/index.less';


ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/login" push />} />        
                    <Route path="/app" component={App} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </Provider>
    </AppContainer>
 ,
  document.getElementById('root')
);