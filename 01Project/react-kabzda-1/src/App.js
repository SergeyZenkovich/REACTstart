import React from 'react';
import { Route, withRouter } from 'react-router-dom'
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
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/appReducer';
import Preloader from './components/common/preloader/preloader';



class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return (Preloader);
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav store={this.props.store} />
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
    );
  }

}

//profile addPostState={props.addPostState} updateTextArea={props.updateTextArea} profile={props.state.profile} dispatch = {props.dispatch}  newPostText={props.state.profile.newPostText}
// dialogs state={props.state.dialogs} dispatch = {props.dispatch} newMessageText={props.state.dialogs.newMessageText}
// addMessageState={props.addMessageState} updateMessageArea={props.updateMessageArea}
const mapStateToProps = (state) => {
  return ({
    initialized: state.app.initialized
  })
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
