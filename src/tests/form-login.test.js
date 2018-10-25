import React from 'react';
import {LoginForm} from '../components/form-login';
import {shallow} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

describe('<LoginForm />', () => {
  it('Should render without crashing', () => {
    shallow(<Provider store={store} >
    <LoginForm />
    </Provider>);
  });

  it('Should fire logIn callback when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = shallow(
      <Provider store={store} >
        <LoginForm onSubmit={callback}/>
      </Provider>);
    const user = 'User Test';
    const pass = 'password';
    wrapper.find('input[id="username"]').value = user;
    wrapper.find('input[id="password"]').value = pass;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalled();
  });

  // it('Should not fire onAdd if the input is empty', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<LoginForm onSubmit={callback} handleSubmit={handleSubmit} />);
  //   wrapper.instance().setEditing(true);
  //   wrapper.simulate('submit');
  //   expect(callback).not.toHaveBeenCalled();
  // });

})