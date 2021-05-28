import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../components/Navbar";
import HomeScreen from "../components/HomeScreen";
import Product from "../components/Product";
import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyle.js";
import { lightTheme, darkTheme } from "../components/Themes.js"
import './index.css'


export default function Home() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    //console.log(theme)
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return <div>
    <Helmet>
      <meta charSet='utf-8'/>
      <title>Tempo Turtle</title>
      
      {/*Favicon stuff*/}
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
      <link rel="manifest" href="/icons/site.webmanifest"/>
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
    </Helmet>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar themeToggler={themeToggler} theme={theme} />
      <HomeScreen background={theme} />
      <Product />
      <About theme={theme} />
      <Contact theme={theme} />
    </ThemeProvider>
  </div>
}
