import React, { createContext } from "react";
import "./style.css";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import Gotop from "./pages/bootom to top/Gotop";
import Error from "./pages/error/Error";
import Project from "./pages/project/Project"

export const Namecontext = createContext();

export default function App() {
  return (
    <>
      <Namecontext.Provider value={"Mukul singh narveriya"}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />}/>
        </Routes>
        <Gotop />
        <Footer />
      </Namecontext.Provider>
    </>
  );
}
