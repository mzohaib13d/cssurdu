// CssResponsiveBarJs.jsx
import React, { useState } from "react";
import "./CssResponsiveBar.css";

const CssResponsiveBarJs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyType, setCopyType] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const javascriptCode = `// script.js
// 🧠 یہ کوڈ موبائل پر hamburger menu (تین لائنوں والا بٹن) کھولنے اور بند کرنے کے لیے ہے۔

// سب سے پہلے ہم HTML سے وہ دو چیزیں پکڑ رہے ہیں:
// 1️⃣ hamburger بٹن
// 2️⃣ nav menu (جس میں Home, About وغیرہ لنکس ہیں)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// جب hamburger بٹن پر کلک کیا جائے تو mobileMenu نام والا function چلاؤ
hamburger.addEventListener("click", mobileMenu);

// یہ function menu کو کھولنے یا بند کرنے کا کام کرتا ہے
function mobileMenu() {
    // اگر class "active" لگی ہے تو ہٹا دو، نہیں لگی تو لگا دو
    // اس سے menu ایک کلک پر کھلتا ہے، اور دوسرے کلک پر بند ہوتا ہے
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// 🔹 اب دوسرا حصہ 🔹
// جب ہم کسی link پر کلک کریں (مثلاً Home, About, Contact وغیرہ)
// تو menu خود بخود بند ہو جائے

// سب navigation links پکڑ لو جن کی class "nav-link" ہے
const navLink = document.querySelectorAll(".nav-link");

// forEach ایک ایک link کو الگ الگ دیکھتا ہے اور سب پر click والا کام لگاتا ہے
// بچوں کے لیے سمجھو: جیسے پانچ دوست ہوں، سب کو ایک ایک کر کے "سلام" کہنا 🙂
navLink.forEach(n => n.addEventListener("click", closeMenu));

// یہ function menu کو بند کرنے کے لیے ہے
function closeMenu() {
    // "active" class ہٹا دو تاکہ menu بند ہو جائے
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// ✨ خلاصہ:
// ✅ hamburger پر کلک → menu کھلے یا بند ہو
// ✅ کسی link پر کلک → menu بند ہو جائے`;

  const copyCodeToClipboard = (code, type = "javascript") => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopyType(type);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setCopyType("");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  };

  const copyJSCode = () => {
    copyCodeToClipboard(javascriptCode, "javascript");
  };

  return (
    <div className="navbar-container">
      {/* Header */}
      <header className="navbar-header">
        <h1>⚡ JavaScript Responsive Navbar</h1>
        <p>
          یہ مکمل JavaScript کوڈ ہے جو hamburger menu کو interactive بناتا ہے
        </p>

        {/* Confirmation message */}
        {copied && (
          <div className={`confirmation-message ${copyType}`}>
            ✅ JavaScript کوڈ کاپی ہو گیا!
          </div>
        )}
      </header>

      {/* Demo Navbar */}
      <div className="demo-section">
        <h2>ڈیمو:</h2>
        <div className="demo-navbar-wrapper">
          <header className="header">
            <nav className="navbar">
              <a href="#" className="nav-logo">
                CuriousZohaib
              </a>
              <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>
                    Contact
                  </a>
                </li>
              </ul>
              <div
                className={`hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </nav>
          </header>
        </div>
      </div>

      {/* JavaScript Code Display */}
      <div className="code-display">
        <div className="code-header">
          <h2>JavaScript کوڈ (script.js):</h2>
          <button className="copy-button" onClick={copyJSCode}>
            JavaScript کاپی کریں
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="code-block">{javascriptCode}</pre>
        </div>
      </div>

      {/* Explanation */}
      <div className="explanation">
        <h2>🧠 مکمل آسان وضاحت (اردو رسم الخط میں)</h2>
        <div className="explanation-content">
          <div className="explanation-item">
            <h3>🔹 پہلی دو لائنیں:</h3>
            <p>
              <code>
                const hamburger = document.querySelector(".hamburger");
              </code>
              <br />
              <code>const navMenu = document.querySelector(".nav-menu");</code>
            </p>
            <p>
              <strong>سمجھاؤ:</strong>
              <br />
              document.querySelector کا مطلب ہے: جاؤ صفحے میں جا کر وہ element
              تلاش کرو جس کی class "hamburger" یا "nav-menu" ہے۔
              <br />
              پہلا variable hamburger اُس بٹن کو رکھتا ہے جس پر کلک کرنا ہے۔
              <br />
              دوسرا variable navMenu اُس پورے menu کو رکھتا ہے جو دکھایا یا
              چھپایا جاتا ہے۔
            </p>
          </div>

          <div className="explanation-item">
            <h3>🔹 اب اگلی لائن:</h3>
            <p>
              <code>hamburger.addEventListener("click", mobileMenu);</code>
            </p>
            <p>
              <strong>سمجھاؤ:</strong>
              <br />
              addEventListener کا مطلب ہے: جب بھی کوئی خاص "event" ہو (جیسے
              "click"), تو کوئی کام کرو۔
              <br />
              یہاں ہم کہہ رہے ہیں: "جب hamburger بٹن پر کلک ہو، تو mobileMenu
              نام والا function چلاؤ۔"
            </p>
          </div>

          <div className="explanation-item">
            <h3>🔹 Function کی تعریف:</h3>
            <p>
              <code>function mobileMenu() &#123;</code>
              <br />
              <code>&nbsp;&nbsp;hamburger.classList.toggle("active");</code>
              <br />
              <code>&nbsp;&nbsp;navMenu.classList.toggle("active");</code>
              <br />
              <code>&#125;</code>
            </p>
            <p>
              <strong>سمجھاؤ:</strong>
              <br />
              function ایک چھوٹا سا "کام کرنے والا بلاک" ہوتا ہے۔
              <br />
              یہاں mobileMenu() وہ کام ہے جو کلک پر ہوتا ہے۔
              <br />
              .classList.toggle("active") کا مطلب ہے: اگر "active" class لگی
              ہوئی ہے تو ہٹا دو، اور اگر نہیں لگی تو لگا دو۔
              <br />
              یعنی ایک کلک پر مینو کھل جاتا ہے، دوسرے کلک پر بند ہو جاتا ہے۔
            </p>
          </div>

          <div className="explanation-item">
            <h3>🔹 اب دوسرا حصہ:</h3>
            <p>
              <code>
                const navLink = document.querySelectorAll(".nav-link");
              </code>
            </p>
            <p>
              <strong>سمجھاؤ:</strong>
              <br />
              querySelectorAll سب elements ڈھونڈتا ہے جن کی class "nav-link" ہے۔
              <br />
              مطلب: نیوی گیشن کے ہر لنک کو لے آؤ — مثلاً Home, About, Contact
              وغیرہ۔
              <br />
              یہ ہمیں links کی ایک لسٹ دیتا ہے۔
            </p>
          </div>

          <div className="explanation-item">
            <h3>🔹 ہر link پر کلک سننے والا کام:</h3>
            <p>
              <code>
                navLink.forEach(n =&gt; n.addEventListener("click", closeMenu));
              </code>
            </p>
            <p>
              <strong>سمجھاؤ:</strong>
              <br />
              forEach ایک طریقہ ہے جس سے ہم لسٹ کے ہر item پر الگ الگ کوئی کام
              کر سکتے ہیں۔
              <br />
              بچوں کے لیے آسان مثال: جیسے تمہارے پاس پانچ دوستوں کے نام ہوں، تو
              forEach کا مطلب ہے "ہر دوست کو ایک ایک کر کے سلام کہنا" 😊
              <br />
              یہاں ہر "nav link" پر ایک "click" سننے والا کام لگایا گیا ہے۔ جب
              کوئی بھی لنک کلک ہو، تو closeMenu() چلے۔
            </p>
          </div>

          <div className="explanation-item">
            <h3>🔹 آخری function:</h3>
            <p>
              <code>function closeMenu() &#123;</code>
              <br />
              <code>&nbsp;&nbsp;hamburger.classList.remove("active");</code>
              <br />
              <code>&nbsp;&nbsp;navMenu.classList.remove("active");</code>
              <br />
              <code>&#125;</code>
            </p>
            <p>
              <strong>سمجھاؤ:</strong>
              <br />
              یہ function "active" class کو ہٹا دیتا ہے۔
              <br />
              مطلب: جب ہم کسی لنک پر کلک کریں، تو مینو بند ہو جائے۔
            </p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="results-section">
        <h2>🌈 نتیجہ</h2>
        <div className="results-content">
          <p>یہ JavaScript کوڈ ہمیں ایک ایسی Navbar دیتا ہے جو:</p>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span className="feature-text">
                Hamburger پر کلک سے menu کھلتا/بند ہوتا ہے
              </span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span className="feature-text">
                کسی بھی لنک پر کلک کرنے سے menu خود بند ہو جاتا ہے
              </span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔄</span>
              <span className="feature-text">
                Smooth animations کے ساتھ کام کرتا ہے
              </span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📱</span>
              <span className="feature-text">
                موبائل ڈیوائسز پر بہترین کام کرتا ہے
              </span>
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
                <th>JavaScript فنکشن</th>
                <th>مقصد</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>document.querySelector</code>
                </td>
                <td>HTML elements کو select کرنا</td>
              </tr>
              <tr>
                <td>
                  <code>addEventListener</code>
                </td>
                <td>کلک جیسے events کو سننا</td>
              </tr>
              <tr>
                <td>
                  <code>classList.toggle</code>
                </td>
                <td>Class کو شامل/ہٹانا (toggle)</td>
              </tr>
              <tr>
                <td>
                  <code>classList.remove</code>
                </td>
                <td>Class کو ہٹانا</td>
              </tr>
              <tr>
                <td>
                  <code>forEach</code>
                </td>
                <td>ہر item پر الگ الگ کام کرنا</td>
              </tr>
              <tr>
                <td>
                  <code>querySelectorAll</code>
                </td>
                <td>سب elements کو ایک ساتھ select کرنا</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CssResponsiveBarJs;
