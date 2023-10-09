import React from 'react';
import './Services.css';
import { GiCheckMark } from 'react-icons/gi';


function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
      {/* ui/ux */}
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon' />
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
          </ul>
        </article>
        {/* web development */}
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
          </ul>
        </article>

        {/* content creation */}
        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>lorem, ipsum dolor sit amet consectetur elite.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;