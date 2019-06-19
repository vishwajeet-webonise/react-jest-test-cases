import AddToDoComponent from "./AddToDoComponent";
import React from "react";
import Adapter from "enzyme-adapter-react-16";

import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
var wrapper = shallow(<AddToDoComponent />);
describe("", () => {
  it("should render a button ", () => {
    wrapper.setProps({ updateTodoState: true });
    expect((wrapper.buttonName = "Add")).toEqual("Add");
  });
});
