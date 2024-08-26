import React from "react";
import './Notifications.css'
import closeIcon from './close-icon.png';
import { getLatestNotification } from "./utils";

export default function notification() { 
    return (
        <div className="notification">
            <button aria-label="Close" style={ {display: 'flex', float: 'right' }} onClick={()=> console.log('Close button has been clicked')}><img style={{}} src={closeIcon} width={'15px'} height={'auto'} /></button>
            <p> Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification() }}></li>
            </ul>
            
        </div>
    )
 };