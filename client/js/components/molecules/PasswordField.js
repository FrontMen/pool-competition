import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import Header from '../atoms/Header';

class PasswordField extends React.Component {
    constructor() {
        super();
        this.state = { value: "" };
    }
    onChange(value) {
        this.setState({value: value});
        this.props.onChange && this.props.onChange(value);
    }

    render() {
        return (
            <div className="mol__password-field">
                <Label>
                    <Header level="3">{this.props.label}</Header>
                    <Input type="password" value={this.state.value} onChange={this.onChange.bind(this)} />
                </Label>
            </div>
        );
    }
}
export default PasswordField;