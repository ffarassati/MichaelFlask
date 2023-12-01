import React, { Component } from 'react'

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);

        this.appendCheckbox = this.appendCheckbox.bind(this);
    }

    appendCheckbox(e) {
        var checked = this.props.checked;
        if (e.target.checked)
            checked.push(e.target.id);
        else
            checked.splice(checked.indexOf(e.target.id), 1);
        this.props.update(this.props.fieldName, checked);
    }

    render() {
        const { fieldName, fields, checked, type, disabled, readOnly } = this.props;

        const appendCheckbox = this.appendCheckbox;

        return (
            <div disabled={disabled} className={"reader-form-checkboxes"}>
                {fields.map((field, key) => {
                    return (
                        <div key={key} >
                            <input disabled={disabled || readOnly} name={fieldName} id={field} checked={checked.includes(field)} onChange={appendCheckbox} type='checkbox' />
                            <label >{field}</label>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}


export default CheckboxGroup