import React from 'react';

class Paragraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.type = this.props.type || "normal";
    }

    render() {
        return (
            <p className={"ato__paragraph ato__paragraph--" + this.type }>
                { this.props.children }
            </p>
        );
    }
}
export default Paragraph;