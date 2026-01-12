import React from 'react';

const ContactForm = () => (
  <div className="form-container">
    <div className="form-group">
      <label className="form-label">Name</label>
      <input type="text" className="form-input" placeholder="Your Name" />
    </div>
    <div className="form-group">
      <label className="form-label">Email</label>
      <input type="email" className="form-input" placeholder="you@example.com" />
    </div>
    <div className="form-group">
      <label className="form-label">Message</label>
      <textarea className="form-textarea" placeholder="Write your message..."></textarea>
    </div>
    <button className="btn btn-primary">Send Message</button>
  </div>
);

export default ContactForm;
