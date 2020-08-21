import React from 'react';
import Dialogs from './Dialogs';
import {addMessageStateCreator, updateMessageAreaCreator} from '../../Redux/dialogsReducer'
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
//     let dialogsState = props.store.getState().dialogs;

//     let addMessage = () => {
//         props.store.dispatch(addMessageStateCreator());
//         // props.addMessageState();
//     }
//     let changeMessage = (text) => {
//         props.store.dispatch(updateMessageAreaCreator(text));
//         // props.updateMessageArea(text);
//     }

//     return (
//        <Dialogs addMessageState = {addMessage} updateMessageArea = {changeMessage} dialogsData = {dialogsState.dialogsData} messagesData = {dialogsState.messagesData} newMessageText = {dialogsState.newMessageText} />
//     )
// }



//updateMessageArea={props.updateMessageArea} addMessageState={props.addMessageState}

let mapStateToProps = (state) => {
    return {
        dialogs : state.dialogs
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        addMessage: () => {
            dispatch(addMessageStateCreator());
            // props.addMessageState();
        },
        changeMessage: (text) => {
            dispatch(updateMessageAreaCreator(text));
            // props.updateMessageArea(text);
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs) 


export default DialogsContainer;