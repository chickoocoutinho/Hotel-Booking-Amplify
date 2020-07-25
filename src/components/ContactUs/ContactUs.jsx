import React from 'react';
import styles from './ContactUs.module.css';
import {ReactComponent as InstagramLogo} from '../../assets/icons/instagram.svg'; 
import {ReactComponent as FacebookLogo} from '../../assets/icons/facebook.svg'; 
import {ReactComponent as TripadvisorLogo} from '../../assets/icons/tripadvisor.svg'; 


import cx from 'classnames';

const ContactUs = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h2>CONTACT US</h2>
                <p>
                info@mysite.com <span className={styles.tab}>/ </span>
                500 Terry Francois Street, San Francisco, CA 94158 <span className={styles.tab}>/ </span>
                 Tel: 123-456-7890 
                </p>
                <form className={styles.form}>
                    <input type="text" placeholder="Name*" required className={styles.row1} />
                    <input type="email" placeholder="E-Mail*" required className={styles.row1} /> 
                    <input type="text" placeholder="Subject" className={styles.span2} /> 
                    <input type="text" rows="4" placeholder="Message" className={cx(styles.span2,styles.message)} />
                    <input type="submit" value="Send" className={styles.span2} />
                </form>
            </div>
            <div className={styles.float}>
                <TripadvisorLogo className={styles.floatContent}/>
                <FacebookLogo className={styles.floatContent}/>
                <InstagramLogo className={styles.floatContent}/>
            </div>
        </div>
    );
}

export default ContactUs;