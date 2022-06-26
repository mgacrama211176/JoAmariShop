import React, { useState, useRef } from 'react';
//styles
import '../Styles/Products.css';
import '../Styles/GlobalStyle.css';
//product Images
import Neck from '../Assets/ProductItems/chicken Neck.jpg';
import BonelessBangus from '../Assets/ProductItems/boneless bangus.jpg';
import BaconChips from '../Assets/ProductItems/BaconChips.jpg';
//components
import useScrollSnap from 'react-use-scroll-snap';

const Products = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  const [show, setShow] = useState({ display: 'none' });

  // const ChangeclassName = () => {
  //   if (show === 'none') {
  //     setShow('block');
  //   } else {
  //     setShow('none');
  //   }
  // };
  return (
    <div>
      <div className="ProductsContainer">
        <div className="ProductsHeader flex justCenter" id="products">
          <h1 ref={scrollRef}>PRODUCTS</h1>
        </div>
        <div className="listProducts merienda flex">
          <ul>
            {/* Hover Mouse on Boneless it should display boneless image */}
            <li
              onMouseEnter={(e) => {
                setShow({ display: 'block' });
              }}
              onMouseLeave={(e) => {
                setShow({ display: 'none' });
              }}
            >
              Boneless Bangus
            </li>
            <li
              onMouseEnter={(e) => {
                setShow({ display: 'block' });
              }}
              onMouseLeave={(e) => {
                setShow({ display: 'none' });
              }}
            >
              Bacon Chips
            </li>
            <li>Chicken Inasal</li>
            <li>Chicken Skin</li>
            <li>Chicken Neck</li>
            <li>Chicken Proven</li>
            <li>Chicken Oil</li>
            <li>Ginabot/Bulaklak</li>
            <li>Hipon</li>
          </ul>
          <ul>
            <li>Lumpia Shanghai</li>
            <li>Pork Inasal</li>
            <li>Pork Kawali bites</li>
            <li>Pork Bagnet</li>
            <li>Pork Tapa</li>
            <li>Squid Strips</li>
            <li>Siomai</li>
            <li>Sisig</li>
          </ul>
        </div>
        <div className="ProductItemContainer">
          <img
            src={BonelessBangus}
            alt="BonelessBangus"
            id="BonelessBangus"
            style={show}
          />
          <img src={BaconChips} alt="BaconChips" id="BaconChips" style={show} />
          {/* default class is none */}
          {/* <img src={Neck} alt="Chicken Neck" id="neck" className={show} /> */}
        </div>
      </div>
    </div>
  );
};

export default Products;

//if list item is clicked it changes display property to block/none
//hide other images when clicked
//
