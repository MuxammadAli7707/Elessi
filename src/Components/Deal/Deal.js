import React from "react";
import { Link } from "react-router-dom";
import Store from "../Store/Store";
function Deal() {
  let data = Store((state) => state.data);
  const myCartAdd = Store(state => state.myCartAdd)
  return (
    <div
      id="carouselExampleIndicators"
      className="deal carousel slide"
      data-bs-ride="carousel"
    >
      <div className="container">
        <div className="deal__main">
          <div className="deal__left">
            <div className="deal__inner">
              <h3 className="deal__title">Deal of the Day</h3>

              <div className="d-flex">
                <button
                  className="deal__prevbtn"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <i className="bx bx-chevron-left"></i>
                  Prev Deal
                </button>
                <span className="deal__span">|</span>
                <button
                  className="deal__nextbtn"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  Next Deal
                  <i className="bx bx-chevron-right"></i>
                </button>
              </div>
            </div>

            <ul className="deal__list carousel-inner">
              {data.map((item, index) => {
                if (item.id <= 4) {
                  return (
                    <li
                      key={index + 324}
                      data-bs-interval="0"
                      id={item.id}
                      className={`deal__item carousel-item ${
                        item.id === 1 ? "active" : ""
                      } `}
                    >
                      <div className="deal__items">
                        <div className="deal__imgbox">
                        <Link
                              to={`product/${item.id}`}
                              className="deal__name-link"
                            >
                          <img src={item.img[0]} alt={item.name} />   
                          </Link>
                        </div>

                        <div className="deal__box">
                          <Link className="deal__category-link" to="/">
                            Chilies, Garlic, Lemon
                          </Link>

                          <h3 className="deal__name">
                            <Link
                              to={`product/${item.id}`}
                              className="deal__name-link"
                            >
                              {item.name}
                            </Link>
                          </h3>

                          <div className="d-flex align-items-center mb-4">
                            <del className="deal__sale">$25.00</del>
                            <span className="deal__price">
                              ${item.to_price}
                            </span>
                          </div>

                          <div className="d-flex mb-2">
                            <p className="deal__date">
                              <span className="deal__date-time">178</span>
                              Days
                            </p>
                            <p className="deal__date">
                              <span className="deal__date-time">18</span>
                              hours
                            </p>
                            <p className="deal__date">
                              <span className="deal__date-time">58</span>
                              mins
                            </p>
                            <p className="deal__date">
                              <span className="deal__date-time">18</span>
                              secs
                            </p>
                          </div>

                          <div className="deal__soldbox d-flex justify-content-between align-items-center mb-1">
                            <p className="deal__sold">
                              Already Sold:{" "}
                              <span className="deal__sold-span">
                                {item.sold_hours}
                              </span>
                            </p>
                            <p className="deal__sold">
                              Available:{" "}
                              <span className="deal__sold-ava">
                                {item.sold}
                              </span>
                            </p>
                          </div>
                          <div className="deal__range">
                            <div className="deal__range-pro"></div>
                          </div>

                          <button onClick={()=> myCartAdd(item)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight" className="deal__addbtn">Add to cart</button>
                        </div>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="deal__right carousel-indicators">
            {data.map((element, ind) => {
              if (element.id <= 4) {
                return (
                  <button
                    key={ind + 8712}
                    className={ind === 0 ? "active" : ""}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={ind}
                    aria-current={ind === 0 ? true : false}
                    aria-label="Slide 1"
                  >
                    <div className="d-flex">
                      <div className="deal__btnimg">
                        <img src={element.img[0]} alt={element.name} />
                      </div>
                      <div className="d-flex flex-column">
                        <h4 className="deal__btnname">{element.name} </h4>
                        <p className="deal__btnprice">
                          <del>${element.from_price}</del> ${element.to_price}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deal;
