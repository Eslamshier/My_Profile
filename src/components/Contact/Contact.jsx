/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { PiMessengerLogo } from 'react-icons/pi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

function Contact() {
    const froom = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7o8oxtd', 'template_t49w91u', form.current, 'uhR3PufFSLSgb_nY3')
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact-container'>
                <div className='contact-options'>
                    <article className='contact-option'>
                        <HiOutlineMail className='contact-option-icon'/>
                        <h4>Email</h4>
                        <h5>eslam.shoir@gmail.com</h5>
                        <a href='https://eslam.shoir@gmail.com' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact-option'>
                        <PiMessengerLogo className='contact-option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Eslam Shoir</h5>
                        <a href='https://www.facebook.com/messages/t/100002897194568' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact-option'>
                        <AiOutlineWhatsApp className='contact-option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+2 010 1050 6405</h5>
                        <a href='https://api.whatsapp.com/send?phone+201010506405' target='_blank'>Send a message</a>
                    </article>
                </div>
                {/* end of contact option */}
                <form ref={froom} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required></input>
                    <input type='email' name='email' placeholder='Your Email' required></input>
                    <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;