import React from 'react';
import style from './FormsControls.module.css'

const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            {React.createElement(props.fieldtype, { ...input, ...props })}
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}
export { FormControl };