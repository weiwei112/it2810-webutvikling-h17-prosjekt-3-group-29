import React from 'react';
import AddNote from '../components/Notes/AddNote.jsx';
import NotesList from '../components/Notes/NotesList.jsx';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: localStorage.notes ? JSON.parse(localStorage.notes) : []
    }

    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote(note, index) {
    let notes = this.state.notes.slice();

    notes.length > index+1 ?
      notes.push(note)
    :
      notes[index] = note;

    this.setState({
      notes: notes
    });

    localStorage.tempNote = '';
    localStorage.notes = JSON.stringify(notes);
  }

  editNote(index) {
    // TODO
  }

  deleteNote(index) {
    let notes = this.state.notes.slice();
    notes.splice(index, 1);

    this.setState({
      notes: notes
    });

    localStorage.notes = JSON.stringify(notes);
  }

  render() {
    const tempNote = localStorage.tempNote ? true : false;
    return (
      <div className='content-container'>
        <h1>Notes</h1>
        <AddNote notes={this.state.notes} addNote={this.addNote} tempNote={tempNote}/>
        <NotesList
          notes={this.state.notes}
          editNote={this.editNote}
          deleteNote={this.deleteNote}
          />
      </div>
    );
  };
}
