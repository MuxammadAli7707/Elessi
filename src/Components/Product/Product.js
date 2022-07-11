import React from "react";
import { Link, useLocation } from "react-router-dom";
import Object from "../../Object/Object";
import ProductList from "./ProductList";
import fire from "../../Images/flame.png";
import Store from "../Store/Store";

function Product() {
  let location = useLocation();
  const myCartAdd = Store(state => state.myCartAdd)

  return (
    <>
      <div className="loc-box">
        {Object.map((item, i) => {
          if(item.id == location.pathname.split("/").at(-1)) {
            return (
              <h4 className="loc-title">{item.name}</h4>
            )
          }
        })}
        <ul className="loc-list">
          <li className="loc-item">
          <Link className="loc-link" to='/'>
          Home
          <i className='bx bx-chevron-right'></i>
          </Link>
          </li>
          <li className="loc-item">
          <Link className="loc-link" to='/'>
          Organics
          <i className='bx bx-chevron-right'></i>
          </Link>
          </li>
          <li className="loc-item">
          <Link className="loc-link" to='/'>
          Vegetables
          <i className='bx bx-chevron-right'></i>
          </Link>
          </li>
          <li className="loc-item">
          <Link className="loc-link" to='/'>
          Daily Vegetables
          <i className='bx bx-chevron-right'></i>
          </Link>
          </li>
          <li className="loc-item">
          <Link className="loc-link" to='/'>
          Root Vegetables
          </Link>
          </li>
        </ul>
      </div>
    <div className="container">
      {Object.map((item, i) => {
        if (item.id == location.pathname.split("/").at(-1)) {
          return (
            <li className="violet__item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
                key={i}
              >
                {item.img.map((i, j) => {
                  return (
                    <img
                      key={j}
                      className="violet__item-img"
                      src={i}
                      alt="img"
                    />
                  );
                })}
              </div>
              <div className="violet__item-inner">
                <h3 className="violet__item-name">{item.name}</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="violet__item-stars">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <p className="violet__item-custom"> (1 customer review)</p>
                </div>
                <div className="violet__item-prices">
                  <p className="violet__item-prev__price">${item.from_price}</p>
                  <p className="violet__item-next__price">${item.to_price}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 0 15px 0",
                  }}
                >
                  <img className="violet__item-fire" src={fire} alt="img" />
                  <p className="violet__item-last"> 15 sold in last 19 hours</p>
                </div>
                <p className="violet__item-about">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                <div
                  className="violet__item-hurry__box"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 0 10px 0",
                  }}
                >
                  <i className="bx bx-time"></i>
                  <p className="violet__item-hurry">Hurry up! Sale end in:</p>
                </div>

                <ul className="violet__date-list">
                  <li className="violet__date-item">
                    <p className="violet__date-date">179</p>
                    <p className="violet__date-text">days</p>
                  </li>
                  <li className="violet__date-item">
                    <p className="violet__date-date">09</p>
                    <p className="violet__date-text">hours</p>
                  </li>
                  <li className="violet__date-item">
                    <p className="violet__date-date">39</p>
                    <p className="violet__date-text">mins</p>
                  </li>
                  <li className="violet__date-item">
                    <p className="violet__date-date">00</p>
                    <p className="violet__date-text">secs</p>
                  </li>
                </ul>
                <div className="violet__input-box">
                  <p className="violet__already">
                    Only <span> 40 </span>item(s) left in stock.{" "}
                  </p>
                </div>
                <div className="violet__range"></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    className="violet__input-range"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      className="violet__input-place"
                      type="text"
                      placeholder="1"
                    />
                    <div className="violet__range-btns">
                      <button className="violet__range-btn">+</button>
                      <button className="violet__range-btn">-</button>
                    </div>
                  </div>
                  <button className="violet__item-btn">Buy now</button>
                  <button onClick={()=> myCartAdd(item)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight" className="violet__item-btn">Add to Cart</button>
                </div>

                <ProductList />
              </div>
            </li>
          );
        }
      })}
    </div>
    </>
  );
}

export default Product;
