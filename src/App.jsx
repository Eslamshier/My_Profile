import React, { Fragment } from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/About/About';
import Experiance from './components/Experiance/Experiance';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
