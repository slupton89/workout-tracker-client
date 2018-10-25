import React from 'react';
import Footer from '../components/footer';
import {shallow, mount} from 'enzyme';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';



describe('<Footer />', () => {
  it('Should render without crashing', () => {
    shallow(<Footer />);
  });


  it('Should link to another page', () => {
    const history = createMemoryHistory();
    const wrapper = mount(
    <Router history={history}>
      <Footer />
    </Router>);
    expect(wrapper.find('.newWorkoutBtn').exists()).toEqual(true);
  })

})