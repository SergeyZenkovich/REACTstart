import rerenderET from '../render';
let state = {
    profile: {
        postsData: [
            {
                id: 1,
                message: 'Hi, how are you?',
                likesCounter: 15
            },
            {
                id: 2,
                message: "It's my first post",
                likesCounter: 20
            }
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogs: {
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
    },
    sidebar: {
        friends: [
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
            },
            {
                id: 5,
                name: 'Max'
            },
            {
                id: 6,
                name: 'Denis'
            }
        ]
    }
}
let addPostState = () => {
    let index = state.profile.postsData[state.profile.postsData.length - 1].id;
    let newPost = {
        id: index + 1,
        message: state.profile.newPostText,
        likesCounter: 0
    };
    state.profile.postsData.push(newPost);
    state.profile.newPostText = '';
    rerenderET(state);
}
let addMessageState = () => {
    let index = state.dialogs.messagesData[state.dialogs.messagesData.length - 1].id;
    let newMessage = {
        id: index + 1,
        message: state.dialogs.newMessageText
    }
    state.dialogs.messagesData.push(newMessage);
    state.dialogs.newMessageText = '';
    rerenderET(state);
}
let updateTextArea = (text) => {
    state.profile.newPostText = text;
    rerenderET(state);
}
let updateMessageArea = (text) => {
    state.dialogs.newMessageText = text;
    rerenderET(state);
}
export { addPostState, updateTextArea, addMessageState, updateMessageArea };
export default state;