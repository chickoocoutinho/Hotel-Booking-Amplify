import React,{useRef} from 'react';

import Navbar from './components/Navbar/Navbar';
import HeroImage from './components/HeroImage/HeroImage';
import CheckInForm from './components/CheckInForm/CheckInForm';
import About from './components/About/About';
import Rooms from './components/Rooms/Rooms';
import Services from './components/Services/Services';
import ThingsToDo from './components/Services/ThingsToDo';
import Reviews from './components/Rooms/Reviews';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import FloatingButton from './components/FloatingButton/FloatingButton';

const App = () => {

  const divRef= useRef(null);

  return (
    <>
      <Navbar />
      <HeroImage />
      <CheckInForm />
      <About divRef={divRef}/>
      <Rooms />
      <Services />
      <Gallery />
      <ThingsToDo />
      <Reviews /> 
      <ContactUs />
      <Footer />
      <FloatingButton divRef={divRef}/>
    </>
  );
}

export default App;