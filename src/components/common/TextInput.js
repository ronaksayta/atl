import React from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
    let wrapperClass = 'form-group row';
    if ( error && error.length > 0 ) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label className="col-sm-2 col-form-label" htmlFor={name}>{label}</label>
            <div className="col-sm-10 field">
                <input 
                type = "text"
                name = {name}
                className = "form-control"
                placeholder = {placeholder}
                value = {value}
                onChange = {onChange} />
                {error && <div className = "alert alert-danger">{error}</div>}
            </div>
        </div>
    )
}

export default TextInput;