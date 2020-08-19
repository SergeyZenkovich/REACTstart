import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => <DialogsContainer store = {props.store}/>} />
          <Route path='/profile' render={() => <Profile store = {props.store}/>} />
          <Route path='/settings' component={Settings} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}

//profile addPostState={props.addPostState} updateTextArea={props.updateTextArea} profile={props.state.profile} dispatch = {props.dispatch}  newPostText={props.state.profile.newPostText}
// dialogs state={props.state.dialogs} dispatch = {props.dispatch} newMessageText={props.state.dialogs.newMessageText}
// addMessageState={props.addMessageState} updateMessageArea={props.updateMessageArea}

export default App;
