import React from 'react';
import '../Styles/Products.css';
import '../Styles/GlobalStyle.css';
import Neck from '../Assets/ProductItems/chicken Neck.jpg';

const Products = () => {
  return (
    <div>
      <div className="ProductsContainer">
        <div className="ProductsHeader flex justCenter" id="products">
          <h1>PRODUCTS</h1>
        </div>
        <div className="listProducts merienda flex">
          <ul>
            <li>Chicken Inasal</li>
            <li>Chicken Skin</li>
            <li>Chicken Neck</li>
            <li>Chicken Proven</li>
            <li>Chicken Oil</li>
            <li>Ginabot/Bulaklak</li>
          </ul>
          <ul>
            <li>Pork Inasal</li>
            <li>Pork Kawali bites</li>
            <li>Pork Bagnet</li>
            <li>Pork Tapa</li>
            <li>Squid Strips</li>
            <li>Siomai</li>
          </ul>
        </div>
        <div className="ProductItemContainer">
          <img src={Neck} alt="Chicken Neck" />
        </div>
      </div>
    </div>
  );
};

export default Products;
