/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

function About() {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-img'>
                        <img src={ME} alt='About Image'></img>
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>6 Months</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small>0 </small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projects</h5>
                            <small>11+Completed</small>
                        </article>
                    </div>
                    
                    <p>
                        I'm seeking a front-end developer part-time or full-time job.<br/>
                        I am a self-taught front-end developer.<br/> I primarily focus on writing clean, elegant, and efficient code.<br/>
                        I am proficient in HTML, CSS, JavaScript and React.JS.<br/> I also review existing code and can consult with you on.<br/>
                        Works at fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;