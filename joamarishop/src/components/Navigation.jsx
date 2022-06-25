import React from 'react';
import '../Styles/Navigation.css';
import logo from '../Assets/3rdlogo.png';

const Navigation = () => {
  return (
    <div>
      <div className="logoContainer flex justCenter">
        <img src={logo} alt="logo" />
      </div>
      <div className="subtext flex justCenter">
        <h1>frozen foods and apparel</h1>
      </div>
      <div className="NavigationLinks flex justCenter">
        <a href="">menu</a>
        <a href="">products</a>
        <a href="">contact</a>
        <a href="">about</a>
      </div>
    </div>
  );
};

export default Navigation;
