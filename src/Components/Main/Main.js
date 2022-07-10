import React from 'react';
import About from '../About/About';
import Aside from '../Aside/Aside';
import Categories from '../Categories/Categories';
import Deal from '../Deal/Deal';
import Hero from '../Hero/Hero';
import Partners from '../Partners/Partners';
import Productss from '../Productss/Productss';
import Sales from '../Sales/Sales';

function Main() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <Deal />
      <Productss />
      <Aside />
      <Sales />
      <Partners />
    </>
  );
}

export default Main;