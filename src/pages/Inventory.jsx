import React from 'react';
import './Inventory.css';

const Inventory = () => {
  const inventoryItems = [
    {
      name: 'চিনি (১ কেজি)',
      currentStock: 45,
      minStock: 50,
      status: 'low',
      avgSales: '১৫ কেজি/দিন',
      daysLeft: 3,
      action: 'এখনই অর্ডার করুন',
      supplier: 'করিম এন্টারপ্রাইজ'
    },
    {
      name: 'ডাল (১ কেজি)',
      currentStock: 120,
      minStock: 80,
      status: 'good',
      avgSales: '১০ কেজি/দিন',
      daysLeft: 12,
      action: 'পর্যাপ্ত মজুদ আছে',
      supplier: 'সালাম ট্রেডার্স'
    },
    {
      name: 'আটা (১ কেজি)',
      currentStock: 180,
      minStock: 100,
      status: 'overstock',
      avgSales: '৮ কেজি/দিন',
      daysLeft: 22,
      action: 'অতিরিক্ত মজুদ - দাম কমান',
      supplier: 'রহিম ফ্লাওয়ার মিলস'
    }
  ];

  const getStatusColor = (status) => {
    if (status === 'low') return 'danger';
    if (status === 'overstock') return 'warning';
    return 'success';
  };

  const getStatusIcon = (status) => {
    if (status === 'low') return '⚠️';
    if (status === 'overstock') return '📦';
    return '✅';
  };

  return (
    <div className="inventory-page">
      <header className="page-header">
        <h1 className="page-title">📦 মজুদ ব্যবস্থাপনা</h1>
        <p className="page-subtitle">স্টক শেষ বা অতিরিক্ত মজুদ এড়িয়ে চলুন</p>
      </header>

      {/* Stock Explanation */}
      <section className="stock-explanation-section">
        <div className="explanation-card">
          <h2 className="explanation-title">📊 AI কীভাবে মজুদ ট্র্যাক করে?</h2>
          <p className="explanation-text">
            AI আপনার বিক্রয়ের ধরন দেখে বুঝে নেয় প্রতিদিন কত পণ্য বিক্রি হয়। এরপর মজুদ শেষ হওয়ার আগেই 
            সতর্ক করে দেয় এবং কখন অর্ডার করতে হবে তা জানায়।
          </p>
          <div className="stock-status-guide">
            <div className="status-guide danger">
              <div className="status-icon">⚠️</div>
              <div className="status-info">
                <strong>কম মজুদ:</strong> এখনই অর্ডার করুন, নইলে স্টক শেষ হবে
              </div>
            </div>
            <div className="status-guide success">
              <div className="status-icon">✅</div>
              <div className="status-info">
                <strong>পর্যাপ্ত:</strong> ভালো আছে, এখন অর্ডার করার দরকার নেই
              </div>
            </div>
            <div className="status-guide warning">
              <div className="status-icon">📦</div>
              <div className="status-info">
                <strong>অতিরিক্ত:</strong> বেশি মজুদ - দাম কমিয়ে বিক্রি করুন
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Summary Cards */}
      <section className="inventory-summary">
        <div className="summary-cards">
          <div className="summary-card danger">
            <div className="card-icon">⚠️</div>
            <div className="card-content">
              <span className="card-label">কম মজুদ</span>
              <span className="card-value">৮ টি পণ্য</span>
            </div>
          </div>
          <div className="summary-card success">
            <div className="card-icon">✅</div>
            <div className="card-content">
              <span className="card-label">পর্যাপ্ত মজুদ</span>
              <span className="card-value">৪৫ টি পণ্য</span>
            </div>
          </div>
          <div className="summary-card warning">
            <div className="card-icon">📦</div>
            <div className="card-content">
              <span className="card-label">অতিরিক্ত মজুদ</span>
              <span className="card-value">১২ টি পণ্য</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Items */}
      <section className="inventory-items-section">
        <h2 className="section-title">মজুদ তালিকা</h2>
        <div className="inventory-grid">
          {inventoryItems.map((item, index) => (
            <div key={index} className={`inventory-card ${getStatusColor(item.status)}`}>
              <div className="item-header">
                <div className="item-icon">{getStatusIcon(item.status)}</div>
                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-supplier">সরবরাহকারী: {item.supplier}</span>
                </div>
              </div>

              <div className="stock-progress">
                <div className="progress-info">
                  <span className="current-stock">{item.currentStock} টি</span>
                  <span className="min-stock">ন্যূনতম: {item.minStock} টি</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${(item.currentStock / item.minStock) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="item-stats">
                <div className="stat-item">
                  <span className="stat-label">গড় বিক্রয়:</span>
                  <span className="stat-value">{item.avgSales}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">স্টক থাকবে:</span>
                  <span className="stat-value">{item.daysLeft} দিন</span>
                </div>
              </div>

              <div className={`ai-action ${item.status}`}>
                <div className="action-icon">🤖</div>
                <span className="action-text">{item.action}</span>
              </div>

              {item.status === 'low' && (
                <button className="order-btn">
                  <span className="btn-icon">📞</span>
                  <span className="btn-text">সরবরাহকারীকে কল করুন</span>
                </button>
              )}

              {item.status === 'overstock' && (
                <button className="discount-btn">
                  <span className="btn-icon">💰</span>
                  <span className="btn-text">বিশেষ অফার দিন</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="explanation-card info">
          <h2 className="explanation-title">💡 মজুদ ব্যবস্থাপনার টিপস</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">📅</div>
              <h3 className="tip-title">নিয়মিত চেক করুন</h3>
              <p className="tip-text">সপ্তাহে একবার মজুদ দেখুন। AI রিমাইন্ডার দেবে।</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🤝</div>
              <h3 className="tip-title">সরবরাহকারীর সাথে সম্পর্ক</h3>
              <p className="tip-text">ভালো সম্পর্ক রাখলে জরুরি মজুদ পাবেন।</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">💾</div>
              <h3 className="tip-title">অতিরিক্ত এড়িয়ে চলুন</h3>
              <p className="tip-text">বেশি মজুদে টাকা আটকে যায়। AI পরামর্শ মানুন।</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inventory;
