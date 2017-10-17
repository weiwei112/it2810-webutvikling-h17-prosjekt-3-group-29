import React from 'react';
import {PropTypes} from 'prop-types';
import Note from './Note.jsx';
import TextArea from './TextArea.jsx';

export default class AddOrEditNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {btn: this.props.tempNote};
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
    this.handleUnclicked = this.handleUnclicked.bind(this);
  }

  handleButtonClick(btnState) {
    this.setState({btn: btnState});
  }

  handleClicked() {
    this.handleButtonClick(false);
  }

  handleUnclicked() {
    this.handleButtonClick(true);
  }

  render() {
    const {index, addNote, edit, resetEdit} = this.props;
    return this.state.btn || edit ?
      <div className='textarea-container'>
        <button className='note-button' id="clicked-note-button" onClick={this.handleClicked}>Add Note</button>
        <TextArea
          handleButtonClick={this.handleButtonClick}
          index={index}
          addNote={addNote}
          edit={edit}
          resetEdit={resetEdit}
        />
      </div>
    :
      <div className='textarea-container'>
        <button className='note-button' onClick={this.handleUnclicked}>Add Note</button>
      </div>;
  };
}

AddOrEditNote.PropTypes = {
  index: PropTypes.int,
  addNote: PropTypes.func,
  resetEdit: PropTypes.func,
  tempNote: PropTypes.bool,
  edit: PropTypes.bool
};
