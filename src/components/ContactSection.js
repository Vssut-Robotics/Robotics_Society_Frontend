import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import "../styles/ContactSectionStyle.css";

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bjq4qbf",
        "template_6qmkhka",
        form.current,
        "LDtAEmIilvSXPccym"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="ContactSection">
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input required placeholder="Enter Your Name" type="text" name="user_name" />
          <label>Email</label>
          <input
            placeholder="Enter your Email Address"
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea required placeholder="Enter your message" name="message" />
          <input required className="submitButton" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
