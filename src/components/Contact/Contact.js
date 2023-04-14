import React, { useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>
      Your message has been successfully sent.
      <br /> I will contact you soon.
    </p>
  );
};

const Contact = (props) => {
  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j47dqfc",
        "template_hqs6qbr",
        form.current,
        "wD4c-upLmDd7p6BeJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <form ref={form} className="contact" onSubmit={sendEmail}>
      <h1>Get in Touch with Me!</h1>
      <li>
        <label>Name : </label>
        <input type="text" name="fullName" required />
      </li>
      <li>
        <label>Email : </label>
        <input type="email" name="email" required />
      </li>
      <li>
        <label>Phone Number : </label>
        <input type="text" name="phonenumber" required />
      </li>
      <li>
        <label>Message : </label>
        <textarea type="text" name="message" required />
      </li>
      <button>
        Send
        <span>
          <FiSend />
        </span>
      </button>
      <div style={{ color: "#000000", fontWeight: "bolder" }}>
        {result ? <Result /> : null}
      </div>
    </form>
  );
};

export default Contact;
