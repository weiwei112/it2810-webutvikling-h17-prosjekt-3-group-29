import React from 'react';
import ToDoItem from './ToDoItem.jsx';
import ToDoEditor from './ToDoEditor.jsx';

export default class ToDoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => {
          if (this.props.editing == i) {
            return <ToDoEditor
              deleteToDo={this.props.deleteToDo}
              editToDo={this.props.editToDo}
              setEditing={this.props.setEditing}
              index={i}
              key={i}
              todo={todo}
            />;
          }

          return (<ToDoItem
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
