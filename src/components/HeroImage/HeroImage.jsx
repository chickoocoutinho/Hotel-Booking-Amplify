import React from 'react';
import styles from './HeroImage.module.css';
import hotelLoungeImg from '../../assets/images/HotelLounge.jpg';

const HeroImage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <h1>Ferofly</h1>
                <h2>
                    - Magnify your Journey - 
                </h2>
            </div>
            <div className={styles.heroImg}></div>
        </div>
    );
}

export default HeroImage;