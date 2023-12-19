import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css'
Header.propTypes = {

};

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <header className='h-16 bg-black relative flex justify-between'>

      <span className='flex'>
        <img className='pl-4' src='/logo.png' alt='' />
        <h1 className='font-bold text-2xl text-[#753625] uppercase self-center'>Mộc Tiên</h1>
      </span>
      <span className='flex text-black self-center'>
        <span className="fa-solid fa-cart-shopping cursor-pointer text-white text-2xl px-2 mb-1">

        </span>
        <span
          className="header__bar fa-solid fa-bars cursor-pointer text-white text-3xl px-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <ul
            className={showMenu ?
              'header__menu w-32 block bg-black text-[#753625] text-xs absolute right-0 top-16 uppercase font-bold tracking-wider leading-8'
              : 'header__menu w-32 hidden bg-black text-[#753625] text-xs absolute right-0 top-16 uppercase font-bold tracking-wider leading-8'}>
            <li className='ml-2.5 h-8'>Home</li>
            <li className='ml-2.5 h-8'>Products</li>
            <li className='ml-2.5 h-8'>Contact</li>
            <li className='ml-2.5 h-8'>Login</li>
          </ul>
        </span>

      </span>


    </header>
  );
}

export default Header;