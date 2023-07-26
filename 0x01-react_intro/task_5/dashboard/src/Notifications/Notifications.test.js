import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });
  it("should render three list items", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find("li")).toHaveLength(3);
  });
  it('should render text "Here is the list of notifications" ', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("p").text()).toBe("Here is the list of notifications")
  });
});