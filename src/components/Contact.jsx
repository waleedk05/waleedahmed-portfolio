import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // form.current.value = '';
    emailjs.sendForm('service_8el27gi', 'template_002nzbg', form.current, 'pGS0VpPbXDzyXetsZ')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        form.current.from_name.value = '';
        form.current.from_email.value = '';
        form.current.message.value = '';
        alert('Your message has been sent successfully');
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };

  return (
    <section id='contact' class='contact container'>
      <h2 class="text-center">Contact</h2>
      <p class="text-center">Fill out the form and I will get back to you as soon as possible!</p>
      <div class='row'>
        <div class='row justify-content-center card border border-dark'>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" placeholder='John Smit' required />
            <label>Email</label>
            <input type="email" name="from_email" placeholder='exmaple@gmail.com' required />
            <label>Message</label>
            <textarea name="message" placeholder='Hello!...' required />
            <button type='submit' color='green'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;