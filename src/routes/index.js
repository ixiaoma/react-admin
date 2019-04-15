import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllComponents from '../pages';
import routesConfig from './config';

export default class CRouter extends Component {
    requireLogin = (component) => {
        const session = sessionStorage.getItem('access_token');
        if (!session) { // 判断是否登录
            return <Redirect to={'/login'} />;
        }
        return component;
    };
    render() {
        return (
            <Switch>
                {
                    Object.keys(routesConfig).map(key => 
                        routesConfig[key].map(r => {
                            const route = r => {
                                const Component = AllComponents[r.component];
                                return (
                                    <Route
                                        key={r.route || r.key}
                                        exact
                                        path={r.route || r.key}
                                        render={props=>{
                                            return this.requireLogin(<Component />)
                                        }}
                                    />
                                )
                            }
                            return r.component ? route(r) : r.subs.map(r => route(r));
                        })
                    )
                }
            </Switch>
        )
    }
}