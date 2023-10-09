/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';

function Footer() {
  return (
    <footer>
      <a href='#' className='footer-logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experiance</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer-Socials">
        <a href='https://www.facebook.com/eslam.shoir/' target='_blank' rel="noreferrer"><FaFacebookF/></a>
        <a href='https://www.linkedin.com/in/eslam-shoir-497408287/' target='_blank' rel="noreferrer"><BiLogoLinkedin/></a>
        <a href='https://github.com/Eslamshier/' target='_blank' rel="noreferrer"><FiGithub/></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; by Eslam Shier. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;