import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h2>CONTACT US</h2>
                <p>
                info@mysite.com / 500 Terry Francois Street, San Francisco, CA 94158 / Tel: 123-456-7890 
                </p>
                <form>
                    <input type="text" placeholder="Name*" required />
                    <input type="email" placeholder="E-Mail*" required /> <br/>
                    <input type="text" placeholder="Subject"  /> <br />
                    <input type="text" rows="4" placeholder="Message" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default ContactUs;