import React from "react";
import trust from "../../Images/trust_badge.png";
function ProductList() {
  return (
    <div className="fooditem">
      <div className="fooditem__inner">
        <ul className="fooditem__list">
          <li className="fooditem__item delivery">
            <div className="fooditem__item-box">
              <i className="bx bxs-truck"></i>
              <button
                className="fooditem__item-text"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropdeliver"
              >
                Delivery & return
              </button>
            </div>
            <div className="fooditem__item-box">
              <i className="bx bx-help-circle"></i>
              <button className="fooditem__item-text">Ask & Question</button>
            </div>
          </li>
          <li className="fooditem__item jul">
            <i className="bx bx-exit"></i>
            <p className="fooditem__item-text">
              {" "}
              Estimated Delivery: <span> Jul 09 – Jul 13</span>
            </p>
          </li>
          <li className="fooditem__item">
            <i className="bx bx-smile"></i>
            <p className="fooditem__item-text">
              53 people <span> are viewing this right now</span>
            </p>
          </li>
        </ul>
        <ul className="fooditem__list-list">
          <li className="fooditem__list-social share">
            <i className="bx bx-share-alt"></i>
            <p>Share</p>
          </li>
          <li className="fooditem__list-social">
            <i className="bx bxl-twitter"></i>
          </li>
          <li className="fooditem__list-social">
            <i className="bx bxl-facebook"></i>
          </li>
          <li className="fooditem__list-social">
            <i className="bx bxl-telegram"></i>
          </li>
          <li className="fooditem__list-social">
            <i className="bx bxl-vk"></i>
          </li>
          <li className="fooditem__list-social">
            <i className="bx bx-envelope"></i>
          </li>
        </ul>
        <div className="fooditem__safe-box">
          <p className="fooditem__safe-text">Guaranteed Safe Checkout</p>
          <img className="fooditem__img" src={trust} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
