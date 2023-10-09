/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/portfolio7.jpg';
import IMG8 from '../../assets/portfolio8.jpg';
import IMG9 from '../../assets/portfolio9.jpg';
import IMG10 from '../../assets/portfolio10.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'template-html-css-bootstrap-js',
    githube: 'https://github.com/Eslamshier/template-html-css-js',
    demo: 'https://dribbble.com/Alien_Pixels',
  },
  {
    id: 2,
    image: IMG2,
    title: 'template-html-css-bootstrap',
    githube: 'https://github.com/Eslamshier/template-html-css-bootstrap',
    demo: 'https://dribbble.com/Alien_Pixels',
  },
  {
    id: 3,
    image: IMG3,
    title: 'template-html-css',
    githube: 'https://github.com/Eslamshier/template-html-css',
    demo: 'https://dribbble.com/Alien_Pixels',
  },
  {
    id: 4,
    image: IMG4,
    title: 'template-2-Html-Css-Bootstrap',
    githube: 'https://github.com/Eslamshier/template-2-Html-Css-Bootstrap',
    demo: 'https://dribbble.com/Alien_Pixels',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Special-Design',
    githube: 'https://github.com/Eslamshier/Special-Design',
    demo: 'https://dribbble.com/Alien_Pixels',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Real-Estate',
    githube: 'https://github.com/Eslamshier/Real-Estate',
    demo: 'https://dribbble.com/Alien_Pixels',
  },
  {
    id: 7,
    image: IMG7,
    title: 'React-E-commerce',
    githube: 'https://github.com/Eslamshier/React-E-commerce',
    demo: 'https://dribbble.com/Alien_Pixels',
  },
  {
    id: 8,
    image: IMG8,
    title: 'ENFOLD',
    githube: 'https://github.com/Eslamshier/project-Shop',
    demo: 'https://dribbble.com/Alien_Pixels',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Dashboard',
    githube: 'https://github.com/Eslamshier/dashboard',
    demo: 'https://dribbble.com/Alien_Pixels',
  },
  {
    id: 10,
    image: IMG10,
    title: 'Bondi',
    githube: 'https://github.com/Eslamshier/Bondi',
    demo: 'https://dribbble.com/Alien_Pixels',
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, githube, demo }) => {
            return (
              <article className='portfolio_item' key={id}>
                <div className='portfolio-item-image'>
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a className='btn' href={githube} target='_blank' rel="noreferrer">Githube</a>
                  <a className='btn btn-primary' href={demo} target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )  
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio;