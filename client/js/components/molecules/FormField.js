import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import Header from '../atoms/Header';
import Paragraph from "../atoms/Paragraph";

class FormField extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.link;

        Object.assign(this.state, this.validate(this.state.value));
    }
    validate(value){
        let newState = {
            value: value,
            error: false
        };

        this.props.link.validations.some((validation) => {
            if (!validation.rule(value)) {
                newState.error = validation.message;
                return true;
            }
        });
        return newState;
    }

    onChange(value) {
        let newState = this.validate(value);
        this.setState(Object.assign(this.state, newState));
        this.props.onChange(Object.assign(this.state, newState));
    }


    render() {
        let error = this.state.error ? <Paragraph type="error">{this.state.error}</Paragraph> : "";
        let fieldError = this.props.showErrors ? "mol__form-field--error" : "";

        return (
            <div className={"mol__form-field " + fieldError}>
                <Label>
                    <Header level="3">{this.props.link.label}</Header>
                    <Input type={this.props.link.type} value={this.state.value} onChange={this.onChange.bind(this)} />
                    {error}
                </Label>
            </div>
        );
    }
}
export default FormField;