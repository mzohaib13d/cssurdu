// cssposition.jsx
import React, { useState, useRef } from "react";
import "./cssposition.css";

const CSSPosition = () => {
  const [copyConfirm, setCopyConfirm] = useState(false);
  const [activeCode, setActiveCode] = useState("");

  const codeRefs = {
    stickyNavbar: useRef(null),
    absoluteOverlay: useRef(null),
    badgeCount: useRef(null),
    relativeExample: useRef(null),
    absoluteExample: useRef(null),
    fixedExample: useRef(null),
    stickyExample: useRef(null),
    staticExample: useRef(null),
    zindexExample: useRef(null),
  };

  const copyCode = (codeId) => {
    const codeElement = codeRefs[codeId].current;
    if (codeElement) {
      const textToCopy = codeElement.textContent || codeElement.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setActiveCode(codeId);
          setCopyConfirm(true);
          setTimeout(() => {
            setCopyConfirm(false);
            setActiveCode("");
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  return (
    <div className="css-position-container">
      <header className="header">
        <h1>CSS Positioning - Complete Guide</h1>
        <p>ویب پر ہر چیز کو صحیح جگہ بٹھانے کا ماسٹر ٹول</p>
      </header>

      {/* Navigation Buttons */}
      <nav className="navigation-buttons">
        <button
          className="nav-btn"
          onClick={() =>
            document
              .getElementById("position-properties")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{ color: "beige", fontSize: "18px" }}
        >
          📊 Properties
        </button>
        <button
          className="nav-btn"
          onClick={() =>
            document
              .getElementById("offset-properties")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{ color: "beige", fontSize: "18px" }}
        >
          🎯 Offset
        </button>
        <button
          className="nav-btn"
          onClick={() =>
            document
              .getElementById("relative-example")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{ color: "beige", fontSize: "18px" }}
        >
          🟢 Relative
        </button>
        <button
          className="nav-btn"
          onClick={() =>
            document
              .getElementById("absolute-example")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{ color: "beige", fontSize: "18px" }}
        >
          🔴 Absolute
        </button>
        <button
          className="nav-btn"
          onClick={() =>
            document
              .getElementById("fixed-example")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{ color: "beige", fontSize: "18px" }}
        >
          🔵 Fixed
        </button>
        <button
          className="nav-btn"
          onClick={() =>
            document
              .getElementById("sticky-example")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{ color: "beige", fontSize: "18px" }}
        >
          🟡 Sticky
        </button>
        <button
          className="nav-btn"
          onClick={() =>
            document
              .getElementById("zindex-example")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{ color: "beige", fontSize: "18px" }}
        >
          🎭 Z-Index
        </button>
        <button
          className="nav-btn"
          onClick={() =>
            document
              .getElementById("practical-examples")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{ color: "beige", fontSize: "18px" }}
        >
          💡 All Examples
        </button>
        <button
          className="nav-btn"
          onClick={() =>
            document
              .getElementById("final-tips")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{ color: "beige", fontSize: "18px" }}
        >
          🧠 Tips
        </button>
      </nav>

      {/* Copy Confirmation Dialog */}
      {copyConfirm && (
        <div className="copy-confirmation">
          <div className="confirmation-box">
            <span className="tick-mark">✓</span>
            <p>کوڈ کاپی ہو گیا ہے! 🎉</p>
          </div>
        </div>
      )}

      <div className="content-wrapper">
        {/* CSS Position Properties Table */}
        <section className="section" id="position-properties">
          <h2>CSS Position Properties (Complete Guide)</h2>
          <div className="table-container">
            <table className="properties-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Behavior</th>
                  <th>Urdu میں سمجھ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>static</code> (default)
                  </td>
                  <td>Normal document flow follow کرتا ہے</td>
                  <td>جو جگہ ملے، وہی رہو 😄</td>
                </tr>
                <tr>
                  <td>
                    <code>relative</code>
                  </td>
                  <td>اپنی original position سے move ہوتا ہے</td>
                  <td>تھوڑا سا اوپر نیچے… معصوم سا حرکت</td>
                </tr>
                <tr>
                  <td>
                    <code>absolute</code>
                  </td>
                  <td>
                    Flow سے نکل کر nearest positioned parent کے حساب سے set
                  </td>
                  <td>آزاد منش — جس parent کے دل میں رہنا چاہے 😆</td>
                </tr>
                <tr>
                  <td>
                    <code>fixed</code>
                  </td>
                  <td>ہمیشہ viewport کے حساب سے fix</td>
                  <td>Scroll کرو → یہ وہیں</td>
                </tr>
                <tr>
                  <td>
                    <code>sticky</code>
                  </td>
                  <td>Scroll پر behavior بدلتا ہے: کچھ تک relative پھر fix</td>
                  <td>Navbar چمٹ جاتا ہے اوپر 👇</td>
                </tr>
                <tr>
                  <td>
                    <code>inherit</code>
                  </td>
                  <td>Parent سے position copy</td>
                  <td>گھریلو بچہ</td>
                </tr>
                <tr>
                  <td>
                    <code>initial</code>
                  </td>
                  <td>Default static apply</td>
                  <td>واپس پرانی عادت</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Offset Properties */}
        <section className="section" id="offset-properties">
          <h2>Offset Properties</h2>
          <p className="note">(صرف static کے علاوہ باقی میں چلتے ہیں)</p>
          <div className="offset-properties">
            <div className="property-item">
              <code>top</code>
            </div>
            <div className="property-item">
              <code>right</code>
            </div>
            <div className="property-item">
              <code>bottom</code>
            </div>
            <div className="property-item">
              <code>left</code>
            </div>
            <div className="property-item">
              <code>z-index</code> → layers control (کس کے اوپر/نیچے)
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="section" id="practical-examples">
          <h2>Practical Examples with Code</h2>

          {/* Relative Example */}
          <div className="example-card" id="relative-example">
            <h3>🟢 Relative Positioning</h3>
            <p>Element اپنی جگہ سے thoda sa move ہوگا۔</p>
            <div className="code-section">
              <div className="code-header">
                <span>CSS</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCode("relativeExample")}
                >
                  کوڈ کاپی کریں
                </button>
              </div>
              <div className="code-block">
                <pre ref={codeRefs.relativeExample}>
                  {`.box {
  position: relative;
  top: 10px;
  left: 20px;
}`}
                </pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="relative-demo">
                <div className="original-pos">Original Position</div>
                <div className="relative-box">
                  Relative Box (top: 10px, left: 20px)
                </div>
              </div>
            </div>
          </div>

          {/* Absolute Example */}
          <div className="example-card" id="absolute-example">
            <h3>🔴 Absolute Positioning</h3>
            <p>
              یہ .parent کے کونے میں چپک جائے گا۔ اگر parent میں position نہ ہو
              → یہ پوری page (body) کے حساب سے set ہو گا۔
            </p>
            <div className="code-section">
              <div className="code-header">
                <span>CSS</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCode("absoluteExample")}
                >
                  کوڈ کاپی کریں
                </button>
              </div>
              <div className="code-block">
                <pre ref={codeRefs.absoluteExample}>
                  {`.parent {
  position: relative;
}

.box {
  position: absolute;
  top: 0;
  right: 0;
}`}
                </pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="absolute-demo">
                <div className="parent-box">
                  Parent (relative)
                  <div className="absolute-box">
                    Absolute Box (top: 0, right: 0)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Example */}
          <div className="example-card" id="fixed-example">
            <h3>🔵 Fixed Positioning</h3>
            <p>
              Scroll کرو → Button ادھر ہی رہے گا۔ Mostly: Back-to-top button,
              sticky ad, navbar
            </p>
            <div className="code-section">
              <div className="code-header">
                <span>CSS</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCode("fixedExample")}
                >
                  کوڈ کاپی کریں
                </button>
              </div>
              <div className="code-block">
                <pre ref={codeRefs.fixedExample}>
                  {`.btn {
  position: fixed;
  top: 20px;
  right: 20px;
}`}
                </pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="fixed-demo">
                <div className="fixed-box">
                  Fixed Box (top: 20px, right: 20px)
                </div>
                <p>Scroll down to see fixed positioning in action</p>
              </div>
            </div>
          </div>

          {/* Sticky Example */}
          <div className="example-card" id="sticky-example">
            <h3>🟡 Sticky Positioning</h3>
            <p>
              شروع میں relative، Scroll پر fix جیسا۔ Trending for modern navbars
              🚀
            </p>
            <div className="code-section">
              <div className="code-header">
                <span>CSS</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCode("stickyExample")}
                >
                  کوڈ کاپی کریں
                </button>
              </div>
              <div className="code-block">
                <pre ref={codeRefs.stickyExample}>
                  {`.nav {
  position: sticky;
  top: 0;
}`}
                </pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="sticky-demo">
                <div className="sticky-box">Sticky Box (top: 0)</div>
                <div className="scroll-content">
                  <p>Scroll down to see sticky behavior...</p>
                  <div className="content-placeholder"></div>
                  <div className="content-placeholder"></div>
                  <div className="content-placeholder"></div>
                  <div className="content-placeholder"></div>
                  <div className="content-placeholder"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Static Example */}
          <div className="example-card">
            <h3>🧱 Static Positioning (Default)</h3>
            <p>No movement — offset properties ignore</p>
            <div className="code-section">
              <div className="code-header">
                <span>CSS</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCode("staticExample")}
                >
                  کوڈ کاپی کریں
                </button>
              </div>
              <div className="code-block">
                <pre ref={codeRefs.staticExample}>
                  {`p {
  position: static;
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Z-Index Example */}
          <div className="example-card" id="zindex-example">
            <h3>🎭 Z-Index (Layering)</h3>
            <p>10 والا اوپر نظر آئے گا!</p>
            <div className="code-section">
              <div className="code-header">
                <span>CSS</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCode("zindexExample")}
                >
                  کوڈ کاپی کریں
                </button>
              </div>
              <div className="code-block">
                <pre ref={codeRefs.zindexExample}>
                  {`.box1 { 
  z-index: 10; 
}

.box2 { 
  z-index: 5; 
}`}
                </pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="zindex-demo">
                <div className="z-box box-low">z-index: 5</div>
                <div className="z-box box-high">z-index: 10</div>
              </div>
            </div>
          </div>

          {/* Sticky Navbar Example */}
          <div className="example-card">
            <h3>✅ Sticky Navbar Example</h3>
            <p>
              Scroll کرو → Navbar اوپر چپک جائے گا۔ بہت modern websites میں یہی
              تکنیک ہوتی ہے
            </p>
            <div className="code-section">
              <div className="code-header">
                <span>HTML & CSS</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCode("stickyNavbar")}
                >
                  کوڈ کاپی کریں
                </button>
              </div>
              <div className="code-block">
                <pre ref={codeRefs.stickyNavbar}>
                  {`<!DOCTYPE html>
<html lang="en">
<head>
<style>
  body {
    margin: 0;
    font-family: sans-serif;
  }

  .navbar {
    background: #008B8B;
    color: white;
    padding: 15px;
    position: sticky;
    top: 0;
    font-size: 20px;
  }

  .content {
    padding: 20px;
    height: 1200px;
    background: #f4f4f4;
  }
</style>
</head>
<body>

<div class="navbar">Sticky Navbar</div>
<div class="content">
  Scroll down to see the sticky effect 😄
</div>

</body>
</html>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Absolute Overlay Card Example */}
          <div className="example-card">
            <h3>✅ Absolute Overlay Card</h3>
            <p>
              Image پر text یا button overlay — card designs میں بہت چلتا ہے
            </p>
            <div className="code-section">
              <div className="code-header">
                <span>HTML & CSS</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCode("absoluteOverlay")}
                >
                  کوڈ کاپی کریں
                </button>
              </div>
              <div className="code-block">
                <pre ref={codeRefs.absoluteOverlay}>
                  {`<!DOCTYPE html>
<html lang="en">
<head>
<style>
  .card {
    position: relative;
    width: 300px;
    margin: 30px auto;
  }

  .card img {
    width: 100%;
    border-radius: 10px;
  }

  .overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0,0,0,0.6);
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
</style>
</head>
<body>

<div class="card">
  <img src="https://via.placeholder.com/300x200" alt="Image">
  <div class="overlay">Beautiful View 🌅</div>
</div>

</body>
</html>`}
                </pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="card-demo">
                <div className="card">
                  <div className="card-image">📸 Image Placeholder</div>
                  <div className="overlay">Beautiful View 🌅</div>
                </div>
              </div>
            </div>
          </div>

          {/* Badge Count Example */}
          <div className="example-card">
            <h3>✅ Badge Count on Notification Icon</h3>
            <p>
              WhatsApp, Facebook، YouTube — ہر جگہ یہی تکنیک استعمال ہوتی ہے
              🔔❤️🔥
            </p>
            <div className="code-section">
              <div className="code-header">
                <span>HTML & CSS</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCode("badgeCount")}
                >
                  کوڈ کاپی کریں
                </button>
              </div>
              <div className="code-block">
                <pre ref={codeRefs.badgeCount}>
                  {`<!DOCTYPE html>
<html lang="en">
<head>
<style>
  .notification {
    position: relative;
    width: 40px;
    height: 40px;
    background: #ddd;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    margin: 50px auto;
  }

  .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: red;
    color: white;
    font-size: 12px;
    padding: 3px 7px;
    border-radius: 50%;
    font-weight: bold;
    min-width: 20px;
    text-align: center;
  }
</style>
</head>

<body>

<div class="notification">
  🔔
  <span class="badge">5</span>
</div>

</body>
</html>`}
                </pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="badge-demo">
                <div className="notification">
                  🔔
                  <span className="badge">5</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Tips */}
        <section className="section tips-section" id="final-tips">
          <h2>🧠 Final Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>Absolute Positioning</h4>
              <p>Absolute ہمیشہ کسی positioned parent ڈھونڈتا ہے</p>
            </div>
            <div className="tip-card">
              <h4>Fixed Positioning</h4>
              <p>Fixed → viewport کے ساتھ چلتا ہے</p>
            </div>
            <div className="tip-card">
              <h4>Sticky Positioning</h4>
              <p>Sticky → scrolling کے rules پر کام کرتا ہے</p>
            </div>
            <div className="tip-card">
              <h4>Z-Index</h4>
              <p>z-index تب ہی کام کرتا ہے جب position static نہ ہو</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CSSPosition;
