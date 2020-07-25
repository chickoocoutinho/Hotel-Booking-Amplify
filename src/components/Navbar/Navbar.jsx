import React,{useState, useEffect} from 'react';
import styles from './Navbar.module.css';

import {ReactComponent as MenuIcon} from '../../assets/icons/menu-white.svg'; 
import {ReactComponent as CloseIcon} from '../../assets/icons/close-white.svg'; 


import cx from 'classnames';

const Navbar = () => {
    const[isDropDown,setIsDropdown] = useState(false);
    const toggleDrowDown= ()=>{
        setIsDropdown( !isDropDown );
    };

    useEffect(()=>{
        const body = document.body;
        if(isDropDown){
            body.style.height = '100vh';
            body.style.overflowY = 'hidden';
        }
        else{
            body.style.height = 'auto';
            body.style.overflowY = 'auto';
        }
    },[isDropDown]);

    return (
        <>
        <header>
            <nav>
                <a href="#" className={styles.link}>
                    HOME
                </a>                
                <a href="#" className={styles.link}>
                    ABOUT
                </a>                
                <a href="#" className={styles.link}>
                    ROOMS
                </a>                
                <a href="#" className={styles.link}>
                    SERVICES
                </a>                
                <a href="#" className={styles.link}>
                    GALLERY
                </a>                
                <a href="#" className={styles.link}>
                    SEE & DO
                </a>                
                <a href="#" className={styles.link}>
                    CONTACT
                </a>  
                <a className={styles.bookRoom} href="#">
                    Book a Room
                </a>              
                <button className={styles.hamburger} onClick={toggleDrowDown}>
                    <MenuIcon />
                </button>   
            </nav>
        </header>

        <div className={isDropDown?cx(styles.dropdown,styles.open):styles.dropdown}>
            <button className={cx(styles.hamburger,styles.closeicon)} onClick={toggleDrowDown}>
                <CloseIcon />
            </button> 
            <div className={styles.content}>
                <a href="#">
                    HOME
                </a>                
                <a href="#">
                    ABOUT
                </a>                
                <a href="#">
                    ROOMS
                </a>                
                <a href="#">
                    SERVICES
                </a>                
                <a href="#">
                    GALLERY
                </a>                
                <a href="#">
                    SEE & DO
                </a>                
                <a href="#">
                    CONTACT
                </a>  
            </div>
        </div>
        </>
    );
}

export default Navbar;