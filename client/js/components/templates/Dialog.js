import React from 'react';

class Dialog extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div className="tem__dialog">
                <div className="tem__dialog__content">
                    { this.props.children }
                </div>
            </div>
        );
    }
}
export default Dialog;