import React from 'react';
import styles from './Rooms.module.css';

const Rooms = () => {
    return (
        <div className={styles.roomsContainer}>
            <div className={styles.textbox}>
                <h2>Our Rooms</h2>
                <p>
                I'm a paragraph. Click here to add your own text and edit me.
                 I’m a great place for you to tell a story and let your users 
                 know a little more about you.
                </p>
                <button>
                    Book a Room
                </button>
            </div>
        </div>
    );
}

export default Rooms;