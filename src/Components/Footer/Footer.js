import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import FooterBottom from "./FooterBottom";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__main">
            <div className="footer__imgbox">
              <img className="footer__img" src={logo} alt="logo" />
            </div>
            <ul className="footer__list-icons">
              <li className="footer__item-icon">
                <Link to="/">
                  <i className="bx bxl-twitter footer__icon"></i>
                </Link>
              </li>
              <li className="footer__item-icon">
                <Link to="/">
                  <i className="bx bxl-facebook footer__icon"></i>
                </Link>
              </li>
              <li className="footer__item-icon">
                <Link to="/">
                  <i className="bx bx-envelope footer__icon"></i>
                </Link>
              </li>
              <li
                data-toggle="tooltip"
                data-placement="top"
                title="Yozuv"
                className="footer__item-icon"
              >
                <Link to="/">
                  <i className="bx bxl-instagram footer__icon"></i>
                </Link>
              </li>
            </ul>
            <h3 className="footer__title">Newsletter</h3>
            <div className="footer__box">
              <input
                className="footer__input"
                type="email"
                placeholder="Enter your email here"
              />
              <button className="footer__btn">subscribe</button>
            </div>
          </div>

          <FooterNav />
        </div>
      </footer>
      <FooterBottom />
    </>
  );
}

export default Footer;
