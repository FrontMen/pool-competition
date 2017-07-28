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
        this.setState({value: event.target.value});
        this.props.onChange && this.props.onChange(this.state.value);
    }

    render() {
        return (
            <input type={ this.type }
                   value={ this.state.value }
                   onChange={this.onChange.bind(this)}
                   className={"mol__input mol__paragraph--" + this.type } />
        );
    }
}
export default Input;