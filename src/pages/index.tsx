import React, { useState } from "react"
import Navbar from "../components/Navbar";
import HomeScreen from "../components/HomeScreen";
import Product from "../components/Product";
import About from "../components/About";
import Contact from "../components/Contact";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyle.js";
import { lightTheme, darkTheme } from "../components/Themes.js"
import './index.css'

export default function Home() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    console.log(theme)
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return <div>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar themeToggler={themeToggler} theme={theme}/>
      <HomeScreen background={theme}/>
      <Product />
      <About />
      <Contact theme={theme}/>
    </ThemeProvider>
  </div>
}
