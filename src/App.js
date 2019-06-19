import React from "react";
import "./App.css";
import ListToDoComponent from "./ListToDoComponent";
import AddToDoComponent from "./AddToDoComponent";
import { connect } from "react-redux";

import {
  saveTodoOnServer,
  deleteTodoFromServer,
  updateTodoOnServer,
  loadTodoFromServer
} from "./store/actions/todoAction";

export class App extends React.Component {
  id = 1;
  constructor(props) {
    super(props);
    this.state = {
      todoArray: [],
      description: "",
      updateItem: {},
      updateTodoState: false
    };
  }

  componentDidMount() {
    this.props.loadTodo();
  }

  render() {
    return (
      <div className="App">
        <AddToDoComponent
          getDescription={this.getDescription}
          addDescription={this.addDescription}
          description={this.state.description}
          updatingTodoArray={this.updatingTodoArray}
          updateTodoState={this.state.updateTodoState}
        />
        <ListToDoComponent
          todoList={this.props.todoArray}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
        />
      </div>
    );
  }
  /* to get data from text box*/
  getDescription = event => {
    this.setState({ description: event.target.value });
  };
  /**To update the value from array at ListTodoComponent*/
  updateTodo = todo => {
    this.setState({
      description: todo.desc,
      updateItem: todo,
      updateTodoState: true
    });
  };

  /* to put data into array, props to AddToDoComponent
  addDescription = () => {
    var tempDescriptionObject = {
      id: this.id++,
      description: this.state.description
    };
    var tempTodoArray = [...this.state.todoArray, tempDescriptionObject];
    this.setState({ todoArray: tempTodoArray, description: "" });
  };*/

  /*To remove item from array*/
  /*removeTodo = todo => {
    var tempRemoveArray = this.state.todoArray.filter(
      removeTodoItem => removeTodoItem.id !== todo.id
    );
    this.setState({ todoArray: tempRemoveArray });
  };*/

  /**To update teh array with new value in AddToDoComponent 
  updatingTodoArray = () => {
    var updateDescription = this.state
      .description; 

    var indexOfTodoArray = this.state.todoArray.findIndex(
      todo => todo.id === this.state.updateItem.id
    );
    /** Finding the array object to be updated

    this.setState(prevstate => {
      prevstate.todoArray[indexOfTodoArray].description = updateDescription;
    });
    this.setState({ updateTodoState: false, description: "" });
  };*/

  addDescription = () => {
    var desc = this.state.description;
    this.props.addTodo(desc);
  };

  removeTodo = todo => {
    this.props.deleteTodo(todo.id);
  };

  updatingTodoArray = () => {
    var desc = this.state.description;
    this.props.updateTodoForDispatch(this.state.updateItem.id, desc);
  };
}

const mapStateToProps = state => ({
  todoArray: state.todoArray
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(saveTodoOnServer(text)),
  loadTodo: () => dispatch(loadTodoFromServer()),
  deleteTodo: id => dispatch(deleteTodoFromServer()),
  updateTodoForDispatch: (id, desc) => dispatch(updateTodoOnServer(id, desc))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
