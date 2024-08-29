import React from 'react';
import './NotificationItem.css'
import PropTypes from 'prop-types';
import { type } from '@testing-library/user-event/dist/type';

const NotificationItem = ({ type, html, value }) => {
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

NotificationItem.defaultProps = {
    type: 'default'
};

export default NotificationItem;
