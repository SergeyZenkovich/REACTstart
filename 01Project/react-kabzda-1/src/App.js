import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.css';
import Nav from './components/Navbar/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/appReducer';
import Preloader from './components/common/preloader/preloader';
import { withSuspense } from './hocs/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return (<Preloader />);
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav store={this.props.store} />
        <div className="app-wrapper-content">
          <Route path='/login' render={() => <Login />} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/settings' render={withSuspense(Settings)} />
          <Route path='/news' render={withSuspense(News)} />
          <Route path='/music' render={withSuspense(Music)} />
          <Route path='/users' render={withSuspense(UsersContainer)} />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    initialized: state.app.initialized
  })
}


export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);;
