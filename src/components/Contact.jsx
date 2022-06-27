import React from 'react';
import '../Styles/Contact.css';
import '../Styles/GlobalStyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import email from '../Assets/Icons/gmail.png';
import contact from '../Assets/Icons/phone.png';
import location from '../Assets/Icons/map.png';

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 4, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const Contact = () => {
  return (
    <div>
      <div className="ContactContainer justCenter" id="contact">
        <h1>Contact Us</h1>
        <div className="InformationContainer">
          <div className="AddressContainer" data-aos="flip-left">
            <h1>Address</h1>
            <img src={location} alt="address" />
            <h3>BRGY. UMAPAD MANDAUE CITY</h3>
            <h4>LANDMARK: UMAPAD HEALTH CENTER</h4>
          </div>
          <div className="CallContainer" data-aos="flip-left">
            <h1>Contact#</h1>
            <img src={contact} alt="contact" />
            <h3>09912308967</h3>
          </div>
          <div className="EmailContainer" data-aos="flip-left">
            <h1>Email</h1>
            <img src={email} alt="email" />
            <h3>sadrenz22@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
