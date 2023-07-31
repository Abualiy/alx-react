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
  it('should display the menu item when displayDrawer is false', () => {
    const { queryByText } = render(<Notifications />);
    const menuItemElement = queryByText(/Your notifications/i);
    expect(menuItemElement).toBeInTheDocument();
  });

  it('should not display the div.Notifications when displayDrawer is false', () => {
    const { queryByText } = render(<Notifications />);
    const notificationsElement = queryByText(/Notifications are displayed here/i);
    expect(notificationsElement).not.toBeInTheDocument();
  });

  it('should display the menu item when displayDrawer is true', () => {
    const { queryByText } = render(<Notifications displayDrawer={true} />);
    const menuItemElement = queryByText(/Your notifications/i);
    expect(menuItemElement).toBeInTheDocument();
  });

  it('should display the div.Notifications when displayDrawer is true', () => {
    const { queryByText } = render(<Notifications displayDrawer={true} />);
    const notificationsElement = queryByText(/Notifications are displayed here/i);
    expect(notificationsElement).toBeInTheDocument();
  });
});