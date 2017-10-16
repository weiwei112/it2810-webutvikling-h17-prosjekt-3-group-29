import React from 'react';

export default class ToDoCreator extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = { value: '' };

    // Bindings
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: '' });
    this.props.addToDo({ description: this.state.value, status: false });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='child-container flex-wrapper-row'
        >
        <input
          className = 'text-field-input active'
          ref={(input) => this.input = input}
          type='text'
          placeholder='What needs to be done?'
          value={this.state.value}
          onChange={this.onChange}
        />
        <input className='button' type='submit' value='Add'/>
      </form>
    );
  };
}
