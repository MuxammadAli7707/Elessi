import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect } from "react";
import Store from "../Store/Store";
function Productss() {
  const category = [
    {
      name: "Fruits",
      icon: "bx bxl-apple",
      active: true,
    },

    {
      name: "Vegetables",
      icon: "bx bxl-flask",
      active: false,
    },

    {
      name: "Milk & Cream",
      icon: "bx bx-cookie",
      active: false,
    },

    {
      name: "Banana",
      icon: "bx bx-baguette",
      active: false,
    },

    {
      name: "Sea Food",
      icon: "bx bx-bowl-hot",
      active: false,
    },
  ];

  const [filter, setFilter] = useState("Fruits");
  const [cates, setCates] = useState(category);
  const data = Store((state) => state.data);
  const ids = Store((state) => state.cartId);
  const myCartAdd = Store((state) => state.myCartAdd);
  const addWishlist = Store((state) => state.addWishlist);

  const idHander = (e) => {
    ids(e);
  };

  const filterHandler = (e) => {
    cates.map((item) =>
      item.name === e ? (item.active = true) : (item.active = false)
    );
    setFilter(e);
  };

  useEffect(() => {
    setCates(cates);
  }, [cates]);

  return (
    <div className="fproducts">
      <div className="container">
        <div className="fproducts__boxs">
          <h2 className="fproducts__title">Featured Products</h2>
          <ul className="fproducts__clist">
            {cates.map((type, ind) => {
              return (
                <li key={ind + 7523} className="fproducts__citem">
                  <button
                    onClick={() => filterHandler(type.name)}
                    className={`fproducts__cbtn ${
                      type.active ? "fproducts__active" : ""
                    }`}
                  >
                    <i className={type.icon}></i>
                    <h3 className="fproducts__cname">{type.name}</h3>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="fproducts__list">
          {data.map((item, index) => {
            if (item.category === filter) {
              return (
                <li
                  key={index + 45}
                  className="fproducts__item  animate__animated animate__fadeInUp"
                >
                  <div className="fproducts__realative">
                    <Splide
                      options={{
                        perPage: 1,
                        arrows: true,
                        pagination: false,
                        drag: "free",
                      }}
                    >
                      <SplideSlide>
                        <div className="fproducts__imgbox">
                          <img src={item.img[0]} alt="" />
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div className="fproducts__imgbox">
                          <img src={item.img[1]} alt="" />
                        </div>
                      </SplideSlide>
                    </Splide>
                    <button
                      onClick={() => addWishlist(item)}
                      className="fproducts__hbtn"
                    >
                      {item.like ? (
                        <i className="bx bxs-heart fproducts__heart"></i>
                      ) : (
                        <i className="bx bx-heart"></i>
                      )}
                    </button>
                    <div className="fproducts__mbox">
                      <button
                        onClick={() => myCartAdd(item)}
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight2"
                        aria-controls="offcanvasRight"
                        className="fproducts__mbtn"
                      >
                        <i className="bx bx-shopping-bag"></i>
                      </button>
                      <button
                        onClick={() => idHander(item.id)}
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight1"
                        aria-controls="offcanvasRight"
                        className="fproducts__mbtn"
                      >
                        <i className="bx bx-low-vision"></i>
                      </button>
                      <button className="fproducts__mbtn">
                        <i data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" className="bx bx-refresh"></i>
                      </button>
                    </div>
                    <div className="fproducts__salebox">
                      <span className="fproducts__salebox-sale">
                        -{item.sold}%
                      </span>
                      <span className="fproducts__salebox-limited">
                        Limited
                      </span>
                    </div>
                  </div>
                  <div className="fproducts__box">
                    <Link className="fproducts__link" to={`product/${item.id}`}>
                      <h3 className="fproducts__subtitle">{item.name}</h3>
                    </Link>
                    <div className="fproducts__dflex">
                      <p className="fproducts__price">
                        {" "}
                        {item.discount_price !== null ? (
                          <del>${item.discount_price}</del>
                        ) : (
                          ""
                        )}{" "}
                        ${item.to_price}
                      </p>

                      {item.total !== null ? (
                        <div className="fproducts__kgbox">
                          <button className="fproducts__kgbtn">
                            {item.total.one_kg} <br /> kg
                          </button>
                          <button className="fproducts__kgbtn">
                            {item.total.half_kg}
                            <br />g
                          </button>
                          <button className="fproducts__kgbtn">
                            {item.total.half_2_kg}
                            <br />g
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default Productss;
