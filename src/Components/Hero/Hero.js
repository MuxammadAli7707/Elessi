import React from "react";
import img1 from "../../Images/organ1.jpg";
import img2 from "../../Images/organ2.jpg";
import img3 from "../../Images/organ3.jpg";

function Hero() {
  return (
    <div className="hero">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="hero__box carousel-caption d-none d-md-block animate__animated animate__fadeInLeft">
              <h4 className="hero__title">Elessi Store</h4>
              <p className="hero__text">
                Fresh vegetables <br /> Sale up to 30% Off
              </p>
              <button className="hero__btn">shop now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="hero__box carousel-caption d-none d-md-block animate__animated animate__fadeInUp">
              <h3 className="hero__title-blue">Daily Promotions</h3>
              <p className="hero__text p-black">
                Fresh Lemon <br /> discount up to{" "}
                <span className="hero__span">40% off</span>
              </p>
              <button className="hero__btn-two">shop now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="hero__desc  carousel-caption d-none d-md-block animate__animated animate__fadeInDown">
              <h3 className="hero__title-blue">Shop our freshest</h3>
              <p className="hero__text p-black">
                Fresh Hand-Picked <br/> Vegetables
                <span className="hero__span"> Everyday</span>
              </p>
              <button className="hero__btn-two">show now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
