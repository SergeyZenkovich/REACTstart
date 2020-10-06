import React from 'react';
import Dialogs from './Dialogs';
import { addMessageStateCreator, updateMessageAreaCreator } from '../../Redux/dialogsReducer'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageStateCreator());
        },
        changeMessage: (text) => {
            dispatch(updateMessageAreaCreator(text));
        }
    }
}





const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


export default DialogsContainer;