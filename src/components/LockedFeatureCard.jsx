import React from 'react';
import './LockedFeatureCard.css';

const LockedFeatureCard = ({ 
  title, 
  shortDescription, 
  benefitText 
}) => {
  return (
    <div className="locked-feature-card">
      {/* Lock Icon - Top Right */}
      <div className="lock-corner">
        <span className="lock-icon">🔒</span>
      </div>

      {/* Coming Soon Badge */}
      <div className="coming-soon-tag">
        <span className="tag-icon">🔒</span>
        <span className="tag-text">Coming Soon</span>
      </div>

      {/* Semi-blurred Content Area */}
      <div className="locked-content-area">
        <div className="content-blur">
          <h3 className="locked-title">{title}</h3>
          <p className="locked-description">{shortDescription}</p>
        </div>
      </div>

      {/* Benefit Section */}
      <div className="benefit-section">
        <div className="benefit-indicator">💡</div>
        <p className="benefit-line">{benefitText}</p>
      </div>
    </div>
  );
};

export default LockedFeatureCard;
