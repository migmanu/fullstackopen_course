import React from 'react';

const Notification = ({ message }) => {
    /*
    basic component tfor displaying message to user. If message starts with 'Success', displays lightblue
    message. If it starts with 'Fail' displays red message. Input: string message.
     */
    if (message === null) {
        return null
    }

    if (message.charAt(0) === 'S') {
        return (
            <div className="success">
                {message}
            </div>
        )
    }

    if (message.charAt(0) === 'F') {
        return (
            <div className="error">
                {message}
            </div>
        )
    }
    
}

export default Notification;