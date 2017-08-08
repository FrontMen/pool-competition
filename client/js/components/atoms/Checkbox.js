import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name || "checkbox",
            value: this.props.value || false,
            error: this.props.error || false
        };
    }

    onChange(event){
        let value = event.target.checked;
        this.setState({value: value});
        this.props.onChange && this.props.onChange(value);
    }

    render() {
        return (
            <div className="ato__checkbox">
                <input type="checkbox"
                       name={ this.state.name }
                       checked={ this.state.value }
                       onChange={this.onChange.bind(this)}
                       className="ato__checkbox__checkbox" />
                <span className="ato__checkbox__visual"></span>
            </div>
        );
    }
}
export default Input;