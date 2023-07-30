import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import close from "../assets/close-icon.png";
import NotificationItem from './NotificationItem'

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

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={styles} arial-label="Close" onClick={printOnClick}>
        <img src={close} alt="Close" width="8px" />
      </button>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}