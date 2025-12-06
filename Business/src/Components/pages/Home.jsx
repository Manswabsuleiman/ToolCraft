import React from "react"; 
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import ManufacturingServices from "../ManufacturingServices";
import ProductSection from "../ProductSection";
import Business from "../Business";
import PricingSection from "../PricingSection";
import Footer from "../Footer";
import Chat from "../Chat";

const Home = ({ openLogin, isLoggedIn, handleLogout }) => { 
 
  return (
    <div>
      <Navbar 
        openLogin={openLogin} 
        isLoggedIn={isLoggedIn}   
        handleLogout={handleLogout} 
      />

      <HeroSection />
      <ProductSection />
      <ManufacturingServices />
      <Business />
      <PricingSection />
      <Footer />
      <Chat />
    </div>
  );
};

export default Home;
