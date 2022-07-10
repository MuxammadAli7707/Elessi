import React from "react";
import { Link } from "react-router-dom";
function FooterBottom() {
  return (
    <div className="footer__end">
      <div className="container">
        <div className="footer__boxing">
          <p className="footer__text">© 2022 Nasatheme - All Right reserved!</p>
          <ul className="footer__links">
            <li className="footer__links-item">
              <Link className="footer__links-link" to="/">
                Privacy & Cookies
              </Link>
            </li>
            <li className="footer__links-item">
              <Link className="footer__links-link" to="/">
                Terms & Conditions
              </Link>
            </li>
            <li className="footer__links-item">
              <Link className="footer__links-link" to="/">
                Accessibility{" "}
              </Link>
            </li>
            <li className="footer__links-item">
              <Link className="footer__links-link" to="/">
                Store Directory{" "}
              </Link>
            </li>
            <li className="footer__links-item">
              <Link className="footer__links-link" to="/">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
