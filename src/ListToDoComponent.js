import React from "react";

class ListToDoComponent extends React.Component {
  render() {
    let todoListUI = this.props.todoList.map(todo => {
      return (
        <div key={todo.id}>
          <span>{todo.id}</span> <span>{todo.desc}</span>
          <span>
            <button key="edit" onClick={this.props.updateTodo}>
              Edit
            </button>
          </span>
          <span>
            <button key="delete" onClick={this.props.removeTodo}>
              Delete
            </button>
          </span>
        </div>
      );
    });
    return (
      <div>
        <span>Sr</span>
        <span>Description</span>
        <span>Action</span>
        <span>{todoListUI}</span>
      </div>
    );
  }
}

export default ListToDoComponent;
