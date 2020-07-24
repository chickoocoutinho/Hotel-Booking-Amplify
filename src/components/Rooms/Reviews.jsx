import React,{useRef, useEffect} from 'react';
import styles from './Rooms.module.css';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

import LeftQuote from '../../assets/icons/icons8-quote-left-30.png';

const Reviews = () => {

    const params = {
        slidesPerView: 1 ,
        centeredSlides: true,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 	'bullets',
            renderBullet: function (index, className) {
            return `<span class= "${className}">${index}</span>`;
            },
        }
    }

    const swiper1= useRef(null);
    useEffect(()=>{
        swiper1.current= new Swiper(".reviews",{...params})
    },[]);

    return (
        <div className={styles.reviewsContainer}>
            <div className={styles.textbox}>
                <h2>GUEST REVIEWS</h2>
                <img src={LeftQuote} alt="Left Quote"/>
                <div className="swiper-container reviews" >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <p>
                            “I'm a testimonial. Click to edit me and add text that says something 
                            nice about you and your services.”
                            </p>
                        </div>
                        <div className="swiper-slide">
                            <p>
                            “I'm a paragraph. Click here to add your own text and edit me.”
                            </p>
                        </div>
                        <div className="swiper-slide">
                            <p>
                            “I'm a paragraph. Click here to add your own text and edit me.
                             I’m a great place for you to tell a story and let your users know
                              a little more about you.”
                            </p>
                        </div>
                    </div>
                        <div className="swiper-pagination">
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;