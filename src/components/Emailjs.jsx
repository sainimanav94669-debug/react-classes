import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailJS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_79qwy98', 'template_dnu5lcj', form.current, {
        publicKey: 'rCZfqFFlTrcbkP3aJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("from submit")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};