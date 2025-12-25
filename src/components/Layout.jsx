import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app-layout">
      <button className="mobile-menu-toggle" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
