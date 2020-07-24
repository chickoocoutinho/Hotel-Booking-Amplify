import React from 'react';
import styles from './Services.module.css';

const ThingsToDo = () => {
    return (
        <div className={styles.container}>
            <h2>THINGS TO DO</h2>
            <div className={styles.content}>
                <div>
                    <h3>Wineries Tour</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div>
                    <h3>Cultural Sites</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div>
                    <h3>Market Tour</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div>
                    <h3>Leisure Activities</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div>
                    <h3>Birds Safari</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div>
                    <h3>Horse Riding</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
            </div>
        </div>
    );
}

export default ThingsToDo;