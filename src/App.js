import React from 'react';

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

const App = () => {
  return (
    <>
      <Navbar />
      <HeroImage />
      <CheckInForm />
      <About />
      <Rooms />
      <Services />
      <ThingsToDo />
      <Reviews /> 
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;