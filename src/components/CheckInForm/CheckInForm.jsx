import React, {useState} from 'react';
import styles from './CheckInForm.module.css';
import {ReactComponent as CallenderLogo} from '../../assets/icons/calendar-empty-page-outline.svg'; 

import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CheckInForm = () => {
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [adultsNum, setAdultsNum]= useState(1);
    const [kidsNum, setKidsNum]= useState(0);

    const handleBookings= ()=>{
        toast.info('Your Booking is being processed', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        axios.post('https://uvnnx5amp1.execute-api.ap-south-1.amazonaws.com/staging/book',{
            id: Math.random(),
            check_id : checkInDate.toUTCString(),
            check_out: checkOutDate.toUTCString(), 
            adults: adultsNum,
            kids: kidsNum
        })
        .then(()=>{
            toast.success('Booking Successfull', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
        .catch(()=>{
            toast.error('Booking Unsuccessfull', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
       
    }

    return (
        <div className={styles.container}>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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

                <button onClick={handleBookings} className={styles.button}>
                    Book
                </button>
            </div>
        </div>
    );
}

export default CheckInForm;
