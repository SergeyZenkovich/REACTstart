import React from 'react';
import s from './TextArea.module.css';

const TextArea = (props) => {
    let addMessage = () => {
        // props.dispatch(addMessageStateCreator());
        props.addMessageState();

    }
    let changeMessage = (e) => {
        let text = e.target.value;
        // props.dispatch(updateMessageAreaCreator(text));
        props.updateMessageArea(text);
    }

    return (
        <div className={s.CreateBlock}>
            <textarea  onChange={changeMessage} className={s.textarea} type="text" value={props.newMessageText} />
            <button className={s.sendButton} onClick={addMessage}> Send </button>
        </div>
    )
}

export default TextArea;