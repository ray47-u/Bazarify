import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { path: '/dashboard', icon: '🏠', label: 'হোম', labelEn: 'Dashboard' },
    { path: '/ai-decisions', icon: '🤖', label: 'AI সিদ্ধান্ত', labelEn: 'AI Decisions' },
    { path: '/customers', icon: '👥', label: 'ক্রেতা', labelEn: 'Customers' },
    { path: '/inventory', icon: '📦', label: 'মজুদ', labelEn: 'Inventory' },
    { path: '/insights', icon: '💡', label: 'অন্তর্দৃষ্টি', labelEn: 'Insights' },
    { path: '/roadmap', icon: '🚀', label: 'রোডম্যাপ', labelEn: 'Roadmap' }
  ];

  return (
    <nav className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-brand">
        <div className="brand-icon">🧠</div>
        <div className="brand-text">
          <h1 className="brand-name">BazaarMind</h1>
          <p className="brand-tagline">আপনার ব্যবসার সহযোগী</p>
        </div>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              isActive ? 'menu-item active' : 'menu-item'
            }
            onClick={onClose}
          >
            <span className="menu-icon">{item.icon}</span>
            <div className="menu-labels">
              <span className="menu-label">{item.label}</span>
              <span className="menu-label-en">{item.labelEn}</span>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="sidebar-footer">
        <button className="sidebar-cancel-btn" onClick={onClose}>
          <span className="cancel-icon">✕</span>
          <span className="cancel-text">বন্ধ করুন (Close)</span>
        </button>
        
        <div className="user-info">
          <div className="user-avatar">👤</div>
          <div className="user-details">
            <span className="user-name">রহিম সাহেব</span>
            <span className="user-role">দোকান মালিক</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
