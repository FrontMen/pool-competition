import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || "",
            type: this.props.type || "text"
        };
    }

    onChange(event){
        let value = event.target.value;
        this.setState({value: value});
        this.props.onChange && this.props.onChange(value);
    }

    render() {
        return (
            <input type={ this.state.type }
                   value={ this.state.value }
                   onChange={this.onChange.bind(this)}
                   className={"ato__input ato__input--" + this.state.type } />
        );
    }
}
export default Input;