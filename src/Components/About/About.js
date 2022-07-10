import React from "react";

function About() {
  return (
    <div className="about">
      <div className="container">
        <ul className="about__list">
          <li className="about__item">
            <i className="bx bxs-plane-alt"></i>
            <h3 className="about__title">Free Shipping</h3>
            <p className="about__text">Free Shipping for all US order</p>
          </li>
          <li className="about__item">
            <i className="bx bx-headphone"></i>
            <h3 className="about__title">Support 24/7</h3>
            <p className="about__text">We support 24h a day</p>
          </li>
          <li className="about__item">
            <i className="bx bx-refresh about__icon"></i>
            <h3 className="about__title">100% Money Back</h3>
            <p className="about__text">You have 30 days to Return</p>
          </li>
          <li className="about__item">
            <i className="bx bx-gift"></i>
            <h3 className="about__title">Payment Secure</h3>
            <p className="about__text">We ensure secure payment</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
