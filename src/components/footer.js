// IMPORTS

import React from 'react';
import '../styles/components/footer/footer.css';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';
import vogue from './vogue.png';


// COMPONENT

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" id="contact">

        <section className="footer__social-media">

          <a className="footer__social-media__link" href="https://www.facebook.com/OliwierPakulaPhotography" target="blank">
            <span className="footer__social-media__link__icon">
              <FaFacebookF />
            </span>
          </a>

          <a className="footer__social-media__link" href="https://www.instagram.com/oliwier.pakula.photography" target="blank">
            <span className="footer__social-media__link__icon">
              <FaInstagram />
            </span>
          </a>

          <a className="footer__social-media__link" href="">
            <span className="footer__social-media__link__icon">
              <img src={vogue} className="footer__social-media__link__icon__vogue" />
            </span>
          </a>

          <a className="footer__social-media__link" href="mailto:oliwierpakula@gmail.com">
            <span className="footer__social-media__link__icon">
              <FaEnvelope />
            </span>
          </a>
              
          <a className="footer__social-media__link" href="tel:+48 420 420 420">
            <span className="footer__social-media__link__icon">
              <FaPhone />
            </span>
          </a>

        </section>

        <span className="footer__copyright">
          <a className="footer__copyright__text" href="https://github.com/karoljurczynski" target="blank">© 2021 Karol Jurczyński</a>
        </span>

      </footer>
    );
  }
}


// EXPORTING COMPONENT

export default Footer;