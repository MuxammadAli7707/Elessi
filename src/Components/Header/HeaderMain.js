import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';
import Object from '../../Object/Object';
import placeholder from '../../Images/placeholder.jpg';

import Store from '../Store/Store';

function HeaderMain() {
  const wishlistObj = Store(state => state.wishlistObj)
  const myCartObj = Store(state => state.myCartObj)

  const [focus, setFocus] = useState(false)
  let [text, setText] = useState('')

  const inputFocus = (e) => {
    setFocus(!focus)
  }

  const InputHandler = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="headerMain">
      <div className="container">
        <div className="headerMain__inner">
          <div>
            <Link to='/'>
              <img className="headerMain__logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="headerMain__searchbox">
            <input className="headerMain__search"
              onChange={InputHandler}
              onFocus={inputFocus}
              // onBlur={inputFocus}
              placeholder="I'm shopping for ..."
              type="search" />
            <button className="headerMain__btn">
              search
              <i className='bx bx-search'></i>
            </button>

            <ul className={`headerMain__list ${focus ? 'headerMain__block' : ''}`}>
              {
                Object.map((item, index) => {
                  if(text === '') {
                    return('')
                  }
                  if(item.name.toLowerCase().includes(text.toLowerCase())) {
                    return(
                      <li key={index+561} className='headerMain__item'>
                        <Link className='headerMain__link d-flex' to={`product/${item.id}`}>
                          <div className='headerMain__imgbox'>
                            <img src={item.img[0]} alt={item.name} />
                          </div>
                          <div>
                            <h3 className='headerMain__name'>{item.name}</h3>
                            <p className='headerMain__price'>${item.from_price}</p>
                          </div>
                        </Link>
                      </li>
                    )
                  }
                })
              }
            </ul>

          </div>
          <div className="headerMain__icons">
            <i type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight" className='bx bxs-shopping-bag-alt headerMain__icon' >
              {myCartObj.length === 0 ? "" : <span className='headerMain__span'>{myCartObj.length}</span>}
            </i>

            <i type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight3" aria-controls="offcanvasRight" className='bx bx-heart headerMain__icon'>
            {wishlistObj.length === 0 ? "" : <span className='headerMain__span'>{wishlistObj.length}</span>}
            </i>

            <i data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" className='bx bx-refresh headerMain__icon'></i>

              <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                  <div className="bottom-box text-center">
                  <h5 id="offcanvasBottomLabel"></h5>
                  <p></p>
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small bottom-body">
                <div className="bottom-box text-center">
                  <h5 className="bottom-title" id="offcanvasBottomLabel">Compare Products</h5>
                  <p className="bottom-text">(0 Products)</p>
                  </div>
                  <ul className="bottom-list">
                    <li className="bottom-item">
                      <img className="bottom-image" src={placeholder} alt="image" />
                    </li>
                    <li className="bottom-item">
                      <img className="bottom-image" src={placeholder} alt="image" />
                    </li>
                    <li className="bottom-item">
                      <img className="bottom-image" src={placeholder} alt="image" />
                    </li>
                    <li className="bottom-item">
                      <img className="bottom-image" src={placeholder} alt="image" />
                    </li> 
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
