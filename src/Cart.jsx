import React, { useState } from 'react'
import './App.css'
import App from './App'
import  Iphone14 from './assets/Iphone14.jpg'
import  Iphone from './assets/Iphone13.webp'
import  samsung from './assets/samsung.jpg'
import  flipphone from './assets/flipphone.jpg'
import  zfold from './assets/z14fold.webp'
import  oneplus from './assets/oneplus.webp'
import  oneplus11 from './assets/oneplus11.jpg'
import  xiomi from './assets/xiomi.jpg'


function Cart() {
    const [count, setCount] = useState(0);
   const price=[
    "₹149,900",
    " ₹1,34,999",
    "₹1,09,999",
    "₹1,54,999",
    " ₹1,47,999",
    "₹20,000",
    "₹61,999",
    "₹44,999",
   ];
   const rating= <i className="fa-solid fa-star" ></i>

  return (
    <>
    
    <div className='cart '>
      
      <nav className='nav navbar navbar-expand-lg flex-column flex-sm-row'>
    <ul className="nav ">
  <li className="nav-item  ">
    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light" href="#">About</a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Shop</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">All Products</a></li>
      <li><a className="dropdown-item" href="#">Popular Items</a></li>
      <li><a className="dropdown-item" href="#">New Arrivals</a></li>
        </ul>
  </li>
  
  <li className="nav-item">
    <div className='navbar-brand nav-link'><i className="fa-solid fa-cart-shopping"></i>Cart {count}</div>
  </li>
</ul>
</nav>
    
    </div>
    <div className='container'>
    <App  name='Iphone 13 Pro' count={count} setCount={setCount} image={Iphone}  price={price[0]} sale="Sale!" strike="₹160,000"rating={rating} />
    <App count={count} setCount={setCount}  image={samsung} name="Samsung  Galaxy S23 " price={price[1]}/>
    <App count={count} setCount={setCount} image={flipphone} name="Sasumg Galaxy ZFlip 5G" price={price[2]} sale="Sale!"/>
    <App count={count} setCount={setCount} image={zfold} name="Sasumg Galaxy ZFold 4" price={price[3]} sale="Sale!" strike="₹165,000" rating={rating}/>
    <App count={count} setCount={setCount} image={Iphone14} name='Iphone 14 Pro' price={price[4]} strike="₹168,000" rating={rating}/>
    <App count={count} setCount={setCount} image={oneplus} name="OnePlus Nord CE3 Lite" price={price[5]} sale="Sale!"/>
    <App count={count} setCount={setCount} image={oneplus11} name="OnePlus 11 5G"  price={price[6]} rating={rating}/>
    <App count={count} setCount={setCount} image={xiomi} name="Xiaomi 12 Pro 5G" price={price[7]} sale="Sale!"/>
    </div>
    
    <footer className=' footer container-fluid bg-dark '>

      <div>Copyright © Your Website 2023</div>
    </footer>
    </>
  )
}

export default Cart