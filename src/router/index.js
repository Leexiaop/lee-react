import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from '../pages/index/index';
import Home from '../pages/home/home';

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/home',
        component: Home
    }
];

const BasicRouter = () => {
    return (
        <Router>
            <Switch>
                {
                    routes.map((route) => {
                        return <Route exact path={route.path} component={route.component} />;
                    })
                }
            </Switch>
        </Router>
    );
};

export default BasicRouter;
