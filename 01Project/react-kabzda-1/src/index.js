import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// import { addPostState, updateTextArea, addMessageState, updateMessageArea, subscribe } from './Redux/state';
//addPostState={store.addPostState.bind(store)} updateTextArea={store.updateTextArea.bind(store)} addMessageState={store.addMessageState.bind(store)} updateMessageArea={store.updateMessageArea.bind(store)}
// App state={state} dispatch = {store.dispatch.bind(store)} store = {store} 

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//OLD  Rerender
// let rerenderET = (state) => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }
// rerenderET(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderET(state);
// });