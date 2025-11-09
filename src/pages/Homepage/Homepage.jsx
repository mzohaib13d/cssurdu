import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    // Navigate to CSS Background chapter
    navigate('/css-background');
  };

  const handleLearnAnimations = () => {
    // Open external CSS Animations website in new tab
    window.open('https://cssanimations01.web.app', '_blank');
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>CSS اردو ٹیوٹوریلز میں خوش آمدید</h1>
          <p>مکمل CSS سیکھیں اردو زبان میں - بنیادیں سے لے کر ایڈوانسڈ تک</p>
          <div className="hero-buttons">
            <button className="cta-button primary" onClick={handleStartLearning}>
              ابھی شروع کریں
            </button>
            <button className="cta-button secondary" onClick={handleLearnAnimations}>
              CSS Animations
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="code-content">
              <span className="code-comment">/* CSS اردو میں */</span>
              <span className="code-selector">.عنصر</span> {'{'}
              <span className="code-property">  پس-منظر: #667eea;</span>
              <span className="code-property">  رنگ: سفید;</span>
              <span className="code-property">  حاشیہ: 1rem;</span>
              {'}'}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>کیوں سیکھیں CSS ہمارے ساتھ؟</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>عمودی طریقہ</h3>
              <p>عملی مثالوں کے ساتھ step-by-step سیکھیں</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>رسپانسیو ڈیزائن</h3>
              <p>موبائل فرسٹ اپروچ کے ساتھ</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>جدید ترین</h3>
              <p>تازہ ترین CSS فیچرز کا احاطہ</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3>اردو زبان</h3>
              <p>مادری زبان میں بہتر سمجھ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;