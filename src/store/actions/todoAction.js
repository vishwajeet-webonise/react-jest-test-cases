import axios from "axios";

export const addTodo = todo => ({
  type: "ADD_TODO",
  payload: todo
});

export const saveTodoOnServer = desc => {
  return dispatch => {
    return axios({
      method: "post",
      url: "http://localhost:5000/todos",
      data: { desc }
    })
      .then(response => {
        let todoObject = response.data;
        dispatch(addTodo(todoObject));
      })
      .catch(e => console.log("error", e));
  };
};

export const deleteTodo = todo => ({
  type: "DELETE_TODO",
  payload: todo
});

export const deleteTodoFromServer = id => {
  return dispatch => {
    return axios({
      method: "post",
      url: "http://localhost:5000/tododelete",
      data: { id: id }
    })
      .then(response => {
        let todo = response.data;
        dispatch(deleteTodo(todo));
      })
      .catch(e => console.log("error", e));
  };
};

export const updateTodo = todo => ({
  type: "UPDATE_TODO",
  payload: todo
});

export const updateTodoOnServer = (id, desc) => {
  return dispatch => {
    return axios({
      method: "post",
      url: "http://localhost:5000/todoupdate",
      data: { id: id, desc: desc }
    })
      .then(response => {
        let todo = response.data;
        dispatch(updateTodo(todo));
      })
      .catch(e => console.log("error", e));
  };
};

export const addLoadedTodo = todos => ({
  type: "LOADED_TODO",
  payload: todos
});

export const loadTodoFromServer = () => {
  return dispatch => {
    return axios({
      method: "get",
      url: "http://localhost:5000/todos"
    })
      .then(response => {
        let todo = response.data;
        dispatch(addLoadedTodo(todo));
      })
      .catch(e => console.log("error", e));
  };
};
