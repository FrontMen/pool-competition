import PrivateRoute from './components/utilities/PrivateRoute';
import Ranking from './components/pages/Ranking';
import Registration from './components/pages/Registration';
import Registered from './components/pages/Registered';
import Verified from './components/pages/Verified';
import Login from './components/pages/Login';
import React from 'react';

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
                    <PrivateRoute exact path="/" component={Ranking} />
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