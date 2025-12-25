import React from 'react';
import './FutureFeatureCard.css';

const FutureFeatureCard = ({ 
  title, 
  description, 
  benefit, 
  icon, 
  comingSoon = true,
  timeline,
  previewContent 
}) => {
  return (
    <div className="future-feature-card">
      {comingSoon && (
        <div className="coming-soon-badge">
          <span className="badge-icon">✨</span>
          <span className="badge-text">শীঘ্রই আসছে</span>
          {timeline && <span className="badge-timeline">{timeline}</span>}
        </div>
      )}

      <div className="feature-header">
        <span className="feature-icon">{icon}</span>
        <div className="feature-title-group">
          <h3 className="feature-title">{title}</h3>
          <p className="feature-description">{description}</p>
        </div>
      </div>

      {/* Blurred Preview Content */}
      {previewContent && (
        <div className="preview-container">
          <div className="preview-content blurred">
            {previewContent}
          </div>
          <div className="preview-overlay">
            <div className="lock-icon">🔒</div>
            <p className="unlock-message">এই ফিচারটি শীঘ্রই উপলব্ধ হবে</p>
          </div>
        </div>
      )}

      {/* Value Proposition */}
      <div className="feature-benefit">
        <div className="benefit-icon">💡</div>
        <div className="benefit-content">
          <p className="benefit-label">আপনার লাভ:</p>
          <p className="benefit-text">{benefit}</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="feature-actions">
        <button className="waitlist-btn">
          <span className="btn-icon">🔔</span>
          <span className="btn-text">আমাকে জানান</span>
        </button>
        <button className="learn-more-btn">
          <span className="btn-text">আরও জানুন</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

// Preview content templates
export const PreviewTemplates = {
  InventoryForecast: () => (
    <div className="preview-chart">
      <div className="chart-title">পরবর্তী ৩০ দিনের পূর্বাভাস</div>
      <div className="chart-bars">
        <div className="bar" style={{ height: '60%' }}></div>
        <div className="bar" style={{ height: '75%' }}></div>
        <div className="bar" style={{ height: '90%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
      </div>
      <div className="chart-labels">সপ্তাহ ১ | সপ্তাহ ২ | সপ্তাহ ৩ | সপ্তাহ ৪</div>
    </div>
  ),

  CustomerLifetime: () => (
    <div className="preview-customer-card">
      <div className="customer-avatar">👤</div>
      <div className="customer-info">
        <div className="customer-name">করিম মিয়া</div>
        <div className="customer-stat">আজীবন মূল্য: ২,৪৫,০০০ টাকা</div>
        <div className="customer-trend">📈 +১৫% বৃদ্ধি প্রত্যাশিত</div>
      </div>
    </div>
  ),

  AutoNegotiation: () => (
    <div className="preview-negotiation">
      <div className="negotiation-step">
        <div className="step-icon">🤝</div>
        <div className="step-text">সরবরাহকারীর সাথে দাম আলোচনা চলছে...</div>
      </div>
      <div className="negotiation-result">সম্ভাব্য সাশ্রয়: ৮,৫০০ টাকা</div>
    </div>
  ),

  CashFlowPredictor: () => (
    <div className="preview-cashflow">
      <div className="cashflow-graph">
        <div className="graph-line"></div>
        <div className="graph-point critical"></div>
        <div className="graph-label">২ ফেব্রুয়ারি: নগদ সংকট সম্ভাবনা</div>
      </div>
    </div>
  ),

  WhatsAppAuto: () => (
    <div className="preview-whatsapp">
      <div className="whatsapp-message">
        <div className="message-icon">💬</div>
        <div className="message-text">
          "আসসালামু আলাইকুম! আপনার অর্ডার প্রস্তুত..."
        </div>
      </div>
      <div className="auto-badge">স্বয়ংক্রিয় বার্তা</div>
    </div>
  )
};

export default FutureFeatureCard;
