import React from 'react';
import { BsLinkedin,BsGithub } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';

function HeaderSocials() {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/eslam-shoir-497408287/' target='_blank'><BsLinkedin/></a>
            <a href='https://github.com/Eslamshier' target='_blank'><BsGithub/></a>
        </div>
    )
}

export default HeaderSocials;