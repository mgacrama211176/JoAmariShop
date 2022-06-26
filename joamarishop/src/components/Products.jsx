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
          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Boneless}` }}
          >
            <img
              src={BonelessBangus}
              alt="BonelessBangus"
              id="BonelessBangus"
            />
            <h2>BONELESS BANGUS MARINATED</h2>
            <h3>P125/Pack</h3>
          </div>
          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Bacon}` }}
          >
            <img src={BaconChips} alt="BaconChips" id="BaconChips" />
            <h2>Bacon Chips</h2>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Inasal}` }}
          >
            <img src={Inasal} alt="Inasal" id="Inasal" />
            <h2>CHICKEN INASAL(MARINATED)</h2>
            <h3>P120/600-700grams </h3>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Skin}` }}
          >
            <img src={Skin} alt="Skin" id="Skin" />
            <h2>CHICKEN SKIN(BREAST SKIN)</h2>
            <h3>P170/kilo</h3>
          </div>

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

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Oil}` }}
          >
            <img src={Oil} alt="Oil" id="Oil" />
            <h2>CHICKEN OIL</h2>
            <h3>P100/220ml bottle</h3>
          </div>
          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Ginabot}` }}
          >
            <img src={Ginabot} alt="Ginabot" id="Ginabot" />
            <h2>GINABOT/BULAKLAK</h2>
            <h3>P165/kilo</h3>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Hipon}` }}
          >
            <img src={Hipon} alt="Hipon" id="Hipon" />
            <h2>HIPON/UYAP(COOKED)</h2>
            <h3>P50/Tub </h3>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Lumpia}` }}
          >
            <img src={Lumpia} alt="Lumpia" id="Lumpia" />
            <h2> LUMPIA SHANGHAI</h2>
            <h3>P80/Pack 25pcs</h3>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.PorkInasal}` }}
          >
            <img src={PorkInasal} alt="Inasal" id="Inasal" />
            <h2>PORK BELLY INASAL(MARINATED)</h2>
            <h3>P130/500grams</h3>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.KawaliBites}` }}
          >
            <img src={KawaliBites} alt="KawaliBites" id="KawaliBites" />
            <h2>KAWALI BITES PORK BELLY</h2>
            <h3>P210/kilo </h3>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Bagnet}` }}
          >
            <img src={Bagnet} alt="Bagnet" id="Bagnet" />
            <h2>PORK BAGNET</h2>
            <h3>P120/500grams</h3>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Tapa}` }}
          >
            <img src={Tapa} alt="Tapa" id="Tapa" />
            <h2>PORK TAPA(PURE UNOD)</h2>
            <h3>P150/500grams</h3>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.SquidStrips}` }}
          >
            <img src={SquidStrips} alt="SquidStrips" id="SquidStrips" />
            <h2>SQUID STRIPS</h2>
            <h3>P170/kilo </h3>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Siomai}` }}
          >
            <img src={Siomai} alt="Siomai" id="Siomai" />
            <h2> SIOMAI SA TISA(with free sauce)</h2>
            <h3>P280/Pack 60pcs</h3>
          </div>

          <div
            className="infoContainer"
            style={{ display: ` ${imgdisplay.Sisig}` }}
          >
            <img src={Sisig} alt="Sisig" id="Sisig" />
            <h2>SISIG(COOKED)</h2>
            <h3>P150/Pack</h3>
          </div>
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
