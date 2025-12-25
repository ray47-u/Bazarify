import React, { useState } from 'react';
import './ExplainabilityDrawer.css';

const ExplainabilityDrawer = ({ isOpen, onClose, decision }) => {
  if (!decision) return null;

  // Sample AI decision explanations
  const explanations = {
    'price-adjustment': {
      title: 'দাম কমানোর সুপারিশ',
      product: 'চিনি (১ কেজি)',
      suggestion: '৮৫ টাকা থেকে ৮২ টাকা',
      reasoning: 'AI কেন এই সিদ্ধান্ত নিয়েছে?',
      explanation: [
        'আপনার দোকানের আশেপাশে তিনটি দোকান পরীক্ষা করা হয়েছে।',
        'তাদের মধ্যে দুইটিতে চিনি ৮২ টাকায় এবং একটিতে ৮০ টাকায় বিক্রয় হচ্ছে।',
        'গত সাত দিনে আপনার দোকানে চিনি মাত্র ৩ বার বিক্রয় হয়েছে।',
        'আশেপাশের দোকানগুলোতে প্রতিদিন গড়ে ১৫-২০ বার বিক্রয় হচ্ছে।',
        'দাম ৩ টাকা কমালে আপনিও প্রতিদিন ১৫+ বার বিক্রয় করতে পারবেন।'
      ],
      dataUsed: [
        {
          icon: '🗺️',
          label: 'প্রতিযোগীদের তথ্য',
          value: 'আশেপাশের ৩টি দোকান'
        },
        {
          icon: '📊',
          label: 'আপনার বিক্রয় ইতিহাস',
          value: 'গত ৭ দিন - ৩টি বিক্রয়'
        },
        {
          icon: '💰',
          label: 'বাজার মূল্য',
          value: '৮০-৮৩ টাকা (গড়: ৮২ টাকা)'
        },
        {
          icon: '📈',
          label: 'প্রভাব পূর্বাভাস',
          value: 'দৈনিক ১২ কেজি বেশি বিক্রয়'
        }
      ],
      confidence: {
        score: 89,
        reason: 'প্রতিযোগীদের তথ্য সঠিক এবং আপনার পূর্ববর্তী বিক্রয়ের ধরন স্পষ্ট।'
      },
      outcome: 'যদি এই দাম গ্রহণ করেন, মাসে প্রায় ৪,৮০০ টাকা অতিরিক্ত লাভ হতে পারে।'
    },
    'inventory-restock': {
      title: 'স্টক বাড়ানোর সুপারিশ',
      product: 'ডাল (মসুর)',
      suggestion: '১৫ কেজি থেকে ৫০ কেজি অর্ডার করুন',
      reasoning: 'AI কেন এই সিদ্ধান্ত নিয়েছে?',
      explanation: [
        'আগামী ১৫ দিনে রমজান শুরু হবে।',
        'গত বছরের রমজানে ডালের বিক্রয় স্বাভাবিকের চেয়ে ৬০% বেশি ছিল।',
        'আপনার হাতে এখন মাত্র ১৫ কেজি ডাল আছে যা ৩-৪ দিনে শেষ হবে।',
        'রমজানের সময় প্রতিদিন গড়ে ৮-১০ কেজি ডাল বিক্রয় হয়।',
        'এখনই ৫০ কেজি অর্ডার করলে পুরো রমজানে স্টক শেষ হওয়ার ভয় থাকবে না।'
      ],
      dataUsed: [
        {
          icon: '📅',
          label: 'উৎসবের সময়সূচী',
          value: 'রমজান ১৫ দিনে শুরু'
        },
        {
          icon: '📊',
          label: 'গত বছরের তথ্য',
          value: '৬০% বেশি বিক্রয় হয়েছিল'
        },
        {
          icon: '📦',
          label: 'বর্তমান স্টক',
          value: '১৫ কেজি (৩-৪ দিনের)'
        },
        {
          icon: '🔮',
          label: 'প্রত্যাশিত চাহিদা',
          value: 'দৈনিক ৮-১০ কেজি'
        }
      ],
      confidence: {
        score: 94,
        reason: 'ঐতিহাসিক তথ্য অনুযায়ী রমজানে সবসময় চাহিদা বাড়ে।'
      },
      outcome: 'সময়মত স্টক করলে প্রায় ১৮,০০০ টাকার বিক্রয় হারানো থেকে বাঁচবেন।'
    },
    'timing-change': {
      title: 'দোকান খোলার সময় পরিবর্তন',
      product: 'সকাল ৮:০০ থেকে ৭:৩০',
      suggestion: '৩০ মিনিট আগে খুলুন',
      reasoning: 'AI কেন এই সিদ্ধান্ত নিয়েছে?',
      explanation: [
        'গত ৩০ দিনের তথ্য বিশ্লেষণ করে দেখা গেছে।',
        'সকাল ৭:৩০ থেকে ৮:৩০ এর মধ্যে আপনার দোকানের সামনে দিয়ে গড়ে ২৫ জন মানুষ যাচ্ছেন।',
        'এদের মধ্যে ১২ জন আপনার নিয়মিত ক্রেতা যারা অন্য দোকান থেকে কেনেন।',
        'প্রতিটি ক্রেতা গড়ে ৬৫০ টাকার পণ্য কেনেন।',
        '৩০ মিনিট আগে খুললে এই ১২ জনের অন্তত ৮ জনকে পাওয়া সম্ভব।'
      ],
      dataUsed: [
        {
          icon: '👥',
          label: 'পথচারী বিশ্লেষণ',
          value: 'সকাল ৭:৩০-৮:৩০ তে ২৫ জন'
        },
        {
          icon: '🎯',
          label: 'সম্ভাব্য ক্রেতা',
          value: '১২ জন নিয়মিত কাস্টমার'
        },
        {
          icon: '💵',
          label: 'গড় ক্রয় মূল্য',
          value: '৬৫০ টাকা প্রতি ক্রেতা'
        },
        {
          icon: '📈',
          label: 'সফলতার হার',
          value: '৬৫% রূপান্তর সম্ভব'
        }
      ],
      confidence: {
        score: 76,
        reason: 'তথ্য পর্যবেক্ষণ থেকে নেওয়া, কিন্তু আবহাওয়া ও অন্যান্য কারণ প্রভাব ফেলতে পারে।'
      },
      outcome: 'মাসে প্রায় ১২,০০০ টাকা অতিরিক্ত বিক্রয় সম্ভব।'
    }
  };

  const currentExplanation = explanations[decision] || explanations['price-adjustment'];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="drawer-overlay" onClick={onClose}></div>
      )}

      {/* Drawer */}
      <div className={`explainability-drawer ${isOpen ? 'open' : ''}`}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title-section">
            <span className="drawer-icon">🤔</span>
            <h2 className="drawer-title">AI কীভাবে সিদ্ধান্ত নিয়েছে?</h2>
          </div>
          <button className="drawer-close" onClick={onClose}>
            <span className="close-icon">✕</span>
          </button>
        </div>

        {/* Decision Summary */}
        <div className="decision-summary">
          <h3 className="summary-title">{currentExplanation.title}</h3>
          <div className="summary-product">{currentExplanation.product}</div>
          <div className="summary-suggestion">
            <span className="suggestion-label">সুপারিশ:</span>
            <span className="suggestion-value">{currentExplanation.suggestion}</span>
          </div>
        </div>

        {/* Reasoning Section */}
        <div className="reasoning-section">
          <div className="section-header">
            <span className="section-icon">💡</span>
            <h4 className="section-title">{currentExplanation.reasoning}</h4>
          </div>
          <div className="reasoning-steps">
            {currentExplanation.explanation.map((step, index) => (
              <div key={index} className="reasoning-step">
                <div className="step-number">{index + 1}</div>
                <p className="step-text">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Used Section */}
        <div className="data-used-section">
          <div className="section-header">
            <span className="section-icon">📊</span>
            <h4 className="section-title">কোন তথ্য ব্যবহার করা হয়েছে?</h4>
          </div>
          <div className="data-grid">
            {currentExplanation.dataUsed.map((data, index) => (
              <div key={index} className="data-item">
                <span className="data-icon">{data.icon}</span>
                <div className="data-content">
                  <span className="data-label">{data.label}</span>
                  <span className="data-value">{data.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confidence Section */}
        <div className="confidence-section">
          <div className="section-header">
            <span className="section-icon">🎯</span>
            <h4 className="section-title">AI কতটা নিশ্চিত?</h4>
          </div>
          <div className="confidence-meter">
            <div className="confidence-bar">
              <div 
                className="confidence-fill"
                style={{ width: `${currentExplanation.confidence.score}%` }}
              >
                <span className="confidence-score">{currentExplanation.confidence.score}%</span>
              </div>
            </div>
            <p className="confidence-reason">{currentExplanation.confidence.reason}</p>
          </div>
        </div>

        {/* Outcome Section */}
        <div className="outcome-section">
          <div className="outcome-icon">🎁</div>
          <div className="outcome-content">
            <h4 className="outcome-title">সম্ভাব্য ফলাফল</h4>
            <p className="outcome-text">{currentExplanation.outcome}</p>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="transparency-note">
          <p className="note-text">
            <strong>মনে রাখবেন:</strong> AI এর সিদ্ধান্ত তথ্যের উপর ভিত্তি করে তৈরি। 
            চূড়ান্ত সিদ্ধান্ত সবসময় আপনার নিজের অভিজ্ঞতা দিয়ে নিন।
          </p>
        </div>

        {/* Drawer Footer */}
        <div className="drawer-footer">
          <button className="footer-btn secondary" onClick={onClose}>
            বুঝেছি
          </button>
          <button className="footer-btn primary">
            এই সুপারিশ গ্রহণ করুন
          </button>
        </div>
      </div>
    </>
  );
};

// Example usage component
export const ExplainabilityTrigger = ({ decisionType, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <button 
        className="explain-link"
        onClick={() => setIsDrawerOpen(true)}
      >
        {children || 'AI কেন এটি সুপারিশ করেছে? 🤔'}
      </button>
      <ExplainabilityDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        decision={decisionType}
      />
    </>
  );
};

export default ExplainabilityDrawer;
