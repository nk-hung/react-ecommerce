import React from 'react';
import Header from '../components/Header';
import ShopSelection from '../components/homeComponents/ShopSelection';
import ContactInfo from '../components/homeComponents/ContactInfo';
import CalltoActionSection from '../components/homeComponents/CalltoActionSection';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <ShopSelection />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
