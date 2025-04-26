import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Cardiologist, CityCare Hospital",
    quote: "Since adopting this AI tool, our diagnosis time has dropped by 40%. It’s like having a second opinion always on call.",
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Example video
    beforeAfter: {
      before: "Avg. Diagnosis Time: 45 mins",
      after: "Avg. Diagnosis Time: 27 mins",
    },
  },
  {
    name: "Dr. Arjun Mehta",
    role: "General Practitioner, MediOne Clinic",
    quote: "The platform reduced my paperwork and helped me focus more on patient care. It's a game changer.",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY", // Example video
    beforeAfter: {
      before: "Time on admin tasks: 3 hrs/day",
      after: "Time on admin tasks: 1 hr/day",
    },
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">💬 Testimonials from Doctors</h2>
      <p className="testimonials-subtext">Real stories of better care, less workload, and smarter medicine.</p>

      <div className="testimonials-list">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="video-wrapper">
              <iframe
                src={item.videoUrl}
                title={item.name}
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <blockquote className="quote">“{item.quote}”</blockquote>
            <p className="doctor-name">{item.name}</p>
            <p className="doctor-role">{item.role}</p>
            <div className="stats">
              <div className="before">
                <span>Before</span>
                <strong>{item.beforeAfter.before}</strong>
              </div>
              <div className="after">
                <span>After</span>
                <strong>{item.beforeAfter.after}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
