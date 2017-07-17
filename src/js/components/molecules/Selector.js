import React from 'react';
import Label from '../atoms/Label';
import Header from '../atoms/Header';
import Select from '../atoms/Select';

/**
 * A counter button: tap the button to increase the count.
 */
class Dialog extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    onChange(id) {
        if (this.props.onChange){
            this.props.onChange(id);
        }
    }

    render() {
        return (
            <div className="molecule-selector">
                <Label>
                    <Header level="3">{this.props.label}</Header>
                    <Select onChange={this.onChange.bind(this)}
                            options={this.props.options} />
                </Label>
            </div>
        );
    }
}
export default Dialog;