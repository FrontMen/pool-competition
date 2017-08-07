import Standings from './components/pages/Standings';
import Registration from './components/pages/Registration';
import Registered from './components/pages/Registered';
import Verified from './components/pages/Verified';
import Login from './components/pages/Login';
import PrivateRoute from './components/utilities/PrivateRoute';
import React from 'react';
const xhr = require("xhr");

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class AppRouter extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div>
                    <PrivateRoute exact path="/" component={Standings} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/registered" component={Registered} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/activate/:verificationHash" component={Verified} />
                </div>
            </Router>
        );
    }
}
export default AppRouter;