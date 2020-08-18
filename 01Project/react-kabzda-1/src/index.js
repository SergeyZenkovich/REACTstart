import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore';

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';

// import { addPostState, updateTextArea, addMessageState, updateMessageArea, subscribe } from './Redux/state';
//addPostState={store.addPostState.bind(store)} updateTextArea={store.updateTextArea.bind(store)} addMessageState={store.addMessageState.bind(store)} updateMessageArea={store.updateMessageArea.bind(store)}

let rerenderET = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch = {store.dispatch.bind(store)}  />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderET(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderET(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
