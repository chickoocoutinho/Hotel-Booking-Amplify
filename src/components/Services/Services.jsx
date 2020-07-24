import React from 'react';
import styles from './Services.module.css';

import {ReactComponent as BreakfastIcon} from '../../assets/icons/Coffee.svg'; 
import {ReactComponent as GardenIcon} from '../../assets/icons/GardenBench.svg'; 
import {ReactComponent as PoolIcon} from '../../assets/icons/Pool.svg'; 
import {ReactComponent as WifiIcon} from '../../assets/icons/Wifi.svg'; 
import {ReactComponent as HousekeepingIcon} from '../../assets/icons/HouseKeeping.svg'; 
import {ReactComponent as DiningIcon} from '../../assets/icons/DineIn.svg'; 



const Services = () => {
    return (
        <div className={styles.container}>
            <h2>OUR SERVICES</h2>
            <div className={styles.content}>
                <div>
                    <BreakfastIcon className={styles.icon} />
                    <h3>Breakfast</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div>
                    <GardenIcon className={styles.icon} />
                    <h3>Garden</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div>
                    <PoolIcon className={styles.icon} />
                    <h3>Pool</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div>
                    <WifiIcon className={styles.icon} />
                    <h3>Free Wifi</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div>
                    <HousekeepingIcon className={styles.icon} />
                    <h3>Daily Housekeeping</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div>
                    <DiningIcon className={styles.icon} />
                    <h3>In-Room Dining Service</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
            </div>    
        </div>
    );
}

export default Services;