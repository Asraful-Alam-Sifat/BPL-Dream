import React from 'react';
import currencyIcon from '../../assets/Currency.png';

const NavBar = () => {
    return (
      <div className="navbar bg-base-100 border-none ">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
    
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="btn flex justify-between items-center">
     0 Coins
     <img src={currencyIcon} alt="Currency" />
    </button>
  </div>
</div>
    );
};

export default NavBar;