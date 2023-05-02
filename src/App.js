import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start } from "./components/Start/Start";
import { About } from "./components/About/About";
import { Project } from "./components/Projects/Project";
import { Contact } from "./components/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [lang, setLang] = useState("");

  useEffect(() => {
    window.onload = function () {
      var ln = navigator.language || navigator.userLanguage;
      console.log(ln);
      return setLang(ln);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar lang={lang} />
        <Routes>
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/project" element={<Project lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/" element={<Start lang={lang} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
