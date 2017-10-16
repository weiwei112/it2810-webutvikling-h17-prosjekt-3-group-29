import React from 'react';
import ToDoCreator from './ToDoCreator.jsx';
import ToDoList from './ToDoList.jsx';

export default class ToDoApp extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      editing: -1,
      todos: JSON.parse(localStorage.todos) || [],
    };

    // Bindings
    this.addToDo = this.addToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.setEditing = this.setEditing.bind(this);
  }

  addToDo(todo) {
    // TODO: Validate todo object being passed in
    // TODO: Implement Alerts
    if (todo.description.length > 0) {
      let newToDos = this.state.todos.slice();
      newToDos.push(todo);

      this.setState({
        editing: this.state.editing,
        todos: newToDos,
      });

      localStorage.todos = JSON.stringify(newToDos);
    }
  }

  editToDo(todo, index) {
    // TODO: Validate todo object being passed in and index
    // TODO: Implement Alerts
    if (todo.description.length > 0) {
      let newToDos = this.state.todos.slice();
      newToDos[index] = todo;
      this.setState({
        editing: this.state.editing,
        todos: newToDos,
      });

      localStorage.todos = JSON.stringify(newToDos);
    }
  }

  deleteToDo(index) {
    // TODO: Validate index
    let newToDos = this.state.todos.slice();
    newToDos.splice(index, 1);

    this.setState({
      editing: -1,
      todos: newToDos,
    });

    localStorage.todos = JSON.stringify(newToDos);
  }

  setEditing(index) {
    // TODO: Validate index
    this.setState({
      editing: index,
      todos: this.state.todos,
    });
  }

  render() {
    return (
      <div className='todo-app'>
        <ToDoCreator addToDo={this.addToDo} />
        <ToDoList
          editing={this.state.editing}
          todos={this.state.todos}
          editToDo={this.editToDo}
          deleteToDo={this.deleteToDo}
          setEditing={this.setEditing}
        />
      </div>
    );
  };
}
