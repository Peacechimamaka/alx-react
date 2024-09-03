import React, { Component } from "react";
import './Notifications.css'
import closeIcon from './close-icon.png';
import { getLatestNotification } from "./utils"
import NotificationItem from "./NotificationItem"
import PropTypes from 'prop-types';


class Notifications extends Component {
    render() {
       const { displayDrawer } = this.props;

       return (
        <>
        <div className="menuItem"></div>
        {displayDrawer && (<div className="notification">
            <button aria-label="Close" style={ {display: 'flex', float: 'right' }} onClick={()=> console.log('Close button has been clicked')}><img style={{}} src={closeIcon} alt="" width={'15px'} height={'auto'} /></button>
            <p> Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
        </div>
        )}
        </>
    )
    }

}

 Notifications.propTypes = {
    displayDrawer: PropTypes.bool
 }

Notifications.defaultProps = {
    displayDrawer: true
};

 export default Notifications