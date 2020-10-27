import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { logIn } from '../../Redux/authReducer';
import { requiredField } from '../../utils/validators/validators';
import { FormControl } from '../common/FormsControls/FormsControls';
import style from '../common/FormsControls/FormsControls.module.css'


class LoginContainer extends React.Component {
    onSubmit = (formData) => {
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
                <Field type="text" placeholder="login" name="login" component={FormControl} validate={requiredField} fieldtype="input" />
            </div>
            <div>
                <Field type="password" placeholder="password" name="password" component={FormControl} validate={requiredField} fieldtype="input" />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={"input"} />
                remember me
            </div>
            <div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
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


export default connect(mapStateToProps, { logIn })(LoginContainer);