import React from 'react';
import './Experiance.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function Experiance() {
    return (
        <section id='experience'>
            <h5>What Skilld I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Frontent Development</h3>
                    <div className='experience_content'>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon'/>
                            <div>
                                <h4>typeScript</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon'/>
                            <div>
                                <h4>Reactjs</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon'/>
                            <div>
                                <h4>BootStrap</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience_backend'>
                    <h3>Frontent Development</h3>
                    <div className='experience_content'>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon'/>
                            <div>
                                <h4>Git</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon'/>
                            <div>
                                <h4>GitHub</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon'/>
                            <div>
                                <h4>Trello</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className='experience_detalis'>
                            <BsPatchCheckFill className='experience_detalis-icon'/>
                            <div>
                                <h4>Jira</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiance