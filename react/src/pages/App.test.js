import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';
import Header from './Header';

import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });


describe('App', () => {
    it('renders without crashing', () => {
        const app = shallow(<App/>);
        expect(app.exists());
    });
});


describe('Header ', () => {
    const head = shallow(<Header/>);
    it('renders without crashing', () => {
        expect(head.exists());
    });

    it('contains "icon" div', () => {
        expect(head.find('icon').exists());
    });

    it('contains <Navlink>', () => {
        expect(head.find('NavLink').exists());
    });

    it('contains 4 NavLink elements', () => {
        expect(head.find('li').children()).to.have.length(4);
    });

    it('doesn\'t contain 5 NavLink elements', () => {
        expect(head.find('li').children()).to.not.have.length(5);
    });
});