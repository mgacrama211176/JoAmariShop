import React, { useState, useRef } from 'react';
//styles
import '../Styles/Products.css';
import '../Styles/GlobalStyle.css';
//product Images
import Neck from '../Assets/ProductItems/chicken Neck.jpg';
import BonelessBangus from '../Assets/ProductItems/boneless bangus.jpg';
import Inasal from '../Assets/ProductItems/chickenInasal.jpg';
import Skin from '../Assets/ProductItems/ChickenSkin.jpg';
import BaconChips from '../Assets/ProductItems/BaconChips.jpg';
import Proven from '../Assets/ProductItems/Proven.jpg';
import Oil from '../Assets/ProductItems/oil.jpg';
import Ginabot from '../Assets/ProductItems/GinabotBulaklak.jpg';
import Hipon from '../Assets/ProductItems/Hipon.jpg';
import Lumpia from '../Assets/ProductItems/Lumpia.jpg';
import PorkInasal from '../Assets/ProductItems/porkInasal.jpg';
import KawaliBites from '../Assets/ProductItems/PorkKawaliBites.jpg';
import Bagnet from '../Assets/ProductItems/bagnet.jpg';
import Tapa from '../Assets/ProductItems/porkTapa.jpg';
import SquidStrips from '../Assets/ProductItems/SquidStrips.jpg';
import Siomai from '../Assets/ProductItems/Siomai.jpg';
import Sisig from '../Assets/ProductItems/Sisig.jpg';
//components
import useScrollSnap from 'react-use-scroll-snap';

const Products = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  const [imgdisplay, setimgdisplay] = useState({
    Boneless: 'none',
    Bacon: 'block',
    Neck: 'none',
    Inasal: 'none',
    Skin: 'none',
    Proven: 'none',
    Oil: 'none',
    Ginabot: 'none',
    Hipon: 'none',
    Lumpia: 'none',
    PorkInasal: 'none',
    KawaliBites: 'none',
    Bagnet: 'none',
    Tapa: 'none',
    SquidStrips: 'none',
    Siomai: 'none',
    Sisig: 'none',
  });

  return (
    <div>
      <div className="ProductsContainer">
        <div className="ProductsHeader flex justCenter" id="products">
          <h1 ref={scrollRef}>PRODUCTS</h1>
        </div>
        <div className="listProducts merienda flex">
          <ul>
            {/* BACON */}
            <li
              onClick={() => {
                setimgdisplay({
                  Bacon: 'block',
                  Boneless: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Bacon Chips
            </li>
            {/*  Boneless Bangus */}
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'block',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Boneless Bangus
            </li>
            {/*  Inasal */}
            <li
              onClick={() => {
                setimgdisplay({
                  Bacon: 'none',
                  Boneless: 'none',
                  Neck: 'none',
                  Inasal: 'block',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Chicken Inasal
            </li>
            {/*  Skin */}
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'block',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Chicken Skin
            </li>
            {/*  Neck */}
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'block',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Chicken Neck
            </li>
            {/*  Chicken Proven */}
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'block',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Chicken Proven
            </li>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'block',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Chicken Oil
            </li>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'block',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Ginabot/Bulaklak
            </li>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'block',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Hipon
            </li>
          </ul>
          <ul>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'block',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Lumpia Shanghai
            </li>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'block',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Pork Inasal
            </li>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'block',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Pork Kawali bites
            </li>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'block',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Pork Bagnet
            </li>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'block',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Pork Tapa
            </li>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'block',
                  Siomai: 'none',
                  Sisig: 'none',
                });
              }}
            >
              Squid Strips
            </li>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'block',
                  Sisig: 'none',
                });
              }}
            >
              Siomai
            </li>
            <li
              onClick={() => {
                setimgdisplay({
                  Boneless: 'none',
                  Bacon: 'none',
                  Neck: 'none',
                  Inasal: 'none',
                  Skin: 'none',
                  Proven: 'none',
                  Oil: 'none',
                  Ginabot: 'none',
                  Hipon: 'none',
                  Lumpia: 'none',
                  PorkInasal: 'none',
                  KawaliBites: 'none',
                  Bagnet: 'none',
                  Tapa: 'none',
                  SquidStrips: 'none',
                  Siomai: 'none',
                  Sisig: 'block',
                });
              }}
            >
              Sisig
            </li>
          </ul>
        </div>
        <div className="ProductItemContainer">
          <img
            src={BonelessBangus}
            alt="BonelessBangus"
            id="BonelessBangus"
            style={{ display: ` ${imgdisplay.Boneless}` }}
          />
          <img
            src={BaconChips}
            alt="BaconChips"
            id="BaconChips"
            style={{ display: ` ${imgdisplay.Bacon}` }}
          />
          <img
            src={Inasal}
            alt="Inasal"
            id="Inasal"
            style={{ display: ` ${imgdisplay.Inasal}` }}
          />
          <img
            src={Skin}
            alt="Skin"
            id="Skin"
            style={{ display: ` ${imgdisplay.Skin}` }}
          />
          <img
            src={Neck}
            alt="Neck"
            id="Neck"
            style={{ display: ` ${imgdisplay.Neck}` }}
          />
          <img
            src={Proven}
            alt="Proven"
            id="Proven"
            style={{ display: ` ${imgdisplay.Proven}` }}
          />
          <img
            src={Oil}
            alt="Oil"
            id="Oil"
            style={{ display: ` ${imgdisplay.Oil}` }}
          />
          <img
            src={Ginabot}
            alt="Ginabot"
            id="Ginabot"
            style={{ display: ` ${imgdisplay.Ginabot}` }}
          />
          <img
            src={Hipon}
            alt="Hipon"
            id="Hipon"
            style={{ display: ` ${imgdisplay.Hipon}` }}
          />
          <img
            src={Lumpia}
            alt="Lumpia"
            id="Lumpia"
            style={{ display: ` ${imgdisplay.Lumpia}` }}
          />
          <img
            src={PorkInasal}
            alt="Inasal"
            id="Inasal"
            style={{ display: ` ${imgdisplay.PorkInasal}` }}
          />
          <img
            src={KawaliBites}
            alt="KawaliBites"
            id="KawaliBites"
            style={{ display: ` ${imgdisplay.KawaliBites}` }}
          />
          <img
            src={Bagnet}
            alt="Bagnet"
            id="Bagnet"
            style={{ display: ` ${imgdisplay.Bagnet}` }}
          />
          <img
            src={Tapa}
            alt="Tapa"
            id="Tapa"
            style={{ display: ` ${imgdisplay.Tapa}` }}
          />
          <img
            src={SquidStrips}
            alt="SquidStrips"
            id="SquidStrips"
            style={{ display: ` ${imgdisplay.SquidStrips}` }}
          />
          <img
            src={Siomai}
            alt="Siomai"
            id="Siomai"
            style={{ display: ` ${imgdisplay.Siomai}` }}
          />
          <img
            src={Sisig}
            alt="Sisig"
            id="Sisig"
            style={{ display: ` ${imgdisplay.Sisig}` }}
          />
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
