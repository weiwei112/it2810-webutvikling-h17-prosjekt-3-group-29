import React from 'react';
import {PropTypes} from 'prop-types';

export default class TextArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: localStorage.tempNote || '', index: this.props.notes.length};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.state.index ? 
      this.setState({value: event.target.value})
    :
      this.setState({value: event.target.value, index: this.props.notes.length});
    localStorage.tempNote = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleButtonClick();
    this.props.addNote(this.state.value, this.state.index);
    localStorage.tempNote = '';
  }

  handleReset(event) {
    event.preventDefault();
    this.props.handleButtonClick();
    this.setState({value: ''});
    localStorage.tempNote = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset} className='child-container flex-wrapper-row'>
        <textarea value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Save"/>
        <input type="reset" value="Discard"/>
      </form>
    );
  }
}

TextArea.PropTypes = {
  notes: PropTypes.array,
  addNote: PropTypes.func,
  handleButtonClick: PropTypes.func
};
