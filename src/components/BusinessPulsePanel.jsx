import React, { useState, useEffect } from 'react';
import './BusinessPulsePanel.css';

const BusinessPulsePanel = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Sample business data - in production, this comes from API
  const businessData = {
    ownerName: "রহিম সাহেব",
    shopName: "রহিম ট্রেডার্স",
    sales: {
      amount: 48500,
      previousDay: 43200,
      trend: "up"
    },
    expenses: {
      amount: 21500,
      breakdown: {
        supplier: 15000,
        utilities: 2500,
        wages: 4000
      }
    },
    profit: {
      amount: 27000,
      margin: 55.67,
      trend: "good"
    },
    context: {
      customersToday: 47,
      topProduct: "চাল (১ কেজি)",
      weather: "শীতকাল",
      dayOfWeek: "বুধবার"
    }
  };

  // Get contextual greeting based on time
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "সুপ্রভাত";
    if (hour < 17) return "শুভ অপরাহ্ন";
    if (hour < 21) return "শুভ সন্ধ্যা";
    return "শুভ রাত্রি";
  };

  const getTimeOfDay = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "সকাল";
    if (hour < 17) return "দুপুর";
    if (hour < 21) return "সন্ধ্যা";
    return "রাত";
  };

  // Get business health assessment
  const getHealthMessage = () => {
    const profitMargin = businessData.profit.margin;
    const salesTrend = businessData.sales.trend;

    if (profitMargin > 50 && salesTrend === "up") {
      return "আজকের ব্যবসা দারুণ চলছে";
    } else if (profitMargin > 40) {
      return "আজকের ব্যবসা ভালো চলছে";
    } else if (profitMargin > 30) {
      return "আজকের ব্যবসা ঠিকঠাক চলছে";
    } else {
      return "আজ একটু সাবধান থাকতে হবে";
    }
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString('bn-BD');
  };

  const getSalesChange = () => {
    const change = businessData.sales.amount - businessData.sales.previousDay;
    const percentage = ((change / businessData.sales.previousDay) * 100).toFixed(1);
    return { change, percentage };
  };

  const salesChange = getSalesChange();

  return (
    <div className="business-pulse-panel">
      {/* Greeting Header */}
      <div className="pulse-greeting">
        <h2 className="greeting-text">
          {getGreeting()}, {businessData.ownerName}
        </h2>
        <p className="health-assessment">
          {getHealthMessage()}
        </p>
      </div>

      {/* Business Story - Narrative Style */}
      <div className="business-story">
        <div className="story-paragraph">
          <span className="story-time">{getTimeOfDay()} পর্যন্ত</span>
          <span className="story-text">
            আপনার দোকানে আজ{" "}
            <span className="highlight-number customers">{businessData.context.customersToday} জন</span>{" "}
            ক্রেতা এসেছেন।{" "}
            তারা মোট{" "}
            <span className="highlight-number sales">
              {formatCurrency(businessData.sales.amount)} টাকার
            </span>{" "}
            পণ্য কিনেছেন।
          </span>
          {salesChange.change > 0 && (
            <span className="story-insight positive">
              {" "}গতকালের চেয়ে {formatCurrency(salesChange.change)} টাকা ({salesChange.percentage}%) বেশি।
            </span>
          )}
        </div>

        <div className="story-paragraph">
          <span className="story-label">খরচের হিসাব:</span>
          <span className="story-text">
            সাপ্লায়ার পেমেন্ট, বিদ্যুৎ বিল, এবং কর্মচারীর বেতন মিলিয়ে আজ{" "}
            <span className="highlight-number expenses">
              {formatCurrency(businessData.expenses.amount)} টাকা
            </span>{" "}
            খরচ হয়েছে।
          </span>
        </div>

        <div className="story-divider"></div>

        {/* Profit - The Main Outcome */}
        <div className="profit-narrative">
          <div className="profit-intro">
            <span className="profit-label">আজকের লাভ</span>
          </div>
          <div className="profit-statement">
            <span className="profit-amount">
              {formatCurrency(businessData.profit.amount)} টাকা
            </span>
            <span className="profit-context">
              (বিক্রয়ের {businessData.profit.margin.toFixed(0)}%)
            </span>
          </div>
          <p className="profit-message">
            {businessData.profit.margin > 50 
              ? "চমৎকার! আজকের লাভ আপনার লক্ষ্যমাত্রার থেকে বেশি।" 
              : businessData.profit.margin > 40
              ? "ভালো লাভ হয়েছে। এভাবে চলতে থাকুন।"
              : "লাভ হয়েছে, তবে আরো ভালো করার সুযোগ আছে।"}
          </p>
        </div>

        <div className="story-divider subtle"></div>

        {/* Contextual Detail */}
        <div className="story-paragraph subtle">
          <span className="story-detail">
            আজ সবচেয়ে বেশি বিক্রয় হয়েছে{" "}
            <span className="highlight-product">{businessData.context.topProduct}</span>।{" "}
            {businessData.context.weather === "শীতকাল" && 
              "শীতকালীন পণ্যের চাহিদাও ভালো আছে।"}
          </span>
        </div>
      </div>

      {/* Quick Summary Footer */}
      <div className="pulse-summary">
        <div className="summary-item">
          <span className="summary-label">বিক্রয়</span>
          <span className="summary-value">{formatCurrency(businessData.sales.amount)}</span>
        </div>
        <div className="summary-divider">−</div>
        <div className="summary-item">
          <span className="summary-label">খরচ</span>
          <span className="summary-value">{formatCurrency(businessData.expenses.amount)}</span>
        </div>
        <div className="summary-divider">=</div>
        <div className="summary-item profit">
          <span className="summary-label">লাভ</span>
          <span className="summary-value">{formatCurrency(businessData.profit.amount)}</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessPulsePanel;
