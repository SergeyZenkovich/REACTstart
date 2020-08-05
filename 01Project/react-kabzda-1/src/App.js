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



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogs} newMessageText={props.state.dialogs.newMessageText} addMessageState={props.addMessageState} updateMessageArea={props.updateMessageArea} />} />
          <Route path='/profile' render={() => <Profile profile={props.state.profile} addPostState={props.addPostState} updateTextArea={props.updateTextArea} newPostText={props.state.profile.newPostText} />} />
          <Route path='/settings' component={Settings} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
