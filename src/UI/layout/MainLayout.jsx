import React from "react";
import NavbarHero from "../components/NavbarHero";
import Footer from "../components/Footer";
import "../style/landing.css"; // UI genel stiller

const MainLayout = ({ children }) => {
  return (
    <>
      <NavbarHero />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
