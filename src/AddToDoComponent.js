import React from "react";

class AddToDoComponent extends React.Component {
  render() {
    let label =
      this.props.updateTodoState === false
        ? this.props.addDescription
        : this.props.updatingTodoArray;

    let buttonName = this.props.updateTodoState === false ? "Add" : "Update";
    return (
      <div>
        <input
          type="text"
          onChange={this.props.getDescription}
          value={this.props.description}
        />
        <button onClick={label}>{buttonName}</button>
      </div>
    );
  }
}
export default AddToDoComponent;
