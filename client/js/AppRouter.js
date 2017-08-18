import Game from './components/pages/Game';
import Games from './components/pages/Games';
import Registration from './components/pages/Registration';
import Registered from './components/pages/Registered';
import Verify from './components/pages/Verify';
import Login from './components/pages/Login';
import PrivateRoute from './components/utilities/PrivateRoute';
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

class AppRouter extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <PrivateRoute exact path="/" component={Games} />
                        <Route exact path="/registration" component={Registration} />
                        <Route exact path="/registered" component={Registered} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/activate/:verificationHash" component={Verify} />
                        <Route exact path="/games/:label" component={Game} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default AppRouter;