import React,{useLayoutEffect, useState} from 'react';
import styles from './HeroImage.module.css';

import HotelLounge from '../../assets/images/HotelLounge.jpg';

const HeroImage = () => {

    const [isScreenSmall, setIsScreenSmall]= useState(false);
    //Media query logic
    const handleMediaQueryChange= (mediaQuery) =>{
        mediaQuery.matches ? setIsScreenSmall(true): setIsScreenSmall(false);
    };

    useLayoutEffect(()=>{
        const mediaQuery= window.matchMedia('(max-width: 900px)');
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return ()=>{
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    },[]);
    //end of media query logic

    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <h1>Ferofly</h1>
                <h2>
                    - Magnify your Journey - 
                </h2>
            </div>
            {
                !isScreenSmall? <div className={styles.heroImg}></div>: <img src={HotelLounge} alt="Hotel lounge"/>
            }
        </div>
    );
}

export default HeroImage;