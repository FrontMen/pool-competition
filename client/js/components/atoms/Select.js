import React from 'react';

const defaults = {
    emptyLabel: "Make a selection"
};

class Select extends React.Component {
    constructor() {
        super();
        this.state = {};

    }
    onChange(evt) {
        let selectedId = this.props.options.find((item) => item.value === evt.target.value).id;

        if (this.props.onChange){
            this.props.onChange(selectedId);
        }
    }

    render() {
        let emptyLabel = this.props.emptyLabel || defaults.emptyLabel;
        const className = `ato__select`;
        let hasSelectedItem = false;

        let items = this.props.options.map((item) => {
            if (item.selected){
                hasSelectedItem = true;
            }

            return (<option key={item.id} value={item.value} defaultValue={item.selected}>{item.label}</option>)
        });

        if (!hasSelectedItem){
            items.unshift((<option key="empty">{emptyLabel}</option>))
        }

        return (
            <select onChange={this.onChange.bind(this)} className={className}>
                {items}
            </select>
        );
    }
}
export default Select;