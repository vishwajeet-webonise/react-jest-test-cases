import React from "react";

class DisplayToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // var data = this.props.Update ? updateData(this.props.Id,this.state.textValue) : saveData(this.state.textValue);
    return <div className="App">{this.printTable()}</div>;
  }
  printTable = () => {
    return this.props.arraylist.map((item, index) => {
      const { id, description } = item; //destructuring
      return (
        <tr>
          <td>{id}</td>
          <td>{description}</td>
          <td>
            <input type="button" value="edit" />
          </td>
          <td>
            <input type="button" value="delete" />
          </td>
        </tr>
      );
    });
  };
}
export default DisplayToDo;
