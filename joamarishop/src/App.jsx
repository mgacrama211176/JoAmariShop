import React from 'react';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Products from './components/Products';

const App = () => {
  return (
    <div>
      <Navigation />
      <Products />
      <Contact />
    </div>
  );
};

export default App;
