import React from 'react';
import PropTypes from 'prop-types';


const NotificationItem = ({ type, value, html }) => {
	if (value) return(<li data-notification-type={type}>{value}</li>)
	if (html) return(<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
	return(<li data-notification-type={type}></li>)
}

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired, // Require type to be a defined prop and a string
	value: PropTypes.string.isRequired, // Verify that value is a string
	html: PropTypes.shape({
	  __html: PropTypes.string.isRequired, // Verify that html is an object with the key __html, and the value is a string
	}),
  };
  
  NotificationItem.defaultProps = {
	type: 'default', // Default value for the type prop if not passed by the parent component
  };

export default NotificationItem