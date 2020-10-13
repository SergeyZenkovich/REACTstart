import React from 'react';
import { Field, reduxForm } from 'redux-form';


const Login = (props) => {
    const onSubmit = (formData) =>{console.log(formData)} 
    return (
        <div>
            <h1>Loging page</h1>
            <LoginReduxForm onSubmit= {onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form action="" onSubmit ={props.handleSubmit} >
            <div>
                <Field type="text" placeholder="login" name="login" component ={"input"} />
            </div>
            <div>
                <Field type="text" placeholder="password" name="password" component ={"input"} />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe"  component ={"input"}/>
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

export default Login;