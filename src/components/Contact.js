import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    emailjs.sendForm(
      'service_4j1bh9a',
      'template_4lcnomi',
      form.current,
      '6lZ6DV60OwmxYE5cU'
    )
    .then((result) => {
      console.log('SUCCESS!', result.status, result.text);
      setStatusMessage('Message sent successfully!');
      setSubmitStatus('success');
      e.target.reset();
    }, (error) => {
      console.log('FAILED...', error);
      setStatusMessage('Failed to send the message. Please try again.');
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact">
      <h2>Contact me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`submit-button ${isSubmitting ? 'submitting' : ''} ${submitStatus ? submitStatus : ''}`}
        >
          <span className="button-text">
            {isSubmitting ? 'Sending...' : 'Send'}
          </span>
          <span className="button-icon"></span>
        </button>
      </form>

      {statusMessage && (
        <p className={`status-message ${submitStatus}`}>
          {statusMessage}
        </p>
      )}
    </div>
  );
}

export default Contact;