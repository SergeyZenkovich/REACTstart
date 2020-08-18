const ADD_MESSAGE_STATE = 'ADD-MESSAGE-STATE';
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE_STATE:
            let index = state.messagesData[state.messagesData.length - 1].id;
            let newMessage = {
                id: index + 1,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_MESSAGE_AREA:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

const addMessageStateCreator = () =>({ type: ADD_MESSAGE_STATE });
const updateMessageAreaCreator = (t) =>({ type: UPDATE_MESSAGE_AREA, text: t});

export{addMessageStateCreator, updateMessageAreaCreator }

export default dialogsReducer;