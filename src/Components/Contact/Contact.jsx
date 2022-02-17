import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="Container">
        <div className="Content ContactContent">
          <h2>Thank you!</h2>
          <h4>We'll be in touch soon.</h4>
        </div>
      </div>
    );
  }

  return (
    <form className="Container" onSubmit={() => setSubmitted(true)}>
      <div className="Content ContactContent">
        <input type="text" placeholder="Your name" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <textarea
          placeholder="Your message"
          cols="36"
          rows="4"
          name="message"
          required
        />
        <button className="Button" type="submit">
          Send a message
        </button>
      </div>
    </form>
  );
};

export default Contact;
