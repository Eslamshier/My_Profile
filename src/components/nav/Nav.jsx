/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { BiMessageSquareDetail } from 'react-icons/bi';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === ('#about') ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === ('#experience') ? 'active' : ''}><BsBook /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === ('#portfolio') ? 'active' : ''}><PiShoppingBagOpenBold/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === ('#contact') ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav;