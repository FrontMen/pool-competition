import React from 'react';
import Verified from '../pages/Verified';
import PageNotFound from '../pages/PageNotFound';
import StatusCodes from '../../helpers/StatusCodes';
const xhr = require("xhr");

class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            verified: "unknown"
        };

        this.verify();
    }
    verify(){
        xhr("http://127.0.0.1/api/is-user", function(err, resp){
            this.setState({verified: StatusCodes.happy(resp.statusCode) });
        }.bind(this));
    }

    render() {
        if (this.state.verified === "unknown"){
            return (<Loading />);
        } else if (this.state.verified){
            return (<Verified />);
        } else {
            return (<PageNotFound />);
        }
    }
}
export default Registration;