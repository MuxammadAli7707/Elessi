import React from 'react';
import { Link } from 'react-router-dom';
import visa from '../../Images/payment-icons.png'
function FooterNav() {
  return (
    <>
      <div className="footer__list-box">
      <ul className="footer__list">
        <li className="footer__item">
          <Link className="footer__link" to='/'>Calista Wise 7292 Dictum Av.</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>Antonio, Italy.</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>(+01)-800-3456-88</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>nasathemes@gmail.com</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>elessi.nasatheme.com</Link>
        </li>
      </ul>

      <ul className="footer__list">
        <li className="footer__item">
          <Link className="footer__link" to='/'>Delivery Information</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>Privacy Policy</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>Terms & Condition</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>Search Terms</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>Order & Return</Link>
        </li>
      </ul>

      <ul className="footer__list">
        <li className="footer__item">
          <Link className="footer__link" to='/'>Customer Service</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>Privacy Policy</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>Terms & Condition</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>Best Seller</Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to='/'>Manufactures</Link>
        </li>
      </ul>

      <ul className="footer__days">
        <li className='footer__days-item'>
          <span className="footer__day">Monday - Friday</span>
          <span className="footer__clock">08:00 - 20:00</span>
        </li>
        <li className='footer__days-item'>
          <span className="footer__day">Saturday</span>
          <span className="footer__clock">09:00 - 21:00</span>
        </li>
        <li className='footer__days-item'>
          <span className="footer__day">Sunday</span>
          <span className="footer__clock">13:00 - 22:00</span>
        </li>
        <li className='footer__payment'>
        <img src={visa} alt="" />
        </li>
      </ul>
    </div>
    </>
  );
}

export default FooterNav;