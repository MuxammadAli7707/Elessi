import React from "react";
import { Link } from "react-router-dom";
import Store from "../Store/Store";

function Wishlist() {
  const wishlistObj = Store((state) => state.wishlistObj);
  const addWishlist = Store((state) => state.addWishlist);

  return (
    <div
      className="offcanvas offcanvas-end mycart"
      tabIndex="-1"
      id="offcanvasRight3"
      aria-labelledby="offcanvasRightLabel"
    >
      <button
        type="button"
        className="quickview__xbtn"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i className="bx bx-chevron-right"></i>
      </button>

      <div className="wishlist__bigbox">
        <h2 className="wishlist__title">Wishlist</h2>

        <ul className="wishlist__list">
          {wishlistObj.length === 0 ? (
            <li className="wishlist__items">
              <i className="bx bx-heart wishlist__iheart"></i>
              <p className="wishlist__no">No products in the wishlist.</p>
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                className="wishlist__btn"
              >
                RETURN TO SHOP
              </button>
            </li>
          ) : (
            ""
          )}
          {wishlistObj.map((item, index) => {
            return (
              <li key={index + 66} className="wishlist__item">
                <Link className="wishlist__link" to={`product/${item.id}`}>
                  <div className="wishlist__imgbox">
                    <img src={item.img[0]} alt="product" />
                  </div>
                </Link>
                <div className="wishlist__box">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link className="wishlist__link" to={`product/${item.id}`}>
                      <h3 className="wishlist__name">{item.name}</h3>
                    </Link>
                    <button
                      onClick={() => addWishlist(item)}
                      className="wishlist__removebtn"
                    >
                      <i className="bx bx-x"></i>
                    </button>
                  </div>
                  <p className="wishlist__price">${item.to_price}</p>
                  <Link className="wishlist__link" to={`product/${item.id}`}>
                    <p className="wishlist__select">SELECT OPTIONS</p>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Wishlist;
