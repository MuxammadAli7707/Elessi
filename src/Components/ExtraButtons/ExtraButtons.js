import React, { useState, useEffect } from 'react';

function ExtraButtons() {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

  return (
    <div className="btns-box">
        <button onClick={goToTop} className="btn-white"><i className='bx bx-chevron-up'></i></button>
      <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight7" aria-controls="offcanvasRight" className="btn-white"><i className='bx bx-time'></i></button>
        <button className="btn-rtl">RTL</button>
        <button className="btn-black">DEMO</button>
    </div>
  );
}

export default ExtraButtons;