import React, { useState } from "react";

import homeImg from "../../Images/home1.jpg";
import homeImg2 from "../../Images/home2.jpg";
import homeImg3 from "../../Images/home3.jpg";
import homeImg4 from "../../Images/home4.jpg";
import homeImg5 from "../../Images/home5.jpg";
import homeImg6 from "../../Images/home6.jpg";
import { CgMenuCheese } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import { GiHeadphones } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { BsChevronRight } from "react-icons/bs";

function Navbar() {
  const [isActive, setisActive] = useState(false);

  return (
    <div className="navbar__main">
      <div className="container">
        <div className="navbar__navbar d-flex">
          <div className="categorys ">
            <p
              className="categorys-text"
              onClick={(e) => setisActive(!isActive)}
            >
              <CgMenuCheese className="menu__icon" />
              browse category
            </p>

            {isActive && (
              <div className="categorys-menu">
                <ul className="categorys_innerList">
                  <li className="categorys-items fruit">
                    <GiFruitBowl className="categorys__icon" /> Fruits{" "}
                    <BsChevronRight className="right__arrow" />
                    <div className="fruit__hover slide-left">
                      <div className="fruit__hover-inner d-flex">
                        <div className="shop-hover-divs">
                          <h5 className="shop-titles">Theme Elements</h5>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                        </div>
                        <div className="shop-hover-divs">
                          <h5 className="shop-titles">Theme elements</h5>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="categorys-items vegetable">
                    <GiFruitBowl className="categorys__icon" />
                    Vegetables <BsChevronRight className="right__arrow" />
                    <div className="vegetable__hover slide-left">
                      <div className="vegetable__hover-inner d-flex">
                        <div className="shop-hover-divs">
                          <h5 className="shop-titles">Daily vegeatable</h5>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                        </div>
                        <div className="shop-hover-divs">
                          <h5 className="shop-titles">Exotic vegetable</h5>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="categorys-items">
                    <GiFruitBowl className="categorys__icon" />
                    Drinks <BsChevronRight className="right__arrow" />
                  </li>
                  <li className="categorys-items">
                    <GiFruitBowl className="categorys__icon" />
                    Butter & Egges{" "}
                  </li>
                  <li className="categorys-items">
                    <GiFruitBowl className="categorys__icon" />
                    Trees{" "}
                  </li>
                  <li className="categorys-items">
                    <GiFruitBowl className="categorys__icon" />
                    Cakes{" "}
                  </li>
                  <li className="categorys-items">
                    <GiFruitBowl className="categorys__icon" />
                    Meats{" "}
                  </li>
                  <li className="categorys-items">
                    <GiFruitBowl className="categorys__icon" />
                    Fish{" "}
                  </li>
                  <li className="categorys-items">
                    <GiFruitBowl className="categorys__icon" />
                    Grapes{" "}
                  </li>
                  <li className="categorys-items">
                    <GiFruitBowl className="categorys__icon" />
                    Banana{" "}
                  </li>
                  <li className="categorys-items">
                    <GiFruitBowl className="categorys__icon" />
                    Potatoes{" "}
                  </li>
                </ul>
              </div>
            )}
          </div>
          <nav className="navbar">
            <ul className="navbar__list list d-flex">
              <li className="list__item home">
                Home <BsChevronDown className="bottom--arrow" />
                <div className="home__hover slide-top">
                  <div className="home__inner-Back">
                    <div className="home-hover-box">
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg2}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg3}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg4}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg5}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg6}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg5}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg2}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg4}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list__item shop">
                Shop <BsChevronDown className="bottom--arrow" />
                <div className="shop-hover slide-top">
                  <div className="shop-hover-inner">
                    <ul className="shop-hover-list d-flex">
                      <div className="shop-hover-divs">
                        <h5 className="shop-titles">Shop pages</h5>
                        <li className="shop-hover-list-item">
                          Infinite scroll <span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">
                          Left SideBarspan <span className="span-hot">hot</span>
                        </li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">
                          Ajax Load More <span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-hot">hot</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                      <div className="shop-hover-divs">
                        <h5 className="shop-titles">Product layout</h5>
                        <li className="shop-hover-list-item">
                          Infinite scroll<span className="span-hot">hot</span>
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">
                          Left SideBar<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                      <div className="shop-hover-divs">
                        <h5 className="shop-titles">Products imgs</h5>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-hot">hot</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                      <div className="shop-hover-divs">
                        <h5 className="shop-titles">Products Features</h5>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                      <div className="shop-hover-divs">
                        <h5 className="shop-titles">Shop pages</h5>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list__item element">
                Elements <BsChevronDown className="bottom--arrow" />
                <div className="element-hover  slide-top ">
                  <div className="element-hover-inner ">
                    <ul className="shop-hover-list d-flex">
                      <div className="shop-hover-divs">
                        <h5 className="shop-titles">Blogs </h5>
                        <li className="shop-hover-list-item">Standart</li>
                        <li className="shop-hover-list-item">Mansory</li>
                        <li className="shop-hover-list-item">Grid</li>
                        <li className="shop-hover-list-item">List</li>
                        <li className="shop-hover-list-item">Left sidebar</li>
                        <li className="shop-hover-list-item">
                          Rigt sidebar <span className="span-new">new</span>
                        </li>
                      </div>
                      <div className="shop-hover-divs">
                        <h5 className="shop-titles">Header Type</h5>
                        <li className="shop-hover-list-item">
                          Infinite scroll<span className="span-hot">hot</span>
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                      </div>
                      <div className="shop-hover-divs">
                        <h5 className="shop-titles">Theme Elements</h5>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-hot">hot</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                      </div>
                      <div className="shop-hover-divs">
                        <h5 className="shop-titles">Theme elements</h5>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list__item page">
                Pages <BsChevronDown className="bottom--arrow" />
                <div className="page-hover slide-top">
                  <div className="page-hover-inner">
                    <ul className="page-list">
                      <li className="page-item">My Accaount</li>
                      <li className="page-item">Contact us</li>
                      <li className="page-item">About us</li>
                      <li className="page-item">ORder Tracking</li>
                      <li className="page-item">FAQ</li>
                      <li className="page-item">Site Boxed</li>
                      <li className="page-item">Popup news</li>
                      <li className="page-item">Site Boxed</li>
                      <li className="page-item">Top promotion</li>
                      <li className="page-item">Cookie LAW GDRP</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list__item vendors">
                Vendors <BsChevronDown className="bottom--arrow" />
                <div className="vendor-hover slide-top">
                  <div className="page-hover-inner">
                    <ul className="page-list">
                      <li className="page-item">Vendoor list</li>
                      <li className="page-item">Vendoor</li>
                      <li className="page-item">Vendoor v2</li>
                      <li className="page-item">Vendoor v1</li>
                      <li className="page-item">Vendoor v3</li>
                      <li className="page-item">Vendoor store</li>
                      <li className="page-item">Vendoor store v2</li>
                      <li className="page-item">Vendoor store v1</li>
                      <li className="page-item">Vendoor store v3</li>
                      <li className="page-item">LAW GDRP</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div>
            <a className="numberTel" href="tel: 800-3456-88">
              <GiHeadphones className="headPhone" />
              (+01)-800-3456-88
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
