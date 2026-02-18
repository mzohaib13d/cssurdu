import React, { useState, useEffect, useRef } from "react";
import "./CubicBezier.css";

/* =========================
   Reusable Hook
========================= */
function useAnimateOnScroll(threshold = 0.4) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 50); // replay support
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, animate];
}

/* =========================
   Component
========================= */
const CubicBezier = () => {
  const [copiedCode, setCopiedCode] = useState("");
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [cardRef, cardAnimate] = useAnimateOnScroll();
  const [panelRef, panelAnimate] = useAnimateOnScroll();
  const [toastRef, toastAnimate] = useAnimateOnScroll();

  const copyToClipboard = (code, exampleName) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(exampleName);
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 2500);
  };

  return (
    <div className="cubic-bezier-container">
      {/* Copy confirmation message - Urdu Rasm ul Khat, white on green, slides from right */}
      <div className={`copy-message ${showCopyMessage ? 'show' : ''}`}>
        <span>✅ کاپی ہو گیا!</span>
      </div>

      {/* Header */}
      <div className="cubic-header">
        <h1>🧠 Cubic-Bezier() مکمل گائیڈ</h1>
        <p>ماڈرن موشن اور اینیمیشن کے لیے</p>
      </div>

      {/* Section 1 - What is Cubic Bezier */}
      <div className="cubic-section">
        <h2>🧠 1) Cubic Bezier کیا ہے؟</h2>
        <p style={{ fontSize: "16px" }}>
          CSS میں animation یا transition کی رفتار کنٹرول کرنے کے لیے ہم timing-function استعمال کرتے ہیں۔
        </p>
        <p style={{ fontSize: "16px", marginTop: "10px" }}>مثال:</p>
        <div className="code-wrapper">
          <pre><code>transition-timing-function: ease;</code></pre>
          <button 
            className="copy-code-btn"
            onClick={() => copyToClipboard("transition-timing-function: ease;", "example0")}
          >
            📋
          </button>
        </div>
        <p style={{ fontSize: "16px", marginTop: "10px" }}>
          لیکن ease, linear, ease-in-out محدود ہوتے ہیں۔
          <br />
          اگر ہمیں custom motion curve چاہیے تو ہم استعمال کرتے ہیں:
        </p>
        <div className="code-wrapper">
          <pre><code>cubic-bezier(x1, y1, x2, y2)</code></pre>
          <button 
            className="copy-code-btn"
            onClick={() => copyToClipboard("cubic-bezier(x1, y1, x2, y2)", "example1")}
          >
            📋
          </button>
        </div>

        <h3 style={{ marginTop: "25px", fontSize: "22px" }}>📈 یہ چار نمبر کیا ہوتے ہیں؟</h3>
        <p style={{ fontSize: "16px" }}>
          Bezier curve میں:
          <br />
          <strong>x1, y1</strong> = پہلا control point
          <br />
          <strong>x2, y2</strong> = دوسرا control point
        </p>
        <p style={{ fontSize: "16px", marginTop: "10px" }}>
          Graph میں:
          <br />
          X-axis = وقت (0 → 1)
          <br />
          Y-axis = رفتار (slow → fast)
        </p>
        <p style={{ fontSize: "16px", marginTop: "10px" }}>مثال:</p>
        <div className="code-wrapper">
          <pre><code>cubic-bezier(0.4, 0, 0.2, 1)</code></pre>
          <button 
            className="copy-code-btn"
            onClick={() => copyToClipboard("cubic-bezier(0.4, 0, 0.2, 1)", "example2")}
          >
            📋
          </button>
        </div>
        <p style={{ fontSize: "16px", fontStyle: "italic", marginTop: "10px" }}>
          یہ Google Material Design کا مشہور smooth curve ہے۔
        </p>
      </div>

      {/* Section 2 - How to use */}
      <div className="cubic-section">
        <h2>🧪 2) Cubic Bezier کیسے استعمال کریں؟</h2>
        <p style={{ fontSize: "16px" }}>Transition میں:</p>
        <div className="code-wrapper">
          <pre><code>{`.box {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}`}</code></pre>
          <button 
            className="copy-code-btn"
            onClick={() => copyToClipboard(`.box {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}`, "example3")}
          >
            📋
          </button>
        </div>
        <p style={{ fontSize: "16px", marginTop: "15px" }}>Animation میں:</p>
        <div className="code-wrapper">
          <pre><code>{`.box {
  animation: move 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}`}</code></pre>
          <button 
            className="copy-code-btn"
            onClick={() => copyToClipboard(`.box {
  animation: move 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}`, "example4")}
          >
            📋
          </button>
        </div>
      </div>

      {/* Section 3 - Modern Animations */}
      <div className="cubic-section">
        <h2>🎨 3) پانچ Modern Animations (Transform + Cubic Bezier)</h2>
        <p style={{ fontSize: "16px" }}>
          ہم ہر animation میں:
          <br />
          ✔ modern motion
          <br />
          ✔ smooth feel
          <br />
          ✔ real UI usage
        </p>

        {/* Animation 1 - Button Lift */}
        <div className="animation-block">
          <h3>✅ Animation 1: Smooth Button Hover Lift (Modern UI Effect)</h3>
          <p style={{ fontSize: "16px" }}>📌 Effect: بٹن hover پر اوپر اٹھتا ہے جیسے material design card</p>
          
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>HTML</p>
          <div className="code-wrapper">
            <pre><code>{`<button class="btn-lift">Hover Me</button>`}</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard(`<button class="btn-lift">Hover Me</button>`, "anim1-html")}
            >
              📋
            </button>
          </div>

          <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>CSS</p>
          <div className="code-wrapper">
            <pre><code>{`.btn-lift {
  padding: 12px 30px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-lift:hover {
  transform: translateY(-6px);
}`}</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard(`.btn-lift {
  padding: 12px 30px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-lift:hover {
  transform: translateY(-6px);
}`, "anim1-css")}
            >
              📋
            </button>
          </div>

          {/* Live Demo - WORKING */}
          <div className="demo-box">
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>🎯 لائیو ڈیمو (ہوور کریں):</p>
            <button className="demo-btn-lift">Hover Me</button>
          </div>

          <p style={{ fontSize: "16px", marginTop: "10px" }}>
            <strong>🧠 Bezier Explanation:</strong>
            <br />
            <code>cubic-bezier(0.34, 1.56, 0.64, 1)</code>
            <br />
            یہ curve آخر میں bounce feel دیتا ہے — modern micro-interaction کے لیے بہترین۔
          </p>
        </div>

        {/* Animation 2 - Card Pop-In */}
        <div className="animation-block">
          <h3>✅ Animation 2: Card Pop-In (Scale + Fade Entrance)</h3>
          <p style={{ fontSize: "16px" }}>📌 Effect: کارڈ load ہوتے ہی smooth pop کے ساتھ آتا ہے</p>
          
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>HTML</p>
          <div className="code-wrapper">
            <pre><code>{`<div class="card">Modern Card</div>`}</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard(`<div class="card">Modern Card</div>`, "anim2-html")}
            >
              📋
            </button>
          </div>

          <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>CSS</p>
          <div className="code-wrapper">
            <pre><code>{`.card {
  width: 220px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  animation: popIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`}</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard(`.card {
  width: 220px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  animation: popIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`, "anim2-css")}
            >
              📋
            </button>
          </div>

          {/* Live Demo - with scroll animation */}
          <div className="demo-box">
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>🎯 لائیو ڈیمو (اسکرول کریں):</p>
            <div
              ref={cardRef}
              className={`demo-card ${cardAnimate ? "animate" : ""}`}
            >
              Modern Card
            </div>
          </div>

          <p style={{ fontSize: "16px", marginTop: "10px" }}>
            <strong>🧠 Bezier:</strong>
            <br />
            <code>cubic-bezier(0.16, 1, 0.3, 1)</code>
            <br />
            یہ curve start میں slow اور آخر میں fast stop دیتا ہے — natural motion۔
          </p>
        </div>

        {/* Animation 3 - Slide In From Left */}
        <div className="animation-block">
          <h3>✅ Animation 3: Slide In From Left (Sidebar / Modal Style)</h3>
          <p style={{ fontSize: "16px" }}>📌 Effect: عنصر بائیں طرف سے smooth slide کے ساتھ آتا ہے</p>
          
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>HTML</p>
          <div className="code-wrapper">
            <pre><code>{`<div class="panel">Menu Panel</div>`}</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard(`<div class="panel">Menu Panel</div>`, "anim3-html")}
            >
              📋
            </button>
          </div>

          <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>CSS</p>
          <div className="code-wrapper">
            <pre><code>{`.panel {
  width: 200px;
  padding: 20px;
  background: #0f172a;
  color: white;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  animation: slideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes slideIn {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(0);
  }
}`}</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard(`.panel {
  width: 200px;
  padding: 20px;
  background: #0f172a;
  color: white;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  animation: slideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes slideIn {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(0);
  }
}`, "anim3-css")}
            >
              📋
            </button>
          </div>

          {/* Live Demo - with scroll animation */}
          <div className="demo-box">
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>🎯 لائیو ڈیمو (اسکرول کریں):</p>
            <div
              ref={panelRef}
              className={`demo-panel ${panelAnimate ? "animate" : ""}`}
            >
              Menu Panel
            </div>
          </div>

          <p style={{ fontSize: "16px", marginTop: "10px" }}>
            <strong>🧠 Bezier:</strong>
            <br />
            <code>cubic-bezier(0.22, 1, 0.36, 1)</code>
            <br />
            یہ curve fast entry + smooth landing دیتا ہے — drawer menus میں عام ہے۔
          </p>
        </div>

        {/* Animation 4 - Elastic Hover Stretch */}
        <div className="animation-block">
          <h3>✅ Animation 4: Elastic Hover Stretch (Fun Modern UI)</h3>
          <p style={{ fontSize: "16px" }}>📌 Effect: hover پر عنصر تھوڑا stretch ہو کر واپس آتا ہے</p>
          
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>HTML</p>
          <div className="code-wrapper">
            <pre><code>{`<div class="elastic-box">Hover Me</div>`}</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard(`<div class="elastic-box">Hover Me</div>`, "anim4-html")}
            >
              📋
            </button>
          </div>

          <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>CSS</p>
          <div className="code-wrapper">
            <pre><code>{`.elastic-box {
  width: 160px;
  height: 60px;
  background: #22c55e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: bold;
  transition: transform 0.45s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.elastic-box:hover {
  transform: scale(1.08);
}`}</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard(`.elastic-box {
  width: 160px;
  height: 60px;
  background: #22c55e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: bold;
  transition: transform 0.45s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.elastic-box:hover {
  transform: scale(1.08);
}`, "anim4-css")}
            >
              📋
            </button>
          </div>

          {/* Live Demo - WORKING (hover to see elastic effect) */}
          <div className="demo-box">
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>🎯 لائیو ڈیمو (ہوور کریں):</p>
            <div className="demo-elastic-box">Hover Me</div>
          </div>

          <p style={{ fontSize: "16px", marginTop: "10px" }}>
            <strong>🧠 Bezier:</strong>
            <br />
            <code>cubic-bezier(0.68, -0.6, 0.32, 1.6)</code>
            <br />
            یہ overshoot curve ہے — elastic/bouncy feel کے لیے استعمال ہوتا ہے۔
          </p>
        </div>

        {/* Animation 5 - Floating Notification Drop */}
        <div className="animation-block">
          <h3>✅ Animation 5: Floating Notification Drop</h3>
          <p style={{ fontSize: "16px" }}>📌 Effect: notification اوپر سے smooth drop ہو کر settle ہوتا ہے</p>
          
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>HTML</p>
          <div className="code-wrapper">
            <pre><code>{`<div class="toast">Saved Successfully ✅</div>`}</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard(`<div class="toast">Saved Successfully ✅</div>`, "anim5-html")}
            >
              📋
            </button>
          </div>

          <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>CSS</p>
          <div className="code-wrapper">
            <pre><code>{`.toast {
  width: 260px;
  padding: 14px;
  background: #111827;
  color: white;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 10px 15px -5px black;
  animation: drop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes drop {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  70% {
    transform: translateY(5px);
    opacity: 0.9;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}`}</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard(`.toast {
  width: 260px;
  padding: 14px;
  background: #111827;
  color: white;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 10px 15px -5px black;
  animation: drop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes drop {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  70% {
    transform: translateY(5px);
    opacity: 0.9;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}`, "anim5-css")}
            >
              📋
            </button>
          </div>

          {/* Live Demo - with scroll animation */}
          <div className="demo-box">
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>🎯 لائیو ڈیمو (اسکرول کریں):</p>
            <div
              ref={toastRef}
              className={`demo-toast ${toastAnimate ? "animate" : ""}`}
            >
              Saved Successfully ✅
            </div>
          </div>

          <p style={{ fontSize: "16px", marginTop: "10px" }}>
            <strong>🧠 Bezier:</strong>
            <br />
            <code>cubic-bezier(0.34, 1.56, 0.64, 1)</code>
            <br />
            یہ curve آخر میں soft bounce settle دیتا ہے — toast notifications میں بہترین۔
          </p>
        </div>
      </div>

      {/* Section 4 - Quick Formula */}
      <div className="cubic-section">
        <h2>🧩 4) Cubic Bezier Curves یاد رکھنے کا آسان فارمولا</h2>
        
        <table className="bezier-table">
          <thead>
            <tr>
              <th>Effect</th>
              <th>Bezier</th>
              <th>Copy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Smooth Material Motion</td>
              <td><code>cubic-bezier(0.4, 0, 0.2, 1)</code></td>
              <td>
                <button 
                  className="copy-small"
                  onClick={() => copyToClipboard("cubic-bezier(0.4, 0, 0.2, 1)", "ref1")}
                >
                  📋
                </button>
              </td>
            </tr>
            <tr>
              <td>Bounce / Elastic</td>
              <td><code>cubic-bezier(0.34, 1.56, 0.64, 1)</code></td>
              <td>
                <button 
                  className="copy-small"
                  onClick={() => copyToClipboard("cubic-bezier(0.34, 1.56, 0.64, 1)", "ref2")}
                >
                  📋
                </button>
              </td>
            </tr>
            <tr>
              <td>Fast Entry Smooth Stop</td>
              <td><code>cubic-bezier(0.22, 1, 0.36, 1)</code></td>
              <td>
                <button 
                  className="copy-small"
                  onClick={() => copyToClipboard("cubic-bezier(0.22, 1, 0.36, 1)", "ref3")}
                >
                  📋
                </button>
              </td>
            </tr>
            <tr>
              <td>Pop / Emphasis</td>
              <td><code>cubic-bezier(0.16, 1, 0.3, 1)</code></td>
              <td>
                <button 
                  className="copy-small"
                  onClick={() => copyToClipboard("cubic-bezier(0.16, 1, 0.3, 1)", "ref4")}
                >
                  📋
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 5 - Beginner Rule */}
      <div className="cubic-section">
        <h2>🎓 5) Beginner-Friendly Rule</h2>
        <p style={{ fontSize: "16px" }}>
          اگر آپ confused ہوں:
        </p>
        <div className="rule-box">
          <p>✅ Buttons / UI hover:</p>
          <div className="code-wrapper">
            <pre><code>cubic-bezier(0.4, 0, 0.2, 1)</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard("cubic-bezier(0.4, 0, 0.2, 1)", "rule1")}
            >
              📋
            </button>
          </div>
          
          <p>✅ Cards / Modals / Toasts:</p>
          <div className="code-wrapper">
            <pre><code>cubic-bezier(0.22, 1, 0.36, 1)</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard("cubic-bezier(0.22, 1, 0.36, 1)", "rule2")}
            >
              📋
            </button>
          </div>
          
          <p>✅ Fun elastic effects:</p>
          <div className="code-wrapper">
            <pre><code>cubic-bezier(0.34, 1.56, 0.64, 1)</code></pre>
            <button 
              className="copy-code-btn"
              onClick={() => copyToClipboard("cubic-bezier(0.34, 1.56, 0.64, 1)", "rule3")}
            >
              📋
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="cubic-footer">
        <p>🌸 یہ ٹیوٹوریل beginners اور intermediates کے لیے تیار کیا گیا ہے</p>
        <p>Cubic-Bezier ماڈرن موشن کی مکمل سمجھ کے ساتھ!</p>
      </div>
    </div>
  );
};

export default CubicBezier;