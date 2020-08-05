import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';

import { addPostState, updateTextArea, addMessageState, updateMessageArea, subscribe } from './Redux/state';

let rerenderET = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPostState={addPostState} updateTextArea={updateTextArea} addMessageState={addMessageState} updateMessageArea={updateMessageArea} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderET(state);

subscribe(rerenderET);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// export default rerenderET;
