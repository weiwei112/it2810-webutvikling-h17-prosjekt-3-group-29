import React from 'react';
import {PropTypes} from 'prop-types';

export default class TextArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: localStorage.tempNote || '',
      index: this.props.index,
      discardEdit: localStorage.tempNote || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.submitAndResetCommon = this.submitAndResetCommon.bind(this);
  }

  handleChange(event) {
    localStorage.tempNote = event.target.value;

    this.state.index ? 
      this.setState({value: event.target.value})
    :
      this.setState({value: event.target.value, index: this.props.index});
  }

  handleSubmit(event, discardEdit) {
    event.preventDefault();
    const value = discardEdit ? discardEdit : this.state.value;
    if(value.length > 0) {
      this.props.addNote(value, this.state.index);
    }
    this.submitAndResetCommon(event);
  }

  handleReset(event) {
    event.preventDefault();
    this.props.edit ?
      this.handleSubmit(event, this.state.discardEdit)
    :
      this.submitAndResetCommon(event);
  }

  submitAndResetCommon(event) {
    localStorage.tempNote = '';
    this.props.handleButtonClick(false);
    this.props.resetEdit();
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset} className='child-container flex-wrapper-row'>
        <textarea value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Save"/>
        <input type="reset" value={this.props.edit ? 'Discard changes' : 'Discard'}/>
      </form>
    );
  }
}

TextArea.PropTypes = {
  index: PropTypes.int,
  addNote: PropTypes.func,
  resetEdit: PropTypes.func,
  handleButtonClick: PropTypes.func,
  edit: PropTypes.bool
};
