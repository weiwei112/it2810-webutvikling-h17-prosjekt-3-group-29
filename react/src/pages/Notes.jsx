import React from 'react';
import AddOrEditNote from '../components/Notes/AddOrEditNote.jsx';
import NotesList from '../components/Notes/NotesList.jsx';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: localStorage.notes ? JSON.parse(localStorage.notes) : [],
      edit: false
    }

    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.resetEdit = this.resetEdit.bind(this);
  }

  addNote(note, index) {
    let notes = this.state.notes.slice();

    notes.length > index+1 ?
      notes.push(note)
    :
      notes[index] = note;

    localStorage.tempNote = '';
    localStorage.notes = JSON.stringify(notes);

    this.setState({
      notes: notes
    });
  }

  editNote(note, index) {
    localStorage.tempNote = note;
    this.deleteNote(index);
    this.setState({edit: true});
  }

  deleteNote(index) {
    let notes = this.state.notes.slice();
    notes.splice(index, 1);

    localStorage.notes = JSON.stringify(notes);

    this.setState({
      notes: notes
    });
  }

  resetEdit() {
    this.setState({edit: false});
  }

  render() {
    const tempNote = localStorage.tempNote ? true : false;
    return (
      <div className='content-container'>
        <h1>Notes</h1>
        <AddOrEditNote
          index={this.state.notes.length}
          edit={this.state.edit}
          resetEdit={this.resetEdit}
          addNote={this.addNote}
          tempNote={tempNote}
        />
        <NotesList
          notes={this.state.notes}
          editNote={this.editNote}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  };
}
