import React from "react";
import { Link } from "react-router-dom";
import Object from "../../Object/Object";
import Store from "../Store/Store";
function Sales() {
  const ids = Store((state) => state.cartId);
  const idHander = (e) => {
    ids(e);
  };
  return (
    <div className="sales">
      <div className="container">
        <ul className="sales__list">
          <li className="sales__item col-4">
            <h3 className="sales__title">Top Rated</h3>
            <ul className="sales__lists">
              {Object.slice(6, 9).map((item, index) => {
                return (
                  <li key={index + 4} className="sales__itms">
                    <div className="sales__box">
                      <img
                        className="sales__img"
                        src={item.img[0]}
                        alt="cherry"
                      />
                      <button
                        onClick={() => idHander(item.id)}
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight1"
                        aria-controls="offcanvasRight"
                        className="sales__btn"
                      >
                        <i className="bx bx-expand"></i>
                      </button>
                    </div>
                    <div className="sales__inner">
                      <Link className="sales__name" to={`product/${item.id}`}>
                        {item.name}
                      </Link>
                      <div className="sales__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                      <div>
                        <del className="sales__old">
                          ${item.discount_price.toFixed(1)}
                        </del>
                        <span className="sales__new">
                          ${item.to_price.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="sales__item col-4">
            <h3 className="sales__title">Best Selling</h3>
            <ul className="sales__lists">
              {Object.slice(20, 23).map((item, index) => {
                return (
                  <li key={index + 30} className="sales__itms">
                    <div className="sales__box">
                      <img
                        className="sales__img"
                        src={item.img[0]}
                        alt="cherry"
                      />
                      <button
                        onClick={() => idHander(item.id)}
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight1"
                        aria-controls="offcanvasRight"
                        className="sales__btn"
                      >
                        <i className="bx bx-expand"></i>
                      </button>
                    </div>
                    <div className="sales__inner">
                      <Link className="sales__name" to={`product/${item.id}`}>
                        {item.name}
                      </Link>
                      <div className="sales__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                      <div>
                        <del className="sales__old">
                          ${item.discount_price.toFixed(1)}
                        </del>
                        <span className="sales__new">
                          ${item.to_price.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="sales__item col-4">
            <h3 className="sales__title">On Sales</h3>
            <ul className="sales__lists">
              {Object.slice(30, 33).map((item, key) => {
                return (
                  <li key={key+55} className="sales__itms">
                    <div className="sales__box">
                      <img
                        className="sales__img"
                        src={item.img[0]}
                        alt="cherry"
                      />
                      <button
                      onClick={() => idHander(item.id)}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight1"
                      aria-controls="offcanvasRight"
                        className="sales__btn"
                      >
                        <i className="bx bx-expand"></i>
                      </button>
                    </div>
                    <div className="sales__inner">
                      <Link className="sales__name"to={`product/${item.id}`}>
                        {item.name}
                      </Link>
                      <div className="sales__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                      <div>
                        <del className="sales__old">
                          ${item.discount_price.toFixed(1)}
                        </del>
                        <span className="sales__new">
                          ${item.to_price.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sales;
