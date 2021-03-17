import React from "react"
import Navbar from "../components/Navbar";
import HomeScreen from "../components/HomeScreen";
import Product from "../components/Product";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return <div>
    <Navbar />
    <HomeScreen />
    <Product />
    <About />
    <Contact />
  </div>
}
