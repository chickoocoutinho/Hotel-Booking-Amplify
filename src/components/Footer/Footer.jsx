import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6486240664303!2d77.14992551508344!3d28.670237882402976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034d0cff8389%3A0xa1d0078c3b909030!2sFerofy%20Technologies!5e0!3m2!1sen!2sin!4v1595606362784!5m2!1sen!2sin"
            style={{width:"100%", height:"600px" , border:"0", margin:"0"}} frameBorder="0"
            allowfullscreen="" aria-hidden="false" tabindex="0" />
        <footer>
            &copy; 2020 by Benito Coutinho. &nbsp;
            <a href="https://github.com/chickoocoutinho/Ferofly-Demo-Site" target="_blank" rel="noreferrer noopener">
             Link to source code 
            </a>
        </footer>
        </>
    );
}

export default Footer;

