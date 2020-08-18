const ADD_MESSAGE_STATE = 'ADD-MESSAGE-STATE';
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Dimych'
        },
        {
            id: 2,
            name: 'Romchick'
        },
        {
            id: 3,
            name: 'Egor'
        },
        {
            id: 4,
            name: 'Vlados'
        }
    ],
    newMessageText: 'Hello Samurai!',
    messagesData: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How its going?'
        },
        {
            id: 3,
            message: 'How is Dimych?'
        },
        {
            id: 4,
            message: 'Yo'
        }
    ],
};

const dialogsReducer = (state = initialState, action) => {
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