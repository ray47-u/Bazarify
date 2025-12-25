import React from 'react';
import LockedFeatureCard from '../components/LockedFeatureCard';
import './Roadmap.css';

const Roadmap = () => {
  const upcomingFeatures = [
    {
      title: 'WhatsApp বিক্রয় রিপোর্ট',
      benefit: 'প্রতিদিন সকালে আপনার মোবাইলে স্বয়ংক্রিয় রিপোর্ট পাবেন',
      icon: '📱',
      status: 'Q1 2026'
    },
    {
      title: 'বাজার দর তুলনা',
      benefit: 'আশেপাশের বাজারের দাম দেখে সঠিক দাম ঠিক করুন',
      icon: '📊',
      status: 'Q1 2026'
    },
    {
      title: 'ডিজিটাল বাকির খাতা',
      benefit: 'কে কত টাকা বাকি নিয়েছে তা স্বয়ংক্রিয়ভাবে ট্র্যাক হবে',
      icon: '📝',
      status: 'Q2 2026'
    },
    {
      title: 'সাপ্লায়ার নেটওয়ার্ক',
      benefit: 'সবচেয়ে ভালো দরে পণ্য দেয় এমন সরবরাহকারী খুঁজুন',
      icon: '🤝',
      status: 'Q2 2026'
    },
    {
      title: 'ভয়েস কমান্ড',
      benefit: 'বলেই হিসাব যোগ করুন - লিখতে হবে না',
      icon: '🎙️',
      status: 'Q3 2026'
    },
    {
      title: 'ক্রেডিট স্কোর সিস্টেম',
      benefit: 'ভালো ব্যবসায়ীদের জন্য সহজ ঋণ পাওয়ার ব্যবস্থা',
      icon: '💳',
      status: 'Q3 2026'
    }
  ];

  const activeFeatures = [
    {
      title: 'চালু আছে',
      features: [
        '✅ দৈনিক মুনাফা ট্র্যাকিং',
        '✅ ক্রেতা বিশ্বস্ততা স্কোর',
        '✅ দাম পরামর্শ',
        '✅ মজুদ সতর্কতা'
      ]
    }
  ];

  return (
    <div className="roadmap-page">
      <header className="page-header">
        <div className="header-icon">🚀</div>
        <h1 className="page-title">আপনার ব্যবসার জন্য কী আসছে</h1>
        <p className="page-subtitle">
          আমরা ছোট ব্যবসায়ীদের জন্য নতুন নতুন সুবিধা তৈরি করছি। এই ফিচারগুলো শীঘ্রই যুক্ত হবে।
        </p>
      </header>

      {/* Current Features */}
      <section className="current-features-section">
        <div className="current-features-card">
          <h2 className="section-title">✨ এখন যা পাচ্ছেন</h2>
          <div className="features-list">
            {activeFeatures[0].features.map((feature, index) => (
              <div key={index} className="feature-item active">
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="upcoming-features-section">
        <h2 className="section-title">🔮 শীঘ্রই আসছে</h2>
        <p className="section-description">
          এই ফিচারগুলো এখনও তৈরি হচ্ছে। প্রস্তুত হলেই আপনার কাছে পৌঁছে যাবে। কোনো অতিরিক্ত খরচ নেই।
        </p>
        
        <div className="roadmap-grid">
          {upcomingFeatures.map((feature, index) => (
            <LockedFeatureCard
              key={index}
              title={feature.title}
              description={feature.benefit}
              icon={feature.icon}
              comingSoon={feature.status}
            />
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="feedback-section">
        <div className="feedback-card">
          <h2 className="feedback-title">💬 আপনার মতামত দিন</h2>
          <p className="feedback-text">
            কোন ফিচার আগে চান? কোনো নতুন আইডিয়া আছে? আমাদের জানান। আমরা ছোট ব্যবসায়ীদের 
            কথা শুনে নতুন ফিচার তৈরি করি।
          </p>
          <div className="feedback-actions">
            <button className="feedback-btn primary">
              <span className="btn-icon">📞</span>
              <span className="btn-text">WhatsApp এ মতামত দিন</span>
            </button>
            <button className="feedback-btn secondary">
              <span className="btn-icon">📧</span>
              <span className="btn-text">Email করুন</span>
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="timeline-section">
        <h2 className="section-title">📅 আনুমানিক সময়সূচি</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker completed">✓</div>
            <div className="timeline-content">
              <h3 className="timeline-title">এখন</h3>
              <p className="timeline-text">মূল ড্যাশবোর্ড ও AI পরামর্শ চালু</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker upcoming">Q1</div>
            <div className="timeline-content">
              <h3 className="timeline-title">জানুয়ারি-মার্চ ২০২৬</h3>
              <p className="timeline-text">WhatsApp রিপোর্ট ও বাজার দর তুলনা</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker upcoming">Q2</div>
            <div className="timeline-content">
              <h3 className="timeline-title">এপ্রিল-জুন ২০২৬</h3>
              <p className="timeline-text">ডিজিটাল বাকির খাতা ও সাপ্লায়ার নেটওয়ার্ক</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker upcoming">Q3</div>
            <div className="timeline-content">
              <h3 className="timeline-title">জুলাই-সেপ্টেম্বর ২০২৬</h3>
              <p className="timeline-text">ভয়েস কমান্ড ও ক্রেডিট স্কোর সিস্টেম</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
