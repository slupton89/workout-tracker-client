import React from 'react';
import {RegistrationForm} from '../components/form-registration';
import {shallow} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

describe('<RegistrationForm />', () => {
  it('Should render without crashing', () => {
    shallow(
      <Provider store={store}>
        <RegistrationForm />
      </Provider>);
  });

  it('Should fire logIn callback when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = shallow(
      <Provider store={store}>
        <RegistrationForm onSubmit={callback}/>
      </Provider>);
    const user = 'Test User';
    const pass = 'password';
    const name = 'Test Name';
    const email = 'test@email';
    const age = '20';
    const height = `6'2"`;
    const weight = '50';
    wrapper.find('input[id="username"]').value = user;
    wrapper.find('input[id="password"]').value = pass;
    wrapper.find('input[id="fullName"]').value = name;
    wrapper.find('input[id="email"]').value = email;
    wrapper.find('input[id="age"]').value = age;
    wrapper.find('input[id="height"]').value = height;
    wrapper.find('input[id="weight"]').value = weight;

    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith();
  })

})