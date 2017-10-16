import React from 'react';
import { PropTypes } from 'prop-types';
import DeleteNote from './DeleteNote.jsx';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    // TODO
  }

  handleDelete() {
    this.props.deleteNote(this.props.index);
  }

  render() {
    const { note, index } = this.props;
    return (
      <div className='content-container'>
        <h3>
          <div className='noteNum'>
            {parseInt(index + 1) + '. '}
          </div>
          <div className='noteText'>
            {note}
          </div>
        </h3>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  };
}

Note.PropTypes = {
  note: PropTypes.string,
  index: PropTypes.int,
  deleteNote: PropTypes.func,
  editNote: PropTypes.func,
};
