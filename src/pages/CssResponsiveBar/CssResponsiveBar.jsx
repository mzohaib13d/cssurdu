// CssResponsiveBar.jsx
import React, { useState } from 'react';
import './CssResponsiveBar.css';

const CssResponsiveBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyType, setCopyType] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const htmlCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zohaib Farooq Responsive Navbar</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="header">
      <nav class="navbar">
        <a href="#" class="nav-logo">CuriousZohaib</a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
    <script src="script.js"></script>
  </body>
</html>`;

  const copyCodeToClipboard = (code, type = 'full') => {
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

  const copyHTMLCode = () => {
    copyCodeToClipboard(htmlCode, 'html');
  };

  return (
    <div className="navbar-container">
      {/* Header */}
      <header className="navbar-header">
        <h1>Responsive Navbar</h1>
        <p>یہ ایک مکمل ریسپانسیو نیویگیشن بار ہے جو موبائل اور ڈیسکٹاپ دونوں پر کام کرتی ہے۔</p>
        
        {/* Confirmation message */}
        {copied && (
          <div className={`confirmation-message ${copyType}`}>
            ✅ {copyType === 'html' ? 'HTML کوڈ کاپی ہو گیا!' : 'کوڈ کاپی ہو گیا!'}
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

      {/* Code Display */}
      <div className="code-display">
        <div className="code-header">
          <h2>HTML کوڈ:</h2>
          <button className="copy-button" onClick={copyHTMLCode}>
            کوڈ کاپی کریں
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="code-block">
            {htmlCode}
          </pre>
        </div>
      </div>

      {/* Explanation */}
      <div className="explanation">
        <h2>کوڈ کی وضاحت:</h2>
        <div className="explanation-content">
          <div className="explanation-item">
            <h3>🏷️ 1. header اور nav کیا کرتے ہیں؟</h3>
            <p>&lt;header&gt; ویب سائٹ کے اوپر والے حصے کو ظاہر کرتا ہے — یعنی وہ حصہ جو ہر پیج پر سب سے اوپر ہوتا ہے۔
            &lt;nav&gt; کے اندر وہ تمام لنکس ہوتے ہیں جن پر کلک کر کے ہم مختلف پیجز پر جا سکتے ہیں۔</p>
          </div>
          
          <div className="explanation-item">
            <h3>📚 2. ul اور li کیوں استعمال ہوئے؟</h3>
            <p>&lt;ul&gt; کا مطلب ہے Unordered List (یعنی ایک ایسی فہرست جس میں پوائنٹس یا bullets ہوتے ہیں)
            &lt;li&gt; ہر ایک List Item ہے — جیسے ہر ایک لنک ایک الگ لائن میں۔</p>
            <p>ہم نے &lt;ul&gt; کو class="nav-menu" دی ہے تاکہ ہم اسے CSS اور JavaScript سے آسانی سے کنٹرول کر سکیں۔</p>
          </div>
          
          <div className="explanation-item">
            <h3>🔗 3. href="#" کا مطلب کیا ہے؟</h3>
            <p>href وہ جگہ ہوتی ہے جہاں لنک کلک کرنے پر ہمیں لے جائے۔
            لیکن چونکہ یہ صرف ڈیزائن کا حصہ ہے (ابھی کوئی اصلی صفحہ نہیں بنایا گیا)،
            اس لیے ہم نے href="#" لکھ دیا ہے۔</p>
          </div>
          
          <div className="explanation-item">
            <h3>🧩 4. سب anchor tags (&lt;a&gt;) میں ایک ہی class کیوں ہے؟</h3>
            <p>سب لنکس کو ہم نے class="nav-link" دی ہے تاکہ CSS میں ایک ہی rule سب پر لاگو ہو۔
            مثلاً، اگر ہم کہنا چاہیں: "تمام لنکس کا رنگ سفید ہو، hover کرنے پر نیلا ہو"
            تو ہمیں بار بار ہر لنک کے لیے الگ code نہیں لکھنا پڑے گا —
            بس <code>.nav-link &#123; color: white; &#125;</code> لکھنے سے سب کا اسٹائل ایک جیسا ہو جائے گا۔</p>
          </div>
          
          <div className="explanation-item">
            <h3>🍔 5. Hamburger کیا ہے؟</h3>
            <p>جب ہم موبائل پر ویب سائٹ کھولتے ہیں، تو پوری menu نظر نہیں آتی —
            اس کی جگہ تین لائنوں والا چھوٹا سا icon نظر آتا ہے۔
            اسی کو Hamburger Menu کہتے ہیں 🍔</p>
            <p>یہ تین لائنیں &lt;span class="bar"&gt;&lt;/span&gt; سے بنائی گئی ہیں۔
            یہاں ہر &lt;span&gt; ایک بار (لائن) دکھاتا ہے۔
            ہم نے تین span اس لیے رکھے تاکہ تین افقی لائنیں (≡) بنیں۔</p>
          </div>
          
          <div className="explanation-item">
            <h3>⚙️ 6. JavaScript کیوں استعمال ہوا؟</h3>
            <p>آخر میں یہ line ہے: &lt;script src="script.js"&gt;&lt;/script&gt;</p>
            <p>یہ line ہماری HTML کو JavaScript فائل سے جوڑتی ہے۔
            اسی script.js میں ہم لکھیں گے کہ جب user hamburger پر click کرے تو
            menu slide in ہو یا slide out ہو جائے۔</p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="results-section">
        <h2>🌈 نتیجہ</h2>
        <div className="results-content">
          <p>یہ مکمل کوڈ ہمیں ایک ایسی Navbar دیتا ہے جو:</p>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">💻</span>
              <span className="feature-text">Laptop پر horizontally (افقی طور پر) نظر آتی ہے۔</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📱</span>
              <span className="feature-text">Mobile پر چھپ جاتی ہے اور hamburger کے ذریعے کھلتی ہے۔</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span className="feature-text">CSS سے خوبصورت بنائی جا سکتی ہے۔</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚙️</span>
              <span className="feature-text">JavaScript سے قابلِ حرکت (interactive) ہو جاتی ہے۔</span>
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
                <th>حصہ</th>
                <th>مقصد</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>&lt;ul class="nav-menu"&gt;</code></td>
                <td>Menu کو CSS/JS سے کنٹرول کرنے کے لیے</td>
              </tr>
              <tr>
                <td><code>href="#"</code></td>
                <td>فرضی لنک، کہیں نہیں لے جاتا</td>
              </tr>
              <tr>
                <td><code>class="nav-link"</code></td>
                <td>تمام لنکس پر ایک جیسا اسٹائل</td>
              </tr>
              <tr>
                <td><code>&lt;span class="bar"&gt;&lt;/span&gt;</code></td>
                <td>Hamburger کی تین لائنیں</td>
              </tr>
              <tr>
                <td><code>JavaScript (script.js)</code></td>
                <td>Hamburger click پر menu کھولنے/بند کرنے کا کام</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CssResponsiveBar;