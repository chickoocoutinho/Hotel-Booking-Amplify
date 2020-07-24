import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header>
            <nav>
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
                <a className={styles.bookRoom} href="#">
                    Book a Room
                </a>                
            </nav>
        </header>
    );
}

export default Navbar;