import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/authReducer';
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then((response) => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data);
                console.log(response);
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