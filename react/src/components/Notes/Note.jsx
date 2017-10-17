import React from 'react';
import {PropTypes} from 'prop-types';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    this.props.editNote(this.props.note, this.props.index);
  }

  handleDelete() {
    this.props.deleteNote(this.props.index);
  }

  render() {
    const {note, index} = this.props;
    return (
      <div>
        <h3 className='note'>
          {note}
        </h3>
        <button className='note-button' onClick={this.handleEdit}>Edit</button>
        <button className='note-button' onClick={this.handleDelete}>Delete</button>
      </div>
    );
  };
}

Note.PropTypes = {
  note: PropTypes.string,
  index: PropTypes.int,
  deleteNote: PropTypes.func,
  editNote: PropTypes.func
}
