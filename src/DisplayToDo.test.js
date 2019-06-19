import React from "react";
import Adapter from "enzyme-adapter-react-16";
import DisplayToDo from "./DisplayToDo";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
describe("", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <DisplayToDo arraylist={[{ id: "1", description: "learn node" }]} />
    );
  });
  it("should render properly", () => {
    expect(wrapper).toBeTruthy();
    //toHaveProperty("id");
  });

  it("should have atleats one item", () => {
    expect(wrapper.find("tr")).toHaveLength(1);
  });

  it("should have atleats one item", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
