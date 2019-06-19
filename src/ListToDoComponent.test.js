import React from "react";
import Adapter from "enzyme-adapter-react-16";
import ListToDoComponent from "./ListToDoComponent";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("", () => {
  let wrapper = shallow(
    <ListToDoComponent todoList={[{ id: "1", description: "learn node" }]} />
  );

  it("should render properly", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should have atleats one item", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });
});
