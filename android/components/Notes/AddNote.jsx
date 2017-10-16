import React from 'react';
import { PropTypes } from 'prop-types';
import Note from './Note.jsx';
import TextArea from './TextArea.jsx';

export default class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btn: this.props.tempNote };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ btn: !this.state.btn });
  }

  render() {
    const { notes, addNote } = this.props;
    return this.state.btn ?
      <div className='content-container'>
        <button className="clicked" onClick={this.handleButtonClick}>Add Note</button>
        <TextArea
          handleButtonClick={this.handleButtonClick}
          notes={notes}
          addNote={addNote}
        />
      </div>
    :
      <div className='content-container'>
        <button className="unclicked" onClick={this.handleButtonClick}>Add Note</button>
      </div>;
  };
}

AddNote.PropTypes = {
  notes: PropTypes.array,
  addNote: PropTypes.func,
  tempNote: PropTypes.bool,
};
