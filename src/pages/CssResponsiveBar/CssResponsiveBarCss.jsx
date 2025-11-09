// CssResponsiveBarCss.jsx
import React, { useState } from 'react';
import './CssResponsiveBar.css';

const CssResponsiveBarCss = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyType, setCopyType] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const cssCode = `🎨 CSS کوڈ برائے Responsive Navbar
/* 🎯 یہ حصہ تمام ڈیفالٹ ڈیزائن ری سیٹ (صاف) کرنے کے لیے ہے */

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

/* 🎨 یہ حصہ اصل ڈیزائن شروع کرتا ہے */

.header {
    border-bottom: 1px solid #E2E8F0;
    background-color: #222;
}

.navbar {
    display: flex;
    justify-content: space-between; /* لوگو بائیں، لنکس دائیں طرف */
    align-items: center;
    padding: 1.5rem 1.5rem;
}

.hamburger {
    display: none;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background-color: #fff; /* تین سفید لائنیں */
}

.nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-item {
    margin-left: 5rem;
}

.nav-link {
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
}

.nav-link:hover {
    color: #482ff7; /* Hover کرنے پر نیلا رنگ */
}

.nav-logo {
    font-size: 3rem;
    font-weight: 500;
    color: #fff;
}

/* 📱 موبائل اسکرین کے لیے ریسپانسیو حصہ */
@media only screen and (max-width: 768px) {

    .nav-menu {
        position: fixed;
        left: -100%;  /* شروع میں menu اسکرین سے باہر */
        top: 5rem;
        flex-direction: column;
        background-color: #222;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-link {
        color: #fff;
    }

    .nav-menu.active {
        left: 0; /* جب hamburger دبائیں تو menu اندر آ جائے */
    }

    .nav-item {
        margin: 2.5rem 0;
    }

    .hamburger {
        display: block;
        cursor: pointer; /* ہاتھ والا نشان */
    }

    /* جب hamburger پر کلک کریں تو درمیان والی لائن غائب ہو جاتی ہے */
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    /* اوپر والی لائن گھوم کر ترچھا (X) بناتی ہے */
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    /* نیچے والی لائن بھی ترچھا ہو کر (X) مکمل کرتی ہے */
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
}`;

  const copyCodeToClipboard = (code, type = 'css') => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopyType(type);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setCopyType('');
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy code: ', err);
      });
  };

  const copyCSSCode = () => {
    copyCodeToClipboard(cssCode, 'css');
  };

  return (
    <div className="navbar-container">
      {/* Header */}
      <header className="navbar-header">
        <h1>🎨 CSS Responsive Navbar</h1>
        <p>یہ مکمل CSS کوڈ ہے جو ایک خوبصورت ریسپانسیو نیویگیشن بار بناتا ہے</p>
        
        {/* Confirmation message */}
        {copied && (
          <div className={`confirmation-message ${copyType}`}>
            ✅ CSS کوڈ کاپی ہو گیا!
          </div>
        )}
      </header>

      {/* Demo Navbar */}
      <div className="demo-section">
        <h2>ڈیمو:</h2>
        <div className="demo-navbar-wrapper">
          <header className="header">
            <nav className="navbar">
              <a href="#" className="nav-logo">CuriousZohaib</a>
              <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>Projects</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>Contact</a>
                </li>
              </ul>
              <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </nav>
          </header>
        </div>
      </div>

      {/* CSS Code Display */}
      <div className="code-display">
        <div className="code-header">
          <h2>CSS کوڈ:</h2>
          <button className="copy-button" onClick={copyCSSCode}>
            CSS کاپی کریں
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="code-block">
            {cssCode}
          </pre>
        </div>
      </div>

      {/* Explanation */}
      <div className="explanation">
        <h2>🧠 اردو وضاحت: بچوں کے لیے آسان الفاظ میں</h2>
        <div className="explanation-content">
          <div className="explanation-item">
            <h3>🎯 1. * &#123; margin: 0; padding: 0; &#125;</h3>
            <p>یہ لائنیں ہر HTML عنصر کے اضافی خالی جگہ (margin/padding) کو ختم کرتی ہیں۔
            یعنی سب کچھ بالکل صاف اور برابر سے شروع ہوگا۔</p>
          </div>
          
          <div className="explanation-item">
            <h3>🧩 2. .navbar &#123; display: flex; justify-content: space-between; &#125;</h3>
            <p>Flexbox ایک ایسا جادو ہے جو چیزوں کو ایک لائن میں برابر ترتیب دیتا ہے۔
            justify-content: space-between; کہتا ہے:
            "ایک چیز بالکل بائیں رکھو (logo) اور دوسری بالکل دائیں رکھو (menu links)"</p>
          </div>
          
          <div className="explanation-item">
            <h3>🍔 3. .hamburger اور .bar</h3>
            <p>یہ تین چھوٹی لائنیں ہیں جو موبائل پر menu کے لیے نظر آتی ہیں۔
            ہم نے تین span رکھے، ہر span ایک لائن ہے۔
            ان تینوں کو ملا کر یہ بن جاتا ہے: ≡
            اسے Hamburger Icon کہتے ہیں۔</p>
          </div>
          
          <div className="explanation-item">
            <h3>🪄 4. transform: translateY(8px) rotate(45deg);</h3>
            <p>جب بچہ hamburger پر click کرے گا تو یہ لائن اوپر یا نیچے move کرے گی
            اور تھوڑا rotate بھی ہوگی تاکہ shape "X" جیسی لگے۔
            transform کا مطلب ہوتا ہے "شکل بدلنا"
            اور translateY(8px) کا مطلب ہے "8 pixels نیچے لے جانا"
            جبکہ rotate(45deg) مطلب ہے "45 درجے گھمانا"۔
            مثال: اگر تم کسی کاغذ پر لکیر بناؤ، پھر اسے ہلکا سا جھکا دو —
            یہی rotate کہلاتا ہے۔</p>
          </div>
          
          <div className="explanation-item">
            <h3>💡 5. @media (max-width: 768px)</h3>
            <p>یہ جادوئی rule کہتا ہے:
            "اگر موبائل یا چھوٹی اسکرین ہے، تو نیچے دیا گیا کوڈ استعمال کرو۔"
            اسی لیے desktop پر menu سیدھا نظر آتا ہے
            اور موبائل پر hamburger میں بدل جاتا ہے۔</p>
          </div>
          
          <div className="explanation-item">
            <h3>⚙️ 6. .nav-menu.active</h3>
            <p>جب hamburger دباؤ تو JavaScript اس کلاس کو "active" بنا دیتا ہے۔
            تب left: 0 ہو جاتا ہے، یعنی menu اندر آ جاتا ہے (slide effect)۔</p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="results-section">
        <h2>🌈 نتیجہ</h2>
        <div className="results-content">
          <p>یہ CSS کوڈ ہمیں ایک ایسی Navbar دیتا ہے جو:</p>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">💻</span>
              <span className="feature-text">Desktop پر افقی طور پر نظر آتی ہے</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📱</span>
              <span className="feature-text">Mobile پر hamburger menu میں تبدیل ہوتی ہے</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎨</span>
              <span className="feature-text">خوبصورت hover effects کے ساتھ</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span className="feature-text">تیز رفتار اور smooth animations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <div className="summary-section">
        <h2>🧠 مختصر خلاصہ</h2>
        <div className="summary-table">
          <table>
            <thead>
              <tr>
                <th>CSS پراپرٹی</th>
                <th>مقصد</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>display: flex</code></td>
                <td>عناصر کو ایک لائن میں ترتیب دینا</td>
              </tr>
              <tr>
                <td><code>justify-content: space-between</code></td>
                <td>لوگو اور menu کے درمیان فاصلہ</td>
              </tr>
              <tr>
                <td><code>position: fixed</code></td>
                <td>Mobile menu کو فکسڈ پوزیشن دینا</td>
              </tr>
              <tr>
                <td><code>transform</code></td>
                <td>Hamburger کو X میں تبدیل کرنا</td>
              </tr>
              <tr>
                <td><code>@media (max-width: 768px)</code></td>
                <td>موبائل ڈیوائسز کے لیے responsive design</td>
              </tr>
              <tr>
                <td><code>transition</code></td>
                <td>Smooth animations کے لیے</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CssResponsiveBarCss;