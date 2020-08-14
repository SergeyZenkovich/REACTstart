import React from 'react';
import s from './TextArea.module.css';

const TextArea = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let action = { type: 'ADD-MESSAGE-STATE' }
        props.dispatch(action);
        // props.addMessageState();

    }
    let changeMessage = () => {
        let text = newMessageElement.current.value;
        let action = { type: 'UPDATE-MESSAGE-AREA', text: text }
        props.dispatch(action);
        // props.updateMessageArea(text);
    }

    return (
        <div className={s.CreateBlock}>
            <textarea ref={newMessageElement} onChange={changeMessage} className={s.textarea} type="text" value={props.newMessageText} />
            <button className={s.sendButton} onClick={addMessage}> Send </button>
        </div>
    )
}

export default TextArea;