import React from "react";
import { Switch, Route, Redirect,  BrowserRouter as Router} from "react-router-dom";
import {Autorization} from '../HOC/Autorizaiton';
import Article  from './Article';
import Home from './Home';
import UserArticles from './UserArticles';
import * as ROUTES from './constants';
import Header from '../components/Header';


export const Routing = Autorization(() => (
    <Router>
        <Header />
        <Switch>
            <Route
                exact
                path={ROUTES.HOME}
                component={Home}
            />

            <Route
                exact
                path={ROUTES.USER_ARTICLES}
                component={UserArticles}
            />

            <Route
                exact
                path={ROUTES.ARTICLES_ID}
                component={Article}
            />
            <Redirect to={ROUTES.HOME} />
        </Switch>
    </Router>
));