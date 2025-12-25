import React from 'react';
import TrustDNAVisual from '../components/TrustDNAVisual';
import './Customers.css';

const Customers = () => {
  const customers = [
    { 
      name: 'করিম মিয়া', 
      trustScore: 85,
      totalPurchase: '৪৫,০০০ টাকা',
      onTimePayments: '১৮/২০',
      risk: 'কম',
      recommendation: 'বাকি দেওয়া যাবে, ছাড় দেওয়া যাবে'
    },
    { 
      name: 'সালমা বেগম', 
      trustScore: 72,
      totalPurchase: '৩২,০০০ টাকা',
      onTimePayments: '১৫/২০',
      risk: 'মাঝারি',
      recommendation: 'ছোট বাকি দেওয়া যাবে'
    },
    { 
      name: 'রহিম সাহেব', 
      trustScore: 45,
      totalPurchase: '১২,০০০ টাকা',
      onTimePayments: '৩/৫',
      risk: 'উচ্চ',
      recommendation: 'নগদে বিক্রয় করুন'
    }
  ];

  const getTrustLevel = (score) => {
    if (score >= 80) return { level: 'উচ্চ', color: 'high' };
    if (score >= 60) return { level: 'মাঝারি', color: 'medium' };
    return { level: 'কম', color: 'low' };
  };

  return (
    <div className="customers-page">
      <header className="page-header">
        <h1 className="page-title">👥 ক্রেতা বিশ্বস্ততা</h1>
        <p className="page-subtitle">কোন ক্রেতার সাথে কেমন ব্যবহার করবেন তা বুঝুন</p>
      </header>

      {/* Trust Explanation */}
      <section className="trust-explanation-section">
        <div className="explanation-card">
          <h2 className="explanation-title">🤝 বিশ্বস্ততা স্কোর কী?</h2>
          <p className="explanation-text">
            AI প্রতিটি ক্রেতার পেমেন্ট ইতিহাস, কেনাকাটার নিয়মিততা, এবং আচরণ বিশ্লেষণ করে একটি স্কোর দেয়। 
            এই স্কোর দেখে আপনি সহজেই বুঝতে পারবেন কোন ক্রেতাকে বাকি দিতে পারবেন, কাকে ছাড় দিতে পারবেন।
          </p>
          <div className="trust-levels-guide">
            <div className="level-guide high">
              <div className="level-icon">✅</div>
              <div className="level-info">
                <strong>৮০-১০০:</strong> নির্ভরযোগ্য ক্রেতা - বাকি ও ছাড় দেওয়া নিরাপদ
              </div>
            </div>
            <div className="level-guide medium">
              <div className="level-icon">⚠️</div>
              <div className="level-info">
                <strong>৬০-৭৯:</strong> মাঝারি - ছোট বাকি দেওয়া যাবে, সাবধানে
              </div>
            </div>
            <div className="level-guide low">
              <div className="level-icon">🚫</div>
              <div className="level-info">
                <strong>০-৫৯:</strong> ঝুঁকিপূর্ণ - নগদে বিক্রয় করা ভালো
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Cards */}
      <section className="customers-section">
        <h2 className="section-title">আপনার প্রধান ক্রেতারা</h2>
        <div className="customers-grid">
          {customers.map((customer, index) => {
            const trustLevel = getTrustLevel(customer.trustScore);
            return (
              <div key={index} className="customer-card">
                <div className="customer-header">
                  <div className="customer-avatar-large">👤</div>
                  <div className="customer-basic-info">
                    <h3 className="customer-name">{customer.name}</h3>
                    <div className="trust-score-badge">
                      <span className={`score-value ${trustLevel.color}`}>
                        {customer.trustScore}/100
                      </span>
                      <span className="score-label">বিশ্বস্ততা: {trustLevel.level}</span>
                    </div>
                  </div>
                </div>

                <div className="customer-stats">
                  <div className="stat-row">
                    <span className="stat-label">মোট কেনাকাটা:</span>
                    <span className="stat-value">{customer.totalPurchase}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">সময়মতো পেমেন্ট:</span>
                    <span className="stat-value">{customer.onTimePayments}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">ঝুঁকি মাত্রা:</span>
                    <span className={`risk-badge ${trustLevel.color}`}>{customer.risk}</span>
                  </div>
                </div>

                <div className="ai-recommendation">
                  <div className="recommendation-icon">💡</div>
                  <div className="recommendation-content">
                    <span className="recommendation-label">AI পরামর্শ:</span>
                    <span className="recommendation-text">{customer.recommendation}</span>
                  </div>
                </div>

                <button className="view-details-btn">
                  বিস্তারিত দেখুন →
                </button>

                {/* Trust DNA Visualization */}
                <div className="trust-visual-container">
                  <TrustDNAVisual customerName={customer.name} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Risk Explanation */}
      <section className="risk-explanation-section">
        <div className="explanation-card info">
          <h2 className="explanation-title">⚠️ ঝুঁকি কীভাবে কমাবেন?</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">📋</div>
              <h3 className="tip-title">বাকির খাতা রাখুন</h3>
              <p className="tip-text">প্রতিটি বাকি লেনদেন লিখে রাখুন। AI আপনাকে রিমাইন্ডার দেবে।</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🔔</div>
              <h3 className="tip-title">নিয়মিত ফলো-আপ</h3>
              <p className="tip-text">পেমেন্ট তারিখের আগে WhatsApp এ রিমাইন্ডার পাঠান।</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">💰</div>
              <h3 className="tip-title">ছাড় দিয়ে নগদ নিন</h3>
              <p className="tip-text">নগদে কিনলে ছোট ছাড় দিন। এতে বাকির ঝামেলা কমবে।</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;
