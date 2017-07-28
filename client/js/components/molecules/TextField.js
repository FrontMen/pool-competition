import React from 'react';
import Label from '../atoms/Label';
import Header from '../atoms/Header';

class TextField extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };
    }
    onChange() {
        this.setState({value: event.target.value});
        this.props.onChange && this.props.onChange(this.state.value);
    }

    render() {
        return (
            <div className="mol__text-field">
                <Label>
                    <Header level="3">{this.props.label}</Header>
                    <input type="text" value={this.state.value} onChange={this.onChange.bind(this)} />
                </Label>
            </div>
        );
    }
}
export default TextField;