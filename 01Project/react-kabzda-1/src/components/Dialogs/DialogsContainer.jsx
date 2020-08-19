import React from 'react';
import Dialogs from './Dialogs';
import {addMessageStateCreator, updateMessageAreaCreator} from '../../Redux/dialogsReducer'

const DialogsContainer = (props) => {
    let dialogsState = props.store.getState().dialogs;

    let addMessage = () => {
        props.store.dispatch(addMessageStateCreator());
        // props.addMessageState();

    }
    let changeMessage = (text) => {
        props.store.dispatch(updateMessageAreaCreator(text));
        // props.updateMessageArea(text);
    }

    return (
       <Dialogs addMessageState = {addMessage} updateMessageArea = {changeMessage} dialogsData = {dialogsState.dialogsData} messagesData = {dialogsState.messagesData} newMessageText = {dialogsState.newMessageText} />
    )
}
//updateMessageArea={props.updateMessageArea} addMessageState={props.addMessageState}
export default DialogsContainer;