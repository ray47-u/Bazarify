import React from 'react';
import FutureFeatureCard, { PreviewTemplates } from './FutureFeatureCard';
import LockedFeatureCard from './LockedFeatureCard';
import './ProFeaturesShowcase.css';

const ProFeaturesShowcase = () => {
  const futureFeatures = [
    {
      id: 'inventory-forecast',
      icon: '📊',
      title: 'স্মার্ট মজুদ পূর্বাভাস',
      description: 'AI আপনার বিক্রয় প্যাটার্ন বিশ্লেষণ করে পরবর্তী ৩০ দিনের জন্য সঠিক মজুদ পূর্বাভাস দেবে',
      benefit: 'অতিরিক্ত মজুদে টাকা আটকে থাকবে না, আবার স্টক শেষ হওয়ার ভয়ও থাকবে না। প্রতি মাসে ১৫-২০% খরচ বাঁচান।',
      timeline: 'ফেব্রুয়ারি ২০২৬',
      previewContent: <PreviewTemplates.InventoryForecast />
    },
    {
      id: 'customer-lifetime',
      icon: '👥',
      title: 'কাস্টমার লাইফটাইম ভ্যালু',
      description: 'প্রতিটি ক্রেতার সাথে দীর্ঘমেয়াদে কত টাকার ব্যবসা হবে, AI সেটা হিসাব করে দেখাবে',
      benefit: 'কোন ক্রেতাদের বিশেষ যত্ন নিতে হবে বুঝতে পারবেন। সঠিক ক্রেতাকে ছাড় দিয়ে লম্বা সম্পর্ক তৈরি করুন।',
      timeline: 'মার্চ ২০২৬',
      previewContent: <PreviewTemplates.CustomerLifetime />
    },
    {
      id: 'auto-negotiation',
      icon: '🤝',
      title: 'স্বয়ংক্রিয় সরবরাহকারী আলোচনা',
      description: 'AI আপনার হয়ে সরবরাহকারীদের সাথে দাম নিয়ে আলোচনা করবে এবং সেরা দাম বের করবে',
      benefit: 'প্রতিটি পণ্যে ৫-১০% কম দামে কিনতে পারবেন। মাসে ২০,০০০+ টাকা সাশ্রয় সম্ভব।',
      timeline: 'এপ্রিল ২০২৬',
      previewContent: <PreviewTemplates.AutoNegotiation />
    },
    {
      id: 'cashflow-predictor',
      icon: '💸',
      title: 'নগদ প্রবাহ পূর্বাভাস',
      description: 'আগামী ৩ মাসে কবে আপনার হাতে নগদ টাকা কম থাকবে, AI আগে থেকেই সতর্ক করবে',
      benefit: 'হঠাৎ টাকার সংকট হবে না। সময়মতো ব্যাংক লোন বা বিকাশ ক্যাশ আউট করার পরিকল্পনা করুন।',
      timeline: 'মে ২০২৬',
      previewContent: <PreviewTemplates.CashFlowPredictor />
    },
    {
      id: 'whatsapp-automation',
      icon: '💬',
      title: 'WhatsApp স্বয়ংক্রিয় বার্তা',
      description: 'অর্ডার নিশ্চিতকরণ, ডেলিভারি আপডেট, পেমেন্ট রিমাইন্ডার - সব WhatsApp এ অটো পাঠানো হবে',
      benefit: 'প্রতিদিন ১-২ ঘণ্টা সময় বাঁচবে। ক্রেতারা সময়মতো আপডেট পেয়ে খুশি থাকবে।',
      timeline: 'জুন ২০২৬',
      previewContent: <PreviewTemplates.WhatsAppAuto />
    },
    {
      id: 'multi-location',
      icon: '🏪',
      title: 'মাল্টি-লোকেশন ব্যবস্থাপনা',
      description: 'একাধিক দোকান বা গুদাম থাকলে একসাথে সব জায়গার হিসাব দেখুন এবং পরিচালনা করুন',
      benefit: 'সব শাখার রিয়েল-টাইম আপডেট এক জায়গায়। কোন শাখায় কী মজুদ আছে জানুন, দ্রুত সিদ্ধান্ত নিন।',
      timeline: 'জুলাই ২০২৬',
      previewContent: (
        <div className="preview-multi-location">
          <div className="location-item">
            <span className="location-icon">📍</span>
            <span className="location-name">মিরপুর শাখা</span>
            <span className="location-status online">সচল</span>
          </div>
          <div className="location-item">
            <span className="location-icon">📍</span>
            <span className="location-name">উত্তরা শাখা</span>
            <span className="location-status online">সচল</span>
          </div>
          <div className="location-item">
            <span className="location-icon">📍</span>
            <span className="location-name">গুদাম (টঙ্গী)</span>
            <span className="location-status">বন্ধ</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="pro-features-showcase">
      <header className="showcase-header">
        <div className="header-content">
          <div className="header-icon">🚀</div>
          <div className="header-text">
            <h1 className="showcase-title">আসছে নতুন AI ফিচার</h1>
            <p className="showcase-subtitle">
              BazaarMind ক্রমাগত উন্নত হচ্ছে। আপনার ব্যবসা আরও সহজ করতে নতুন ফিচার যুক্ত হচ্ছে।
            </p>
          </div>
        </div>
        
        <div className="roadmap-timeline">
          <div className="timeline-item">
            <span className="timeline-dot active"></span>
            <span className="timeline-label">বর্তমান</span>
          </div>
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <span className="timeline-label">Q1 2026</span>
          </div>
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <span className="timeline-label">Q2 2026</span>
          </div>
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <span className="timeline-label">Q3 2026</span>
          </div>
        </div>
      </header>

      <div className="features-grid">
        {futureFeatures.map(feature => (
          <FutureFeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            benefit={feature.benefit}
            timeline={feature.timeline}
            previewContent={feature.previewContent}
            comingSoon={true}
          />
        ))}
      </div>

      {/* Future Capabilities Section */}
      <section className="future-capabilities-section">
        <div className="capabilities-header">
          <div className="capabilities-icon">🔮</div>
          <div className="capabilities-title-group">
            <h2 className="capabilities-title">Future Capabilities – BazaarMind Roadmap</h2>
            <p className="capabilities-subtitle">
              Advanced features currently in research and development. These capabilities represent our commitment to continuous innovation.
            </p>
          </div>
        </div>

        <div className="locked-features-grid">
          <LockedFeatureCard
            title="AI Negotiation Chat"
            shortDescription="Real-time price negotiation between customer and AI shopkeeper."
            benefitText="Helps SMEs close more deals without manual bargaining."
          />
          
          <LockedFeatureCard
            title="Credit Readiness Advisor"
            shortDescription="AI prepares bank-ready financial profiles for SMEs."
            benefitText="Improves access to loans and formal financing."
          />
          
          <LockedFeatureCard
            title="Compliance & VAT Guide"
            shortDescription="AI explains VAT, trade license, and regulatory deadlines."
            benefitText="Reduces penalties and compliance confusion for SMEs."
          />
          
          <LockedFeatureCard
            title="Export Readiness Advisor"
            shortDescription="AI guides SMEs on certifications, pricing, and markets."
            benefitText="Helps local businesses go global."
          />
          
          <LockedFeatureCard
            title="Social Buzz Detector"
            shortDescription="Tracks viral product trends from social platforms."
            benefitText="Allows SMEs to stock trending products early."
          />
        </div>
      </section>

      <footer className="showcase-footer">
        <div className="footer-card">
          <h3 className="footer-title">আপনার মতামত দিন</h3>
          <p className="footer-description">
            কোন ফিচারটি আপনার সবচেয়ে বেশি প্রয়োজন? আমাদের জানান এবং ডেভেলপমেন্ট প্রক্রিয়ায় অংশ নিন।
          </p>
          <div className="footer-actions">
            <button className="vote-btn">
              <span className="btn-icon">👍</span>
              <span className="btn-text">ভোট দিন</span>
            </button>
            <button className="feedback-btn">
              <span className="btn-icon">💭</span>
              <span className="btn-text">ফিডব্যাক দিন</span>
            </button>
            <button className="subscribe-btn">
              <span className="btn-icon">📧</span>
              <span className="btn-text">আপডেট পান</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProFeaturesShowcase;
