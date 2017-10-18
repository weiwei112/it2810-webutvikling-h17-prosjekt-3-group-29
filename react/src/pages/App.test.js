import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';
import Header from './Header';
import sinon from 'sinon';
import ToDoCreator from '../components/todo/ToDoCreator';
import ToDoEditor from '../components/todo/ToDoEditor';
import ToDoList from '../components/todo/ToDoList';
import ToDoApp from '../components/todo/ToDoApp';
import ToDoItem from '../components/todo/ToDoItem';
import {expect} from 'chai';

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


//a//
const setup = () => {
  const props = {
    onAddClick: jest.fn()
  }

  const wrapper = shallow(<ToDoCreator {...props} />)
  return {
    props,
    wrapper
  }
}

describe('ToDoCreator', () => {
  const { wrapper, props } = setup();

  it('ToDoCeator Component should be render', () => {
    expect(wrapper.find('input').exists());
  })

     it('ToDoCeator Component contain button', () => {
    expect(wrapper.find('button').exists());
  })
})


describe('ToDoEditor ', () => {
    const todoeditor = shallow(<ToDoEditor/>);
    it('ToDoEditor Component should be render', () => {
        expect(todoeditor.exists());
    });
    it('Test button ', () => {
        todoeditor.find('a').simulate('click', { preventDefault() {} });

    });
});

describe('ToDoList ', () => {
    const todolist = shallow(<ToDoList/>);
    it('ToDoList Component should be render', () => {
        expect(todolist.exists());
    });
});

describe('ToDoApp ', () => {
    const todoapp = shallow(<ToDoApp/>);
    it('ToDoApp Component should be render', () => {
        expect(todoapp.exists());
    });
});

describe('ToDoItem ', () => {
    const todoitem = shallow(<ToDoItem/>);
    it('ToDoApp Component should be render', () => {
        expect(todoitem.exists());
    });
});

