import React from 'react';
import './NotificationItem.css'
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', html, value }) => {
  return (
    <li data-notification-type={type}>
        {html ? (
            <span dangerouslySetInnerHTML={{__html:html}} />
        ) : (
            value
        )}
    </li>
  );
};

NotificationItem.propType = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html:PropTypes.string
    }),
    value: PropTypes.string
}


export default NotificationItem;
