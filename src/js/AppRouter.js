import PrivateRoute from './components/utilities/PrivateRoute';
import Ranking from './components/pages/Ranking';
import Registration from './components/pages/Registration';
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
                </div>
            </Router>
        );
    }
}
export default AppRouter;