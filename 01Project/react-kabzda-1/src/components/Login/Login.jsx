import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { getUserIfLogin, logIn } from '../../Redux/authReducer';


class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.getUserIfLogin();
    }
    onSubmit = (formData) => {
        console.log(formData);
        this.props.logIn(formData.login, formData.password, formData.rememberMe);
    }
    render() {
        return (<>
            {
                this.props.isAuth ?
                    <Redirect to='/profile' /> :
                    <div>
                        <h1>Loging page</h1>
                        <LoginReduxForm onSubmit={this.onSubmit} />
                    </div>
            }
        </>
        )
    }

}

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit} >
            <div>
                <Field type="text" placeholder="login" name="login" component={"input"} />
            </div>
            <div>
                <Field type="password" placeholder="password" name="password" component={"input"} />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={"input"} />
                remember me
                </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'loginForm'
})(LoginForm)

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth
    })
}


export default connect(mapStateToProps, { logIn, getUserIfLogin })(LoginContainer);