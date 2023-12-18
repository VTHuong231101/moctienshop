import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'
Header.propTypes = {

};

function Header(props) {
  return (
    <header className='h-16 justify-between bg-black relative'>
      <div className='h-full flex'>
        <span className='flex'>
          <img className='pl-4' src='/logo.png' alt='' />
          <h1 className='font-bold text-2xl uppercase self-center'>Mộc Tiên</h1>
        </span>
        <span className='flex text-black self-center'>
          <i class="fa-solid fa-cart-shopping text-white text-2xl px-2 mb-1"></i>
          <i class="fa-solid fa-bars text-white text-3xl px-4"></i>
        </span>
      </div>
      <ul className='header__menu block bg-black text-white w-2/5 absolute right-0'>
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </header>
  );
}

export default Header;