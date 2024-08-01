import React from "react";
import Nav from "./components/Nav";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import MainBgImg from "./components/MainBgImg";
import Part3 from "./components/Part3";

export default function App() {
  return (
    <div>
      <Nav />
      <MainBgImg />
      <MainHeader />
      <Part3 />
      <Footer />
    </div>
  );
}
