import React from 'react';
import Header from '../components/Header';
import ShopSelection from '../components/homeComponents/ShopSelection';
import ContactInfo from '../components/homeComponents/ContactInfo';
import CalltoActionSection from '../components/homeComponents/CalltoActionSection';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <div>
      {/* <Header
        setSearch={() => {}}
        onSetSearch={() => {}}
        search={'search'}
        carts={[]}
      /> */}
      <ShopSelection />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
