import React from 'react';

function Recently() {
  return (
    <div
    className="offcanvas offcanvas-end mycart"
    tabIndex="-1"
    id="offcanvasRight7"
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
      <h2 className="wishlist__title">Recently Viewed</h2>

      <ul className="wishlist__list">
      <li className="wishlist__items">
          <i className='bx bx-low-vision wishlist__iheart' ></i>
            <p className="wishlist__no">No products were viewed.</p>
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="wishlist__btn"
            >
              RETURN TO SHOP
            </button>
          </li>
      </ul>
    </div>
  </div>
  );
}

export default Recently;