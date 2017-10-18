import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import sinon from 'sinon';
import {expect} from 'chai';

// Import Components
import App from './App';
import Header from './Header';
import Notes from './Notes';
import Note from '../components/Notes/Note';
import NotesList from '../components/Notes/NotesList';
import TextArea from '../components/Notes/TextArea';

// Mock localStorage
global.window = {};
import localStorage from 'mock-local-storage';
window.localStorage = global.localStorage;

// Configure Enzyme to use react-15.x
Enzyme.configure({ adapter: new Adapter() });

// Main app test
describe('App', () => {
    it('Renders without crashing', () => {
        const app = shallow(<App/>);
        expect(app.exists());
    });

    it('renders Header', () => {
        const app = shallow(<App/>);
        expect(app.find('Header').exists());
    });
    it('renders Main', () => {
        const app = shallow(<App/>);
        expect(app.find('Main').exists());
    });

});

// Header test
describe('Header ', () => {
    it('Renders without crashing', () => {
        const head = shallow(<Header/>);
        expect(head.exists());
    });

    it('contains "icon" div', () => {
        const head = shallow(<Header/>);
        expect(head.find('icon').exists());
    });

    it('contains <Navlink>', () => {
        const head = shallow(<Header/>);
        expect(head.find('NavLink').exists());
    });

    it('contains 4 NavLink elements', () => {
        const head = shallow(<Header/>);
        expect(head.find('ul').children()).to.have.length(4);
    });

});

// Notes test
describe('Notes', () => {
    it('Renders without crashing', () => {
        const notes = shallow(<Notes/>);
        expect(notes.exists());
    });

    it('Loads AddOrEditNote', () => {
        const notes = shallow(<Notes/>);
        expect(notes.find('AddOrEditNote').exists());
    });

    it('Loads NotesList', () => {
        const notes = shallow(<Notes/>);
        expect(notes.find('NotesList').exists());
    });

    it('Loads TextArea', () => {
        const notes = shallow(<Notes/>);
        expect(notes.find('TextArea').exists());
    });

});

//NotesList test
describe('NotesList', () => {
    it('Renders without crashing', () => {
        const note = ["Hey", "Ho"];
        const noteslist = shallow(<NotesList notes={note}/>);
        expect(noteslist.exists());
    });

    it('Loads stored notes', () => {
        const note = ["Hey", "Ho"];
        const noteslist = shallow(<NotesList notes={note}/>);
        expect(noteslist.find('div').children()).to.have.length(2);
    });

});

// Note test
describe('Note', () => {
    it('Renders without crashing', () => {
        const value = "Hey";
        const note = shallow(<Note note={value} index={1}/>);
        expect(note.exists());
    });

    it('Loads stored note with correct value', () => {
        const value = "Hey";
        const index = 1;
        const note = shallow(<Note note={value} index={index}/>);
        expect(note.find('h3').text()).to.equal("Hey");
    });

});

// TextArea test
describe('TextArea', () => {
    it('Renders without crashing', () => {
        const area = shallow(<TextArea />);
        expect(area.exists());
    });
});