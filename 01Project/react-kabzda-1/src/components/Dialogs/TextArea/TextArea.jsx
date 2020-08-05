import React from 'react';
import s from './TextArea.module.css';

const TextArea = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = ()=>{
        let text = newMessageElement.current.value;
        alert('Yooooooooooo!'+' '+text);
        newMessageElement.current.value = '';
    }
    return (
        <div className = {s.CreateBlock}>
            <textarea ref = {newMessageElement} className = {s.textarea} type="text" placeholder = "New Message..."/>
            <button  className = {s.sendButton} onClick = {addMessage}> Send </button>
        </div>
    )
}

export default TextArea;