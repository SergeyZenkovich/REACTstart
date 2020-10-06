import React from 'react';
import Dialogs from './Dialogs';
import { addMessageStateCreator, updateMessageAreaCreator } from '../../Redux/dialogsReducer'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
    }
}
let mapDispatchToProps = (dispatch) => {
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
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer;