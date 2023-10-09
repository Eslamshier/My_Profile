import React from 'react';
import './Header.css';
import CAT from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Eslam Salem Shoir</h1>
        <h5 className='text-light'>Front end Developer</h5>
        <CAT />
        <HeaderSocials/>
        
        <div className='me'>
          <img src={ME} alt='my-img'></img>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header