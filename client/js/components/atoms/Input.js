import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ""
        };
        this.type = this.props.type || "text";
    }

    onChange(event){
        let value = event.target.value;
        this.setState({value: value});
        this.props.onChange && this.props.onChange(value);
    }

    render() {
        return (
            <input type={ this.type }
                   value={ this.state.value }
                   onChange={this.onChange.bind(this)}
                   className={"ato__input ato__paragraph--" + this.type } />
        );
    }
}
export default Input;