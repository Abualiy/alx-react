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

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <>
    <div className="menuItem">Your notifications</div>
    <div className="Notifications">
      {displayDrawer
        ? <div className="Notification-display">
          <p>Here is the list of notifications</p>
          <button style={styles} arial-label="Close" onClick={printOnClick}>
            <img src={close} alt="Close" width="8px" />
          </button>
          <ul>
            {
                listNotifications.length == 0 ?
                  <NotificationItem type="default" value="No new notification for now" />
                : null
              }
              {
                listNotifications.map((val, idx)=> {
                  return <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                />
                })
              }
              </ul>
        </div>
        : null}
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