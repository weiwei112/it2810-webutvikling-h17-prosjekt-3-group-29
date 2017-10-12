import React from 'react';
import {PropTypes} from 'prop-types';

export default class DeleteNote extends React.Component {
  deleteNote() {
    const {notes, index} = this.props;
    let newNotes = notes.slice();
    delete newNotes[index];
    localStorage.notes = newNotes;
  }

  render(){
  	const {index, notes} = this.props;
  	return (
      <div className='content-container'>
        <button onClick={this.deleteNote()}>Delete Note</button>
      </div>
    );
  };
}

DeleteNote.PropTypes = {
  index: PropTypes.int,
  notes: PropTypes.array
}
