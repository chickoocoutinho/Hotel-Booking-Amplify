import React, {useState} from 'react';
import styles from './CheckInForm.module.css';
import {ReactComponent as CallenderLogo} from '../../assets/icons/calendar-empty-page-outline.svg'; 

import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

const CheckInForm = () => {
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [adultsNum, setAdultsNum]= useState(1);
    const [kidsNum, setKidsNum]= useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.input}>
                    <label  >
                        <span>Check In</span>
                        <DatePicker onChange={date => setCheckInDate(date)}  id="date" className={styles.datePicker}
                            placeholderText=" DD MM YYYY" selected={checkInDate} isClearable />
                    </label>
                    <label for="date" >
                        <CallenderLogo className={styles.icon}/>
                    </label>                
                </div>
                
                <div className={styles.input}>
                    <label  >
                        <span>Check In</span>
                        <DatePicker onChange={date => setCheckOutDate(date)}  id="date" className={styles.datePicker}
                            placeholderText=" DD MM YYYY" selected={checkOutDate} startDate={checkInDate}
                            endDate={checkOutDate} minDate={checkInDate}
                            isClearable  selectsEnd/>
                    </label>
                    <label for="date" >
                        <CallenderLogo className={styles.icon}/>
                    </label>                
                </div>

                <label className={styles.number}>
                    <span>Adults</span>
                    <input type="number" id="adults" min="1" value={adultsNum} 
                    onChange={(event)=>setAdultsNum(event.target.value)}/>
                </label>

                <label className={styles.number}>
                    <span>Kids</span> <br />
                    <input type="number" id="kids" min="0" value={kidsNum} 
                    onChange={(event)=>setKidsNum(event.target.value)}/>
                </label>

                <button className={styles.button}>
                    Search
                </button>
            </div>
        </div>
    );
}

export default CheckInForm;
