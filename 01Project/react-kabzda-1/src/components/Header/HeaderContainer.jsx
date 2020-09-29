import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { setAuthUserData } from '../../Redux/authReducer';
import Header from './Header';



class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.auth().then((data) => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data);
            }
        });

    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}



export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);