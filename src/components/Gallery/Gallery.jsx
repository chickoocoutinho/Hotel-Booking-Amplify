import React,{useState, useEffect} from 'react';
import styles from './Gallery.module.css';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import oneimg from '../../assets/images/gallery/1.jpg';
import twoimg from '../../assets/images/gallery/2.jpg';
import threeimg from '../../assets/images/gallery/3.jpg';
import fourimg from '../../assets/images/gallery/4.jpg';
import fiveimg from '../../assets/images/gallery/5.jpg';
import siximg from '../../assets/images/gallery/6.jpg';

const images=[
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
     '/images/4.jpg',
     '/images/5.jpg',
    '/images/6.jpg'    
];


const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [photoIndex, setPhotoIndex]= useState(0);
    const [isOpen, setIsOpen]= useState(false);

    const data=[
        {src:oneimg}, {src:twoimg}, {src:threeimg}, {src:fourimg}, {src:fiveimg}, {src:siximg}
    ];
    
    const incrementCurrentIndex= ()=>{
        setCurrentIndex((currentIndex)=>{
            let temp = currentIndex+3;
            if (temp>=data.length)
                temp=1;
            return temp;    
        });
    };

    const openImg= (index)=>{
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const carousel= ()=>setInterval(()=>{
        incrementCurrentIndex();
        console.log(1);
    },8000);

    useEffect(()=>{
        carousel(currentIndex);
        return(
            clearInterval(carousel)
        )
    },[]);



    return (
        <>
        <div className={styles.container}>
            <h2>GALLERY</h2>
            <div className={styles.content}>
            {
                data.map((value,index)=>{
                    if(index===currentIndex || index=== currentIndex-1 || index===currentIndex+1)
                        return(
                        <img src={value.src} onClick={()=>openImg(index)}/>
                        )
                })
            }
            </div>
        </div>

        {isOpen && (
            <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
            }
            />
        )}
        </>
    );
}

export default Gallery;


