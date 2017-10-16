import React from 'react';
import {PropTypes} from 'prop-types';
import Note from './Note.jsx';

export default class NotesList extends React.Component {
  render() {
    const {notes, deleteNote, editNote} = this.props;
    return (
      <div className='content-container'>
      {notes.map((note, i) => {
        return (
          <Note
          index={i}
          key={i}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
          />
          );  
        }).reverse()
      }
      </div>
    );
  };
}

NotesList.PropTypes = {
  notes: PropTypes.array,
  note: PropTypes.string,
  deleteNote: PropTypes.func,
  editNote: PropTypes.func
}
