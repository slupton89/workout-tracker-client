import React from 'react';
import {Landing} from '../components/landing';
import {shallow, mount} from 'enzyme';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import store from '../store';
import {Provider} from 'react-redux';

describe('<Landing />', () => {
  it('Should render without crashing', () => {
    shallow(
      <Provider store={store}>
          <Landing {...{loggedin: false}}/>
      </Provider>
    );
  });

  it('Should link to registration', () => {
    const history = createMemoryHistory();
    const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        <Landing {...{loggedin: true}}/>
      </Router>
    </Provider>);
    expect(wrapper.find('.registerBtn').exists()).toEqual(true);
  })

  it('Should link to login', () => {
    const history = createMemoryHistory();
    const wrapper = mount(
    <Router history={history}>
      <Landing />
    </Router>);
    expect(wrapper.find('.loginBtn').exists()).toEqual(true);
  })

})