import React, { useState } from 'react';
import NavBar from '../component/NavBar';
import  styles from '../../resourses/Css/cssModules/contact.module.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    return (
        <>
            <NavBar />
            <header className={styles.headerFlights}>
                <h1>Contact Us</h1>
                <p>We're here to help you plan your perfect trip</p>
            </header>

            <section className={styles.contactSection}>
                <div className={styles.contactInfo}>
                    <h2>Get In Touch</h2>
                    <p><strong>Email:</strong> support@travelgo.com</p>
                    <p><strong>Phone:</strong> 111 222 3333</p>
                    <p><strong>Address:</strong> Cairo, Egypt</p>
                </div>

                <form className={styles.contactForm} >
                    <h2>Send a Message</h2>
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="6"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </>
    );
}

export default Contact;