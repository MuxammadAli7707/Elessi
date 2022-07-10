import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import logo from '../../Images/logo.png';
import eng from '../../Images/english.png';
import german from '../../Images/german.png';
import french from '../../Images/french.png';
function Header() {
  return (
    <div className="header">
      <div className="container">
      <div className="header__main">
        <div className="header__inner">
          <i className='bx bx-buildings' ></i>
          <p> Add anything here or just remove it...</p>
        </div>
        <div className="header__langLogin">
          <div className="header__lang">
            <img
              className="header__flag"
              src={eng}
              alt="enlish"
            />
            <p className="header__texts">English</p>

            <div className="lang__box slide-top">
              <div className="lang__text">
                <div className="lang__flags">
                  <img
                    className="lang__flag"
                    src={german}
                    alt="german"
                  />
                  <p>Deutsch</p>
                </div>
                <div className="lang__flags">
                  <img
                    className="lang__flag"
                    src={french}
                    alt="french"
                  />
                  <p>Francais</p>
                </div>
                <p className="lang__txt">Requires WPML</p>
              </div>
            </div>
          </div>

          <div className="dollar">
            US dollar
            <div className="dollar__inner">
              <ul className="dollar__inner-text">
                <li>Euro(EUR)</li>
                <li>Indian Rupee(INR)</li>
                <li>Pound(GBR)</li>
              </ul>
            </div>
          </div>
          <a
            className="header_login"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className='bx bx-user-circle'></i>
            Login / Register
          </a>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
             <div className="modal__imgbox">
              <img className="imgLogoofModal" src={logo} alt="logo" />
             </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4 className="modal__title">Great have you back!</h4>
              <form className="modal--inner">
                <div className="text--input mb-3">
                  <div className="modal__inputbox">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Username or email *
                      </label>
                      <div className="modal__check">
                        <input type="checkbox" />
                        <span>Remember</span>
                      </div>
                  </div>
                  <input
                    type="email"
                    className="form-control "
                    required
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="text--input mb-3">
                    <div className="modal__inputbox">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                        Password *
                          </label>
                          <div className="modal__check">
                            <span>Lost?</span>
                          </div>
                      </div>
                  <input
                    type="password"
                    className="form-control "
                    required
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Sign in to your account
                </button>
              </form>
              <div className="login-hr d-flex">
                <div className="hr-line"></div>
                <div>Or login with</div>
                <div className="hr-line"></div>
              </div>
              <div className="socials d-flex">
                <div className="social__item">
                  <BsFacebook />
                  Facebook
                </div>
                <div className="social__item2">
                  <FcGoogle />
                  Google
                </div>
              </div>

              <div className="account">
                <span>Not a member?</span>
                <span className="account__link">Create an account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
