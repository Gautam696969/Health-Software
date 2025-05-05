import React, { useState } from 'react';
import './Integrations.css';

const systems = [
  { name: 'Epic', logo: './image/Epic.jpg' },
  { name: 'Cerner', logo: './image/Cerner.png' },
  { name: 'Allscripts', logo: './image/Allscript.jpg'},
  { name: 'Athenahealth', logo: './image/Athenahealth.png' },
  { name: 'Meditech', logo: './image/meditech.jpg' }
];

const Integrations = () => {
  const [imgError, setImgError] = useState({});

  const handleImageError = (name) => {
    setImgError(prev => ({...prev, [name]: true}));
  };

  return (
    <section className="integrations">
      <h2 className="integrations-title">🧩 Integration with Existing Systems</h2>
      <p className="integrations-subtext">
        Seamlessly connects with your EHR, lab systems, and patient portals.
      </p>

      <div className="integration-logos">
        {systems.map((system, index) => (
          <div className="integration-logo" key={index}>
            {!imgError[system.name] ? (
              <img 
                src={system.logo} 
                alt={system.name}
                onError={() => handleImageError(system.name)}
              />
            ) : (
              <div className="fallback-logo">
                {system.name[0]}
              </div>
            )}
            <span>{system.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Integrations;
