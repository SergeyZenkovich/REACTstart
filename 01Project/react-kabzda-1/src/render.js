import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';

import {addPostState,updateTextArea} from './Redux/state';

let rerenderET = (state)=>{
    ReactDOM.render(
      <React.StrictMode>
        <App state = {state} addPostState = {addPostState} updateTextArea = {updateTextArea} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

export default rerenderET;