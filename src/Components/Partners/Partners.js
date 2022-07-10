import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import PartnersObj from "./PartnersObj/PartnersObj";

function Partners() {
  return (
    <div className="partner">
      <div className="container">
        <Splide
          options={{
            perPage: 6,
            arrows: true,
            pagination: true,
            drag: "free",
            gap: "1rem",
          }}
        >
          {PartnersObj.map((part) => {
            return (
              <SplideSlide key={part.id}>
                <img className="partner__img" src={part.image} alt="partners-image" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Partners;
