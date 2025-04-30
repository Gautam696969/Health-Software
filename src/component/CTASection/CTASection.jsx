import React from 'react';
import './CTASection.css'; // Import your custom CSS file

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">
        🤖 Talk to an AI Healthcare Expert
      </h2>
      
      <p className="cta-subtext">
        Get started in minutes – reach out, schedule a call, or chat live with our AI assistant.
      </p>

      <div className="cta-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Tell us about your practice..." rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="calendly-widget">
          <iframe
            src="https://calendly.com/yourusername/healthcare-demo"
            title="Schedule Appointment"
            
            allow="camera; microphone"
          ></iframe>
        </div>
      </div>

      <button className="chatbot-button" onClick={() => alert('Chatbot coming soon!')}>
        💬 Chat with AI Assistant
      </button>
    </section>
  );
};

export default CTASection;
