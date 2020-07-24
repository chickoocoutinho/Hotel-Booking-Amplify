import React, {useState} from 'react';
import styles from './CheckInForm.module.css';
import {ReactComponent as CallenderLogo} from '../../assets/icons/calendar-empty-page-outline.svg'; 

import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

const CheckInForm = () => {
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <label  >
                    <span>Check In</span>
                    <DatePicker onChange={date => setCheckInDate(date)}  id="date" className={styles.datePicker}
                        placeholderText=" DD MM YYYY" selected={checkInDate} isClearable  />
                </label>
                <label for="date" >
                    <CallenderLogo className={styles.icon}/>
                </label>                
            </div>
        </div>
    );
}

export default CheckInForm;
