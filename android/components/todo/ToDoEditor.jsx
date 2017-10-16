import React from 'react';

export default class ToDoEditor extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = { value: this.props.todo.description };

    // Bindings
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  onChange(event) {
    this.setState({ value: event.target.value });
    let todo = { description: event.target.value, status: this.props.todo.status };
    this.props.editToDo(todo, this.props.index);
  }

  onFocus(event) {
    let inputLength = this.state.value.length;
    this.input.setSelectionRange(0, inputLength);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setEditing(-1);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteToDo(this.props.index);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='todo-editor child-container flex-wrapper-row'
      >
        <input
          className = 'text-field-input active'
          ref={(input) => this.input = input}
          type='text'
          placeholder='What needs to be done?'
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
        <div>
        <input className='button' type='submit' value='Done'/>
        <input className='button' type='button' value='Delete' onClick={this.handleDelete}/>
        </div>
      </form>
    );
  }
}
