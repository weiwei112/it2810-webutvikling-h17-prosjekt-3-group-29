import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import App from '../App';
import  Header  from './Header;

import sinon from 'sinon';
import { expect } from 'chai';



describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });
});



describe('Header ', () => {
it('should render Header without crashing', () => {
        const div = document.createElement('div');
       ReactDOM.render(<Header />, div);
    });

   it('should render four nav_link', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.active')).to.have.length(4);
    });
});



it('simulates click events', () => {
  const onButtonClick = sinon.spy()
  const wrapper = shallow(
    < onButtonClick={onButtonClick} />
  )
  wrapper.find('button').simulate('click')
  expect(onButtonClick.calledOnce).to.be.true
})



