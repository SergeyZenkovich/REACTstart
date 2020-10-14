import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './TextArea.module.css';

const TextArea = (props) => {
    let addMessage = (values) => {
        props.addMessage(values.message);

    }
    return (
        <ReduxMessageFrom onSubmit={addMessage} />
    )
}

const MessageForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit} className={s.CreateBlock}>
            <Field component="textarea" className={s.textarea} type="text" name="message" placeholder="Yooooooooo samurai" />
            <button className={s.sendButton}> Send </button>
        </form>
    )
}
const ReduxMessageFrom = reduxForm({
    form: 'messageForm'
})(MessageForm);

export default TextArea;