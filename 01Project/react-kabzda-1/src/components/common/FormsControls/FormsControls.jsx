import React from 'react';
import style from './FormsControls.module.css'
import {Field} from 'redux-form';



const FormControl = ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            {React.createElement(props.fieldtype, { ...input, ...props })}
            <div>{hasError && <span>{error}</span>}</div>
        </div>
    )
}

const CreateField = (type, placeholder, name, valid , text = "") =>{
    return (
        <div>
            <Field type={type} placeholder={placeholder} name={name} component={FormControl} validate = {valid} fieldtype="input" /> {text}
        </div>
        
    )
}
export { FormControl,CreateField };