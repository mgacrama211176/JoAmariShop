import React from 'react';
import '../Styles/Navigation.css';
import '../Styles/GlobalStyle.css';
import logo from '../Assets/3rdlogo.png';

const Navigation = () => {
  return (
    <div>
      <div className="logoContainer flex justCenter">
        <img src={logo} alt="logo" />
      </div>
      <div className="subtext flex justCenter merienda">
        <h1>frozen foods and apparel</h1>
      </div>
      <div className="NavigationLinks flex justCenter merienda">
        <a href="/">menu</a>

        <a
          href="/"
          onClick={(e) => {
            const products = document.getElementById('products');
            e.preventDefault();
            products && products.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          products
        </a>

        <a href="#">contact</a>
        <a href="#">about</a>
      </div>
    </div>
  );
};

export default Navigation;
