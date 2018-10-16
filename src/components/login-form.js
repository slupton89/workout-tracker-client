import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {login} from './actions/login';
import Input from './input';

function LoginForm(props) {
    return (
      <form onSubmit={props.handleSubmit(values =>
        props.dispatch(login(values))
      )}>
        <Field name='username' id='username' component={Input} element='input' type='text'
          label='Username' />
        <Field name='password' id='password' component={Input} element='input' tpye='password'
          label='Password' />

        <button>Submit</button>
      </form>
    )
  }

export default reduxForm({
  form: 'login'
})(LoginForm);