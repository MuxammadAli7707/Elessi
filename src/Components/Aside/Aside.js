import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../Images/organic-banner1.jpg";
import banner2 from "../../Images/organic-banner2.jpg";
import banner3 from "../../Images/organic-banner3.jpg";
function Aside() {
  return (
    <div className="aside">
      <div className="container">
        <ul className="aside__list">
          <li className="aside__item">
            <div className="aside__imgbox">
              <img src={banner1} alt="" />
            </div>
            <div className="aside__box">
              <h3 className="aside__title">
                Joobie <br /> Ice Cream
              </h3>
              <p className="aside__sale">
                Sale Off <span>25%</span>
              </p>
              <Link to="/" className="aside__shop">
                Shop Now
              </Link>
            </div>
          </li>
          <li className="aside__item">
            <div className="aside__imgbox">
              <img src={banner2} alt="" />
            </div>
            <div className="aside__box">
              <h3 className="aside__title">
                Fresh <br /> Guava Juice
              </h3>
              <Link to="/" className="aside__shop">
                Shop Now
              </Link>
            </div>
          </li>
          <li className="aside__item">
            <div className="aside__imgbox">
              <img src={banner3} alt="" />
            </div>
            <div className="aside__box">
              <h3 className="aside__title">
                Fresh <br /> Vegetables
              </h3>
              <Link to="/" className="aside__shop">
                Shop Now
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
