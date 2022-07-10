import React from "react";
import { Link } from "react-router-dom";
import Store from "../Store/Store";

function ProductInfo() {
  let data = Store(state => state.data)
  let idd = Store(state => state.id)
  let myCartAdd = Store(state => state.myCartAdd)

  return(
    <>
      <div className="quickview offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
        <div className="quickview__bigbox">
        <button type="button" className="quickview__xbtn" data-bs-dismiss="offcanvas" aria-label="Close"><i className='bx bx-chevron-right'></i></button>
        {
          data.map((item, index) => {
            if(item.id === idd){
              return(
                <>
                  <div key={index+852} className="quickview__imgbox">
                    <div className="quickview__imgboxs">
                      <img src={item.img[0]} alt={item.name} />
                    </div>
                    <div className="quickview__imgboxs">
                      <img src={item.img[1]} alt={item.name} />
                    </div>
                  </div>
                  <div className="quickview__box">
                    <Link className="quickview__link" to={`product/${item.id}`}>
                      <h2 className="quickview__title">{item.name}</h2>
                    </Link>
                    <div className="d-flex">
                    <i className='bx bxs-star quickview__istar'></i><i className='bx bxs-star quickview__istar'></i><i className='bx bxs-star quickview__istar'></i><i className='bx bxs-star quickview__istar'></i><i className='bx bxs-star quickview__istar'></i>
                    </div>
                    <p className="quickview__price">${item.from_price} - ${item.to_price}</p>
                    <p className="quickview__desc">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>

                    <p className="quickview__kg">WEIGHT: 1KG</p>
                    <div className="quickview__kgbox">
                      <button className="quickview__kgbtn">1 <br/> kg</button>
                      <button className="quickview__kgbtn">500<br/>g</button>
                      <button className="quickview__kgbtn">250<br/>g</button>
                    </div>

                    <p className="quickview__kgprice">${item.discount_price}</p>

                    <p className="quickview__stock">99 in stock</p>

                    <div className="quickview__inputbox">
                      <div className="d-flex me-3">
                        <input className="quickview__input" type="number" defaultValue="1" />
                        <div className="d-flex flex-column">
                          <button className="quickview__plus">+</button>
                          <button className="quickview__plus">-</button>
                        </div>
                      </div>
                      <button onClick={() => myCartAdd(item)} className="quickview__addbtn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight">Add to cart</button>
                      <button className="quickview__addbtn">Buy now</button>
                    </div>

                    <p className="quickview__tag"><strong>SKU:</strong>OGN_EW9G9-03</p>
                    <p className="quickview__tag"><strong>Categories:</strong> <Link to="/" className="quickview__tag-link"> Nut Gifts</Link>, <Link to="/" className="quickview__tag-link"> Root Vegetables</Link></p>
                    <p className="quickview__tag"><strong>Tags:</strong><Link to="/" className="quickview__tag-link"> Fruits</Link>, <Link to="/" className="quickview__tag-link">Organics</Link>, <Link to="/" className="quickview__tag-link">Vegetables</Link></p>
                    

                    <div className="quickview__sharebox">
                      <i className='bx bx-share-alt quickview__ishare'></i>
                      Share
                      <Link className="quickview__share-link" to="/" target="_blank"><i className='bx bxl-twitter' ></i> </Link>
                      <Link className="quickview__share-link" to="/" target="_blank"><i className='bx bxl-facebook' ></i> </Link>
                      <Link className="quickview__share-link" to="/" target="_blank"><i className='bx bxl-telegram' ></i> </Link>
                      <Link className="quickview__share-link" to="/" target="_blank"><i className='bx bxl-vk' ></i> </Link>
                      <Link className="quickview__share-link" to="/" target="_blank"><i className='bx bx-envelope' ></i></Link>
                    </div>
                  </div>
                </>
              )
          }})
        }
        </div>
      </div>
    </>
  )
}

export default ProductInfo;