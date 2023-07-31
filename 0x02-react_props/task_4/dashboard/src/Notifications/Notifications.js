import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import close from "../assets/close-icon.png";
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const styles = {
  position: "relative",
  float: "right",
  bottom: "55px",
  border: "none",
  opacity: "0.7",
  background: "transparent",
  cursor: "pointer",
};

function printOnClick() {
  console.log("Close button has been clicked");
}

const notification = getLatestNotification();

const Notifications = ({ displayDrawer }) => {
  return (
    <>
    <div className="menuItem">Your notifications</div>
    <div className="Notifications">
      {displayDrawer
        && <div className="Notification-display">
          <p>Here is the list of notifications</p>
          <button style={styles} arial-label="Close" onClick={printOnClick}>
            <img src={close} alt="Close" width="8px" />
          </button>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
          </ul>
        </div>}
    </div>
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};


export default Notifications;