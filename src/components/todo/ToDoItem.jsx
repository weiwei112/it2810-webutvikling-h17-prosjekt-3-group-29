import React from 'react';

export default class ToDoItem extends React.Component {
  constructor(props) {
    super(props);

    // Bindings
    this.onClick = this.onClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  onClick(event) {
    let newToDo = {
      description: this.props.todo.description,
      status: !this.props.todo.status,
    };
    this.props.editToDo(newToDo, this.props.index);
  }

  handleEdit() {
    this.props.setEditing(this.props.index);
  }

  render() {
    return (
      <div className='child-container flex-wrapper-row'>
        <div
          className={
            this.props.todo.status ? 'todo-done text-field' : 'todo text-field'
          }
          onClick={this.onClick}>
          {this.props.todo.description}
        </div>
        <button className='button' onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
}
