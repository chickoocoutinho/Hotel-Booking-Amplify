import React,{useState, useLayoutEffect, useEffect} from 'react';
import styles from './FloatingButton.module.css';

import {ReactComponent as MessageBoxDesktop} from '../../assets/icons/MessageBox-desktop.svg'; 
import {ReactComponent as MessageBoxMobile} from '../../assets/icons/MessageBox-mobile.svg'; 
import {ReactComponent as ArrowUp} from '../../assets/icons/keyboard_arrow_up-white.svg'; 

const FloatingButton = ({divRef}) => {
    const [isScreenSmall, setIsScreenSmall]= useState(false);

    //Media query logic
    const handleMediaQueryChange= (mediaQuery) =>{
        mediaQuery.matches ? setIsScreenSmall(true): setIsScreenSmall(false);
    };

    useLayoutEffect(()=>{
        const mediaQuery= window.matchMedia('(max-width: 768px)');
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return ()=>{
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    },[]);
    //end of media query logic

    const goToTop= ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <>
        <button className={styles.floatingButton}>
        {
            isScreenSmall? <MessageBoxMobile /> :<MessageBoxDesktop />
        }
        </button>
        {
            (isScreenSmall ) ? 
            <button className={styles.floatingButtonArrow} onClick={goToTop}>
                <ArrowUp className={styles.arrowUp}/>
            </button>:null
        }
        </>
    );
}

export default FloatingButton;