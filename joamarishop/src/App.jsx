import React from 'react';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Footer from './components/footer';
import Feedback from './components/Feedback';

const App = () => {
  return (
    <div>
      <Navigation />
      <Products />
      {/* <Feedback /> */}
      <Contact />

      <Footer />
    </div>
  );
};

export default App;
