import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, savePhoto, setUserProfile, updateUserStatus } from '../../Redux/profileReducer';
import { withRouter } from "react-router";
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { compose } from 'redux';
import { getIsUserAuth, getProfile, getStatus, getUserId } from '../../Redux/profileSelectors';


class ProfileContainerAPI extends React.PureComponent {
    
    componentWillUnmount() {
        this.props.setUserProfile(null);
    }
    refreshProfileInfo(){
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    componentDidMount() {
        this.refreshProfileInfo();
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.userId!== this.props.match.params.userId ){
            this.refreshProfileInfo();
        }
        
    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateUserStatus={this.props.updateUserStatus} isOwner = {!!!this.props.match.params.userId} savePhoto = {this.props.savePhoto} />
            
        )
    }
}



let mapStateToProps = (state) => {
    return (
        {
            profile: getProfile(state),
            status: getStatus(state),
            userId: getUserId(state),
            isAuth: getIsUserAuth(state)
        }
    )
}


export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, updateUserStatus, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI);