import "./styles.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Midsection from "./components/Midsection";

export default function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar />

      {/* MIDSECTION */}
      <Midsection />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
