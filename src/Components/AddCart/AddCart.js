import React from "react";
import Store from "../Store/Store";

function AddCart() {
  const myCartObj = Store(state => state.myCartObj)
  const myCartMinus = Store(state => state.myCartMinus)
  const myCartAdd = Store(state => state.myCartAdd)
  const myCartDel = Store(state => state.myCartDel)
  const subtotal = Store(state => state.subtotal)
  const total = Store(state => state.total)
  const percentage = (subtotal * 100) / 200

  return(
    <section className="offcanvas offcanvas-end mycart" tabIndex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
      <button type="button" className="quickview__xbtn" data-bs-dismiss="offcanvas" aria-label="Close"><i className='bx bx-chevron-right'></i></button>

      <div className="mycart__bigbox">
        <h2 className="mycart__title">My cart</h2>

        <ul className="mycart__list">
          {
            myCartObj.map((item, index) => {
              return(
                <li key={index+99} className="mycart__item">
                  <div className="mycart__imgbox">
                    <img src={item.img[0]} alt="product" />
                  </div>
                  <div className="mycart__box">

                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="mycart__name">{item.name}</h3>
                    <button onClick={() => myCartDel(item)} className="mycart__removebtn"><i className='bx bx-x'></i></button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <input className="quickview__input" type="text" Value={item.count} placeholder={item.count} />
                      <div className="d-flex flex-column">
                        <button onClick={() => myCartAdd(item)} className="quickview__plus">+</button>
                        <button onClick={() => myCartMinus(item)} className="quickview__plus">-</button>
                      </div>
                        <p className="mycart__price">x ${item.to_price}</p>
                    </div>
                    <p className="mycart__totalprice">${item.to_price * item.count}</p>
                  </div>
                  </div>
                </li>
              )
            })
          }
        </ul>

        <div className="mycart__servis">
          <button className="mycart__servis-btn"><i className='bx bx-edit'></i> <br />
            Note
          </button>
          <span className="mycart__servis-span"></span>
          <button className="mycart__servis-btn"><i className='bx bxs-car'></i> <br />
            Shipping
          </button>
          <span className="mycart__servis-span"></span>
          <button className="mycart__servis-btn"><i className='bx bx-purchase-tag bx-flip-horizontal' ></i> <br />
          Cuppon</button>
        </div>

        <div className="mycart__total">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mycart__total-subtotal">Subtotal</p>
            <p className="mycart__total-subtotal">${subtotal}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mycart__total-shipping">Shipping</p>
            <p className="mycart__total-shipping">Free Shipping</p>
          </div>
        </div>

        <div className="mycart__tprice">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mycart__tprice-total">Total</p>
            <p className="mycart__tprice-total">${total}</p>
          </div>
          

          <div className="mycart__tprice-rangebox">
            <div style={{width: `${percentage >= 100 ? 100 : percentage}%`}} className="mycart__tprice-range">
              <span className="mycart__tprice-rangespan">{percentage >= 100 ? 100 : percentage}%</span>
            </div>
          </div>
          <p className="mycart__tprice-desc">Spend <span className="mycart__tprice-price">$118.8</span> more to reach <span className="mycart__tprice-strong">Free shipping!</span></p>
        </div>

        <button className="mycart__cartbtn">viwe cart</button>
        <button className="mycart__checkbtn">checkout</button>

      </div>
  </section>

  )
}

export default AddCart;