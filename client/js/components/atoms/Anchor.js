import React from 'react';
import {Link} from 'react-router-dom';

export default function(props) {
    return <Link className="ato__anchor" to={props.to}>{props.children}</Link>;

}