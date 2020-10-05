import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../Redux/authReducer';
import Header from './Header';



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.logIn();
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



export default connect(mapStateToProps, { logIn })(HeaderContainer);