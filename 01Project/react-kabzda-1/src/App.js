import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Navbar/Nav';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav store={props.store} />
        <div className="app-wrapper-content">
          <Route path='/login' render={() => <Login />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/settings' component={Settings} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/users' render={() => <UsersContainer />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

//profile addPostState={props.addPostState} updateTextArea={props.updateTextArea} profile={props.state.profile} dispatch = {props.dispatch}  newPostText={props.state.profile.newPostText}
// dialogs state={props.state.dialogs} dispatch = {props.dispatch} newMessageText={props.state.dialogs.newMessageText}
// addMessageState={props.addMessageState} updateMessageArea={props.updateMessageArea}

export default App;
