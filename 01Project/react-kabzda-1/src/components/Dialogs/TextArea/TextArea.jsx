import React from 'react';
import s from './TextArea.module.css';
import {addMessageStateCreator, updateMessageAreaCreator} from '../../../Redux/state'


const TextArea = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageStateCreator());
        // props.addMessageState();

    }
    let changeMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageAreaCreator(text));
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