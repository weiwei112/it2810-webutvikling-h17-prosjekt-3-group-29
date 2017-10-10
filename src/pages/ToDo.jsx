import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/todo.css';

export default class ToDoPage extends React.Component {
  constructor(props) {
    super(props);
    // localStorage.todos = JSON.stringify([]); // uncomment to reset localStorage
    this.state = {
      editing: -1,
      todos: JSON.parse(localStorage.todos) || []
    };
    this.addToDo = this.addToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.setEditing = this.setEditing.bind(this);
  }
  addToDo(todo) {
    // TODO: Validate todo object being passed in
    let newToDos = this.state.todos.slice();
    newToDos.push(todo);

    this.setState({
      editing: this.state.editing,
      todos: newToDos
    });

    localStorage.todos = JSON.stringify(newToDos);
  }

  editToDo(todo, index) {
    // TODO: Validate todo object being passed in and index
    let newToDos = this.state.todos.slice();
    newToDos[index] = todo;
    this.setState({
      editing: -1,
      todos: newToDos
    });

    localStorage.todos = JSON.stringify(newToDos);
  }

  deleteToDo(index) {
    // TODO: Validate index
    console.log('deleting');
    let newToDos = this.state.todos.slice();
    newToDos.splice(index, 1);

    this.setState({
      editing: -1,
      todos: newToDos
    });

    localStorage.todos = JSON.stringify(newToDos);
  }

  setEditing(index) {
    this.setState({
      editing: index,
      todos: this.state.todos
    });
  }

  render() {
    return (
      <div className='content-container'>
        <ToDoCreator addToDo={this.addToDo} />
        <hr/>
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

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => {
          if (this.props.editing == i) {
            return <ToDoEditor
              deleteToDo={this.props.deleteToDo}
              editToDo={this.props.editToDo}
              index={i}
              key={i}
              todo={todo}
            />;
          }
          return (<ToDo
            editToDo={this.props.editToDo}
            index={i}
            key={i}
            setEditing={this.props.setEditing}
            todo={todo}
          />);
        }).reverse()}
      </div>
    );
  }
}

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  onClick(event) {
    let newToDo = {
      description: this.props.todo.description,
      status: !this.props.todo.status
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
            this.props.todo.status ? 'done' : ''
          }
          onClick={this.onClick}>
          {this.props.todo.description}
        </div>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
}

class ToDoCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    // Bindings
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addToDo({description: this.state.value, status: false});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='child-container flex-wrapper-row'>
        <input ref={(input) => this.input = input} type='text' placeholder='What needs to be done?' value={this.state.value} onChange={this.onChange}/>
        <input type='submit' value='Add'/>
      </form>
    );
  };
}

class ToDoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.todo.description};
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.input.focus();
  }
  onChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.editToDo({description: this.state.value, status: this.props.todo.status}, this.props.index);
  }
  handleDelete(event) {
    event.preventDefault();
    this.props.deleteToDo(this.props.index);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='child-container flex-wrapper-row'>
        <input ref={(input) => this.input = input} type='text' placeholder='What needs to be done?' value={this.state.value} onChange={this.onChange}/>
        <div>
          <input type='submit' value='Save'/>
          <input type='button' value='Delete' onClick={this.handleDelete}/>
        </div>
      </form>
    );
  }
}
