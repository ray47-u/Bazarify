/* Design System Demo Page */
/* Showcases the BazaarMind color palette and components */

import React from 'react';
import './design-system.css';
import './DesignShowcase.css';

const DesignShowcase = () => {
  return (
    <div className="design-showcase">
      <header className="showcase-header">
        <h1>BazaarMind Design System</h1>
        <p className="showcase-subtitle">
          Warm, Earthy, Trustworthy - Designed for Bangladeshi SMEs
        </p>
      </header>

      {/* Color Palette */}
      <section className="showcase-section">
        <h2>Color Palette</h2>
        
        <div className="color-category">
          <h3>Earthy Greens - Primary</h3>
          <div className="color-grid">
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#2D5016' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Dark</span>
                <span className="swatch-hex">#2D5016</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#4A7C2C' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Earth Green</span>
                <span className="swatch-hex">#4A7C2C</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#6B9440' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Medium</span>
                <span className="swatch-hex">#6B9440</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#8FB85F' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Light</span>
                <span className="swatch-hex">#8FB85F</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#B8D99B' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Lighter</span>
                <span className="swatch-hex">#B8D99B</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#E5F2D8' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Pale</span>
                <span className="swatch-hex">#E5F2D8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="color-category">
          <h3>Warm Neutrals</h3>
          <div className="color-grid">
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#8B6F47' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Clay Brown</span>
                <span className="swatch-hex">#8B6F47</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#C4A777' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Sand</span>
                <span className="swatch-hex">#C4A777</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#E8D7B8' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Cream</span>
                <span className="swatch-hex">#E8D7B8</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#FFF9F0' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Warm White</span>
                <span className="swatch-hex">#FFF9F0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="color-category">
          <h3>Soft Highlights - Accents</h3>
          <div className="color-grid">
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#E8763F' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Sunset Orange</span>
                <span className="swatch-hex">#E8763F</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#F4B942' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Mango Yellow</span>
                <span className="swatch-hex">#F4B942</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#CC6B49' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Terracotta</span>
                <span className="swatch-hex">#CC6B49</span>
              </div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ background: '#52A39F' }}></div>
              <div className="swatch-info">
                <span className="swatch-name">Sky Teal</span>
                <span className="swatch-hex">#52A39F</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="showcase-section">
        <h2>Typography - Hind Siliguri</h2>
        <div className="typography-demo">
          <div className="type-sample">
            <h1>Heading 1 - শিরোনাম</h1>
            <h2>Heading 2 - উপশিরোনাম</h2>
            <h3>Heading 3 - বিভাগ</h3>
            <h4>Heading 4 - উপবিভাগ</h4>
            <p className="text-lg">
              Large Text - বড় টেক্সট। আপনার ব্যবসার জন্য সহজ এবং বন্ধুত্বপূর্ণ।
            </p>
            <p>
              Body Text - সাধারণ টেক্সট। পড়তে আরামদায়ক এবং স্পষ্ট। 
              এই ফন্টটি বাংলা এবং ইংরেজি উভয়ের জন্য উপযুক্ত।
            </p>
            <p className="text-sm text-muted">
              Small Text - ছোট টেক্সট। সহায়ক তথ্যের জন্য।
            </p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="showcase-section">
        <h2>Buttons</h2>
        <div className="button-demo">
          <button className="btn btn-primary">প্রধান বাটন</button>
          <button className="btn btn-secondary">সাধারণ বাটন</button>
          <button className="btn btn-primary" disabled>নিষ্ক্রিয়</button>
        </div>
      </section>

      {/* Cards */}
      <section className="showcase-section">
        <h2>Cards - Relaxed Spacing</h2>
        <div className="card-demo">
          <div className="card">
            <h3>কার্ড শিরোনাম</h3>
            <p>এটি একটি নমুনা কার্ড। লক্ষ্য করুন কীভাবে স্পেসিং আরামদায়ক এবং ঘিঞ্জি নয়।</p>
            <button className="btn btn-primary">আরও দেখুন</button>
          </div>
          <div className="card">
            <h3>আরেকটি কার্ড</h3>
            <p>উষ্ণ রঙ এবং নরম ছায়া বিশ্বস্ত অনুভূতি তৈরি করে।</p>
            <button className="btn btn-secondary">বিস্তারিত</button>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="showcase-section">
        <h2>Badges</h2>
        <div className="badge-demo">
          <span className="badge badge-success">সফল</span>
          <span className="badge badge-warning">সতর্কতা</span>
          <span className="badge badge-error">ত্রুটি</span>
        </div>
      </section>

      {/* Form Elements */}
      <section className="showcase-section">
        <h2>Form Elements</h2>
        <div className="form-demo">
          <input 
            type="text" 
            className="input" 
            placeholder="আপনার নাম লিখুন..."
          />
          <input 
            type="text" 
            className="input" 
            placeholder="ফোন নম্বর..."
          />
        </div>
      </section>
    </div>
  );
};

export default DesignShowcase;
