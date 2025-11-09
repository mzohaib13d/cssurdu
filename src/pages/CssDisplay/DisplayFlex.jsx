import React, { useState } from 'react';
import './displayFlex.css';

const DisplayFlex = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [showCopyConfirm, setShowCopyConfirm] = useState(false);

  const copyToClipboard = (code, exampleName) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(exampleName);
    setShowCopyConfirm(true);
    setTimeout(() => {
      setShowCopyConfirm(false);
      setCopiedCode('');
    }, 2000);
  };

 

  return (
    <div className="css-display-container">
      {/* Copy Confirmation Message */}
      {showCopyConfirm && (
        <div className="copy-confirmation">
          <div className="confirmation-box">
            <span className="tick-mark">✓</span>
            <p className="urdu-text">کوڈ کاپی ہو گیا ہے! 🎉</p>
          </div>
        </div>
      )}

 {/* COMPREHENSIVE FLEXBOX SECTION - ENHANCED WITH CODE DEMOS */}
      <section className="flexbox-comprehensive">
        <h2>🎯 CSS Flexbox - مکمل گائیڈ</h2>

        {/* Flexbox Introduction */}
        <div className="explanation-section">
          <h3>💡 Display: Flex کیا ہے؟</h3>
          <p>
            <strong>display: flex</strong> ایک CSS property ہے جو کسی container
            (یعنی باکس) کے اندر موجود elements کو لائن میں لانے، برابر جگہ دینے،
            سینٹر کرنے وغیرہ کے لیے استعمال کی جاتی ہے۔
          </p>
          <p>
            یہ صفحے پر چیزوں کو سیدھا اور منظم انداز میں لگانے میں مدد دیتی ہے۔
          </p>
        </div>

        {/* Basic Flex Example */}
        <div className="example-section">
          <h3>🎨 Step 1: Basic Example (سیدھی لائن میں رنگین باکسز)</h3>
          <div className="code-section">
            <div className="code-header">
              <span>HTML & CSS</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    `<!DOCTYPE html>\n<html lang="ur">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Flex Example</title>\n<style>\n.container {\n  display: flex; /* ← یہ لائن سب کچھ لائن میں لے آتی ہے */\n  background-color: lightgray;\n  padding: 20px;\n}\n\n.box {\n  width: 100px;\n  height: 100px;\n  color: white;\n  font-weight: bold;\n  display: flex;\n  align-items: center;   /* عمودی سینٹر */\n  justify-content: center; /* افقی سینٹر */\n  margin: 5px;\n  border-radius: 10px;\n}\n\n.red { background-color: red; }\n.green { background-color: green; }\n.blue { background-color: blue; }\n.orange { background-color: orange; }\n.purple { background-color: purple; }\n</style>\n</head>\n<body>\n<h2>🎨 Display: Flex Example</h2>\n<div class="container">\n  <div class="box red">1</div>\n  <div class="box green">2</div>\n  <div class="box blue">3</div>\n  <div class="box orange">4</div>\n  <div class="box purple">5</div>\n</div>\n</body>\n</html>`,
                    "flex-basic"
                  )
                }
              >
                {copiedCode === "flex-basic" ? "✔ کاپی" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block">
              <pre>{`<!DOCTYPE html>
<html lang="ur">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flex Example</title>
<style>
.container {
  display: flex; /* ← یہ لائن سب کچھ لائن میں لے آتی ہے */
  background-color: lightgray;
  padding: 20px;
}

.box {
  width: 100px;
  height: 100px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;   /* عمودی سینٹر */
  justify-content: center; /* افقی سینٹر */
  margin: 5px;
  border-radius: 10px;
}

.red { background-color: red; }
.green { background-color: green; }
.blue { background-color: blue; }
.orange { background-color: orange; }
.purple { background-color: purple; }
</style>
</head>
<body>
<h2>🎨 Display: Flex Example</h2>
<div class="container">
  <div class="box red">1</div>
  <div class="box green">2</div>
  <div class="box blue">3</div>
  <div class="box orange">4</div>
  <div class="box purple">5</div>
</div>
</body>
</html>`}</pre>
            </div>
          </div>
          <div className="demo-container">
            <div className="live-demo">
              <div
                style={{
                  display: "flex",
                  backgroundColor: "lightgray",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "red",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "5px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "green",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "5px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "blue",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "5px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  3
                </div>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "orange",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "5px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  4
                </div>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "purple",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "5px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  5
                </div>
              </div>
            </div>
            <div className="demo-explanation">
              <p>
                <strong>🧠 نتیجہ:</strong> تمام باکسز ایک ہی لائن میں آ جائیں گے
                — یہ display: flex کا پہلا کمال ہے۔
              </p>
            </div>
          </div>
        </div>

        {/* Flex Direction Examples */}
        <div className="example-section">
          <h3>🧭 Step 2: Flex کی اہم Types (سمتیں اور ترتیب)</h3>

          <div className="comparison-section">
            <div className="table-container">
              <table className="scrollable-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                    <th>Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>flex-direction: row</code>
                    </td>
                    <td>باکسز کو بائیں سے دائیں رکھتا ہے (default)</td>
                    <td>→ → →</td>
                  </tr>
                  <tr>
                    <td>
                      <code>flex-direction: column</code>
                    </td>
                    <td>باکسز کو اوپر سے نیچے رکھتا ہے</td>
                    <td>↓ ↓ ↓</td>
                  </tr>
                  <tr>
                    <td>
                      <code>flex-direction: row-reverse</code>
                    </td>
                    <td>باکسز کو دائیں سے بائیں رکھتا ہے</td>
                    <td>← ← ←</td>
                  </tr>
                  <tr>
                    <td>
                      <code>flex-direction: column-reverse</code>
                    </td>
                    <td>باکسز کو نیچے سے اوپر رکھتا ہے</td>
                    <td>↑ ↑ ↑</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Flex Direction Live Demo */}
          <div className="demo-container">
            <h4>🎯 Live Flex Directions Demo</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              {/* Row */}
              <div>
                <h5>1️⃣ flex-direction: row (بائیں سے دائیں)</h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#e0e0e0",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "red",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "2px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    1
                  </div>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "green",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "2px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </div>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "blue",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "2px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    3
                  </div>
                </div>
                <div className="code-section">
                  <div className="code-header">
                    <span>CSS Code</span>
                    <button
                      className="copy-btn"
                      onClick={() =>
                        copyToClipboard(
                          ".container {\n  display: flex;\n  flex-direction: row; /* Default value */\n}",
                          "flex-row"
                        )
                      }
                    >
                      {copiedCode === "flex-row" ? "✔ کاپی" : "📋 کاپی کریں"}
                    </button>
                  </div>
                  <div className="code-block">
                    <pre>{`.container {
  display: flex;
  flex-direction: row; /* Default value */
}`}</pre>
                  </div>
                </div>
              </div>

              {/* Column */}
              <div>
                <h5>2️⃣ flex-direction: column (اوپر سے نیچے)</h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#e0e0e0",
                    padding: "10px",
                    borderRadius: "8px",
                    width: "100px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "red",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "2px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    1
                  </div>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "green",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "2px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </div>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "blue",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "2px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    3
                  </div>
                </div>
                <div className="code-section">
                  <div className="code-header">
                    <span>CSS Code</span>
                    <button
                      className="copy-btn"
                      onClick={() =>
                        copyToClipboard(
                          ".container {\n  display: flex;\n  flex-direction: column; /* Vertical layout */\n}",
                          "flex-column"
                        )
                      }
                    >
                      {copiedCode === "flex-column" ? "✔ کاپی" : "📋 کاپی کریں"}
                    </button>
                  </div>
                  <div className="code-block">
                    <pre>{`.container {
  display: flex;
  flex-direction: column; /* Vertical layout */
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Justify Content - Enhanced with Live Demos */}
        <div className="example-section">
          <h3>⚖️ Step 3: Justify Content (افقی سیدھ)</h3>
          <p>یہ property بتاتی ہے کہ باکسز افقی لائن میں کیسے رکھے جائیں۔</p>

          <div className="comparison-section">
            <div className="table-container">
              <table className="scrollable-table">
                <thead>
                  <tr>
                    <th>Property Value</th>
                    <th>مطلب</th>
                    <th>Visual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>flex-start</code>
                    </td>
                    <td>سب باکسز بائیں طرف ہوں</td>
                    <td>⎡ ▪ ▪ ▪ ⎤</td>
                  </tr>
                  <tr>
                    <td>
                      <code>center</code>
                    </td>
                    <td>سب باکسز درمیان میں ہوں</td>
                    <td>⎡ · ▪ ▪ ▪ · ⎤</td>
                  </tr>
                  <tr>
                    <td>
                      <code>flex-end</code>
                    </td>
                    <td>سب باکسز دائیں طرف ہوں</td>
                    <td>⎡ ▪ ▪ ▪ ⎤</td>
                  </tr>
                  <tr>
                    <td>
                      <code>space-between</code>
                    </td>
                    <td>پہلا بائیں، آخری دائیں، باقی درمیان میں برابر فاصلہ</td>
                    <td>⎡▪ · ▪ · ▪⎤</td>
                  </tr>
                  <tr>
                    <td>
                      <code>space-around</code>
                    </td>
                    <td>ہر باکس کے چاروں طرف برابر فاصلہ</td>
                    <td>⎡· ▪ · ▪ · ▪ ·⎤</td>
                  </tr>
                  <tr>
                    <td>
                      <code>space-evenly</code>
                    </td>
                    <td>سب کے درمیان برابر فاصلہ</td>
                    <td>⎡· ▪ · ▪ · ▪ ·⎤</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Justify Content Live Demos */}
          <div className="demo-container">
            <h4><span>🎯</span>Justify Content Live Examples</h4>

            {/* flex-start */}
            <div className="demo-item">
              <h5>1. justify-content: flex-start</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  backgroundColor: "#f0f8ff",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "2px solid #007acc",
                }}
              >
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#007acc",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="code-section">
                <div className="code-header">
                  <span>CSS Code</span>
                  <button
                    className="copy-btn"
                    onClick={() =>
                      copyToClipboard(
                        ".container {\n  display: flex;\n  justify-content: flex-start; /* Items align to the left */\n}",
                        "justify-start"
                      )
                    }
                  >
                    {copiedCode === "justify-start" ? "✔ کاپی" : "📋 کاپی کریں"}
                  </button>
                </div>
                <div className="code-block">
                  <pre>{`.container {
  display: flex;
  justify-content: flex-start; /* Items align to the left */
}`}</pre>
                </div>
              </div>
            </div>

            {/* center */}
            <div className="demo-item">
              <h5>2. justify-content: center</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#f0fff0",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "2px solid #28a745",
                }}
              >
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#28a745",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="code-section">
                <div className="code-header">
                  <span>CSS Code</span>
                  <button
                    className="copy-btn"
                    onClick={() =>
                      copyToClipboard(
                        ".container {\n  display: flex;\n  justify-content: center; /* Items center horizontally */\n}",
                        "justify-center"
                      )
                    }
                  >
                    {copiedCode === "justify-center"
                      ? "✔ کاپی"
                      : "📋 کاپی کریں"}
                  </button>
                </div>
                <div className="code-block">
                  <pre>{`.container {
  display: flex;
  justify-content: center; /* Items center horizontally */
}`}</pre>
                </div>
              </div>
            </div>

            {/* space-between */}
            <div className="demo-item">
              <h5>3. justify-content: space-between</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#fff0f5",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "2px solid #e83e8c",
                }}
              >
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#e83e8c",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="code-section">
                <div className="code-header">
                  <span>CSS Code</span>
                  <button
                    className="copy-btn"
                    onClick={() =>
                      copyToClipboard(
                        ".container {\n  display: flex;\n  justify-content: space-between; /* Space between items */\n}",
                        "justify-between"
                      )
                    }
                  >
                    {copiedCode === "justify-between"
                      ? "✔ کاپی"
                      : "📋 کاپی کریں"}
                  </button>
                </div>
                <div className="code-block">
                  <pre>{`.container {
  display: flex;
  justify-content: space-between; /* Space between items */
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Align Items - Enhanced with Live Demos */}
        <div className="example-section">
          <h3>⚖️ Step 4: Align Items (عمودی سیدھ)</h3>
          <p>
            یہ property بتاتی ہے کہ باکسز container کے اندر عمودی طور پر کہاں
            ہوں گے۔
          </p>

          <div className="comparison-section">
            <div className="table-container">
              <table className="scrollable-table">
                <thead>
                  <tr>
                    <th>Property Value</th>
                    <th>مطلب</th>
                    <th>Visual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>flex-start</code>
                    </td>
                    <td>سب باکسز اوپر کی طرف</td>
                    <td>
                      ⎡ ▪ ⎤<br />⎡ ▪ ⎤<br />⎡ ▪ ⎤
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>center</code>
                    </td>
                    <td>سب باکسز درمیان میں</td>
                    <td>
                      ⎡ · ⎤<br />⎡ ▪ ⎤<br />⎡ · ⎤
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>flex-end</code>
                    </td>
                    <td>سب باکسز نیچے کی طرف</td>
                    <td>
                      ⎡ ▪ ⎤<br />⎡ ▪ ⎤<br />⎡ ▪ ⎤
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>stretch</code>
                    </td>
                    <td>سب باکسز خودکار طور پر پوری اونچائی تک پھیل جائیں</td>
                    <td>
                      ⎡ █ ⎤<br />⎡ █ ⎤<br />⎡ █ ⎤
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Align Items Live Demos */}
          <div className="demo-container">
            <h4>🎯 Align Items Live Examples</h4>

            {/* flex-start */}
            <div className="demo-item">
              <h5>1. align-items: flex-start</h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  backgroundColor: "#fffaf0",
                  height: "120px",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "2px solid #ff8c00",
                }}
              >
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: "50px",
                      height: "40px",
                      backgroundColor: "#ff8c00",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="code-section">
                <div className="code-header">
                  <span>CSS Code</span>
                  <button
                    className="copy-btn"
                    onClick={() =>
                      copyToClipboard(
                        ".container {\n  display: flex;\n  align-items: flex-start; /* Items align to top */\n  height: 120px; /* Need height for vertical alignment */\n}",
                        "align-start"
                      )
                    }
                  >
                    {copiedCode === "align-start" ? "✔ کاپی" : "📋 کاپی کریں"}
                  </button>
                </div>
                <div className="code-block">
                  <pre>{`.container {
  display: flex;
  align-items: flex-start; /* Items align to top */
  height: 120px; /* Need height for vertical alignment */
}`}</pre>
                </div>
              </div>
            </div>

            {/* center */}
            <div className="demo-item">
              <h5>2. align-items: center</h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f8f9fa",
                  height: "120px",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "2px solid #6c757d",
                }}
              >
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: "50px",
                      height: "40px",
                      backgroundColor: "#6c757d",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="code-section">
                <div className="code-header">
                  <span>CSS Code</span>
                  <button
                    className="copy-btn"
                    onClick={() =>
                      copyToClipboard(
                        ".container {\n  display: flex;\n  align-items: center; /* Items center vertically */\n  height: 120px;\n}",
                        "align-center"
                      )
                    }
                  >
                    {copiedCode === "align-center" ? "✔ کاپی" : "📋 کاپی کریں"}
                  </button>
                </div>
                <div className="code-block">
                  <pre>{`.container {
  display: flex;
  align-items: center; /* Items center vertically */
  height: 120px;
}`}</pre>
                </div>
              </div>
            </div>

            {/* stretch */}
            <div className="demo-item">
              <h5>3. align-items: stretch</h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  backgroundColor: "#e8f5e8",
                  height: "120px",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "2px solid #2e7d32",
                }}
              >
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: "50px",
                      backgroundColor: "#2e7d32",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      margin: "0 5px",
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="code-section">
                <div className="code-header">
                  <span>CSS Code</span>
                  <button
                    className="copy-btn"
                    onClick={() =>
                      copyToClipboard(
                        ".container {\n  display: flex;\n  align-items: stretch; /* Items stretch to full height */\n  height: 120px;\n}\n\n.item {\n  /* No height specified - will stretch */\n}",
                        "align-stretch"
                      )
                    }
                  >
                    {copiedCode === "align-stretch" ? "✔ کاپی" : "📋 کاپی کریں"}
                  </button>
                </div>
                <div className="code-block">
                  <pre>{`.container {
  display: flex;
  align-items: stretch; /* Items stretch to full height */
  height: 120px;
}

.item {
  /* No height specified - will stretch */
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gap Property Example */}
        <div className="example-section">
          <h3>🎯 Step 5: Gap Property (جدید اور آسان spacing)</h3>
          <p>
            <code>gap</code> property flex items کے درمیان فاصلہ مقرر کرتی ہے۔
            یہ <code>margin</code> کا جدید اور بہتر متبادل ہے۔
          </p>

          <div className="code-section">
            <div className="code-header">
              <span>CSS with Gap Property</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    `.container {\n  display: flex;\n  gap: 20px; /* ← یہ تمام items کے درمیان 20px فاصلہ پیدا کرے گا */\n  padding: 20px;\n  background-color: #f0f0f0;\n}\n\n.box {\n  width: 80px;\n  height: 80px;\n  background-color: #4CAF50;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-weight: bold;\n}`,
                    "gap-property"
                  )
                }
              >
                {copiedCode === "gap-property" ? "✔ کاپی" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block">
              <pre>{`.container {
  display: flex;
  gap: 20px; /* ← یہ تمام items کے درمیان 20px فاصلہ پیدا کرے گا */
  padding: 20px;
  background-color: #f0f0f0;
}

.box {
  width: 80px;
  height: 80px;
  background-color: #4CAF50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`}</pre>
            </div>
          </div>

          <div className="demo-container">
            <div className="live-demo">
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "20px",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#2196F3",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#FF9800",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  3
                </div>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#9C27B0",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  4
                </div>
              </div>
            </div>
            <div className="demo-explanation">
              <p>
                <strong>✅ فائدہ:</strong> <code>gap</code> استعمال کرنے سے آپ
                کو ہر item پر الگ سے <code>margin</code> لگانے کی ضرورت نہیں
                رہتی!
              </p>
            </div>
          </div>

          {/* Gap Comparison Demo */}
          <div className="demo-container">
            <h4>🎯 Gap vs Margin Comparison</h4>
            <div style={{ display: "flex", gap: "30px" }}>
              <div style={{ flex: 1 }}>
                <h5>✅ باہ Gap استعمال کریں</h5>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    backgroundColor: "#e8f5e8",
                    padding: "15px",
                    borderRadius: "8px",
                  }}
                >
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      style={{
                        flex: 1,
                        height: "60px",
                        backgroundColor: "#4caf50",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      Box {num}
                    </div>
                  ))}
                </div>
                <div className="code-section">
                  <div className="code-header">
                    <span>CSS with Gap</span>
                    <button
                      className="copy-btn"
                      onClick={() =>
                        copyToClipboard(
                          ".container {\n  display: flex;\n  gap: 15px; /* Simple and clean */\n}",
                          "gap-clean"
                        )
                      }
                    >
                      {copiedCode === "gap-clean" ? "✔ کاپی" : "📋 کاپی کریں"}
                    </button>
                  </div>
                  <div className="code-block">
                    <pre>{`.container {
  display: flex;
  gap: 15px; /* Simple and clean */
}`}</pre>
                  </div>
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <h5>❌ پرانے طریقے سے Margin استعمال کریں</h5>
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#ffebee",
                    padding: "15px",
                    borderRadius: "8px",
                  }}
                >
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      style={{
                        flex: 1,
                        height: "60px",
                        backgroundColor: "#f44336",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        margin: "0 7.5px",
                      }}
                    >
                      Box {num}
                    </div>
                  ))}
                </div>
                <div className="code-section">
                  <div className="code-header">
                    <span>CSS with Margin</span>
                    <button
                      className="copy-btn"
                      onClick={() =>
                        copyToClipboard(
                          ".container {\n  display: flex;\n}\n\n.item {\n  margin: 0 7.5px; /* Complex and error-prone */\n}",
                          "margin-complex"
                        )
                      }
                    >
                      {copiedCode === "margin-complex"
                        ? "✔ کاپی"
                        : "📋 کاپی کریں"}
                    </button>
                  </div>
                  <div className="code-block">
                    <pre>{`.container {
  display: flex;
}

.item {
  margin: 0 7.5px; /* Complex and error-prone */
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flex Wrap Example */}
        <div className="example-section">
          <h3>🔄 Step 6: Flex Wrap (Responsive Layout کے لیے)</h3>
          <p>
            <code>flex-wrap</code> property بتاتی ہے کہ جب items container میں
            پوری جگہ نہ پا سکیں تو وہ نیچے نئی لائن میں چلے جائیں۔
          </p>

          <div className="code-section">
            <div className="code-header">
              <span>CSS with Flex Wrap</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    `.container {\n  display: flex;\n  flex-wrap: wrap; /* ← یہ items کو نیچے نئی لائن میں لے آئے گا */\n  gap: 10px;\n  padding: 20px;\n  background-color: #f5f5f5;\n}\n\n.box {\n  width: 150px;\n  height: 80px;\n  background-color: #2196F3;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-weight: bold;\n}`,
                    "flex-wrap"
                  )
                }
              >
                {copiedCode === "flex-wrap" ? "✔ کاپی" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block">
              <pre>{`.container {
  display: flex;
  flex-wrap: wrap; /* ← یہ items کو نیچے نئی لائن میں لے آئے گا */
  gap: 10px;
  padding: 20px;
  background-color: #f5f5f5;
}

.box {
  width: 150px;
  height: 80px;
  background-color: #2196F3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`}</pre>
            </div>
          </div>

          <div className="demo-container">
            <h4>🎯 Flex Wrap Live Demo</h4>

            {/* With Wrap */}
            <div className="demo-item">
              <h5>✅ flex-wrap: wrap (Responsive)</h5>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  backgroundColor: "#e3f2fd",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "2px solid #1976d2",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: "120px",
                      height: "60px",
                      backgroundColor: "#1976d2",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    Item {num}
                  </div>
                ))}
              </div>
              <div className="demo-explanation">
                <p>
                  <strong>✅ فائدہ:</strong> جب جگہ کم ہو تو items خودکار طور پر
                  نیچے نئی لائن میں چلے جاتے ہیں۔
                </p>
              </div>
            </div>

            {/* Without Wrap */}
            <div className="demo-item">
              <h5>❌ flex-wrap: nowrap (Default - غیر Responsive)</h5>
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  gap: "10px",
                  backgroundColor: "#ffebee",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "2px solid #d32f2f",
                  overflow: "hidden",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: "120px",
                      height: "60px",
                      backgroundColor: "#d32f2f",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}
                  >
                    Item {num}
                  </div>
                ))}
              </div>
              <div className="demo-explanation">
                <p>
                  <strong>❌ مسئلہ:</strong> items باہر نکل جاتے ہیں اور
                  responsive نہیں رہتے۔
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Flexbox Example */}
        <div className="example-section">
          <h3>🚀 Step 7: Complete Practical Example</h3>
          <p>
            آئیے ایک عملی مثال دیکھتے ہیں جس میں تمام flex properties اکٹھی
            استعمال ہوئی ہیں۔
          </p>

          <div className="code-section">
            <div className="code-header">
              <span>Complete Flexbox Example</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    `<!DOCTYPE html>\n<html lang="ur">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Complete Flexbox Example</title>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  max-width: 800px;\n  width: 100%;\n}\n\n.header {\n  text-align: center;\n  color: white;\n}\n\n.header h1 {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\n}\n\n.header p {\n  font-size: 1.2rem;\n  opacity: 0.9;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  padding: 15px 30px;\n  border-radius: 50px;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.1);\n  width: 100%;\n}\n\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #667eea;\n}\n\n.nav-links {\n  display: flex;\n  gap: 20px;\n  list-style: none;\n}\n\n.nav-links a {\n  text-decoration: none;\n  color: #333;\n  font-weight: 500;\n  transition: color 0.3s;\n}\n\n.nav-links a:hover {\n  color: #667eea;\n}\n\n.hero-section {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  background: white;\n  padding: 40px;\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.1);\n  width: 100%;\n}\n\n.hero-content {\n  flex: 1;\n  min-width: 300px;\n}\n\n.hero-content h2 {\n  font-size: 2rem;\n  color: #333;\n  margin-bottom: 15px;\n}\n\n.hero-content p {\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #667eea;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 25px;\n  text-decoration: none;\n  font-weight: 500;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);\n}\n\n.hero-image {\n  flex: 1;\n  min-width: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.placeholder-img {\n  width: 100%;\n  height: 250px;\n  background: linear-gradient(45deg, #667eea, #764ba2);\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.features {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: 100%;\n}\n\n.feature-card {\n  flex: 1;\n  min-width: 200px;\n  background: white;\n  padding: 25px;\n  border-radius: 15px;\n  text-align: center;\n  box-shadow: 0 4px 16px rgba(0,0,0,0.1);\n  transition: transform 0.3s;\n}\n\n.feature-card:hover {\n  transform: translateY(-5px);\n}\n\n.feature-icon {\n  font-size: 2.5rem;\n  margin-bottom: 15px;\n}\n\n.feature-card h3 {\n  color: #333;\n  margin-bottom: 10px;\n}\n\n.feature-card p {\n  color: #666;\n  line-height: 1.5;\n}\n\n@media (max-width: 768px) {\n  .navbar {\n    flex-direction: column;\n    gap: 15px;\n    border-radius: 20px;\n  }\n  \n  .nav-links {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  \n  .hero-section {\n    flex-direction: column;\n  }\n}\n</style>\n</head>\n<body>\n<div class="container">\n  <header class="header">\n    <h1>🎯 Flexbox Magic</h1>\n    <p>CSS Flexbox کے ساتھ responsive layouts بنانا آسان!</p>\n  </header>\n  \n  <nav class="navbar">\n    <div class="logo">FlexBox</div>\n    <ul class="nav-links">\n      <li><a href="#">🏠 Home</a></li>\n      <li><a href="#">📚 About</a></li>\n      <li><a href="#">🛠️ Services</a></li>\n      <li><a href="#">📞 Contact</a></li>\n    </ul>\n  </nav>\n  \n  <section class="hero-section">\n    <div class="hero-content">\n      <h2>Flexbox سیکھیں</h2>\n      <p>CSS Flexbox ایک طاقتور layout module ہے جو آپ کو responsive اور flexible web designs بنانے میں مدد دیتی ہے۔</p>\n      <a href="#" class="btn">\n        <span>🚀 شروع کریں</span>\n      </a>\n    </div>\n    <div class="hero-image">\n      <div class="placeholder-img">Flexbox Illustration</div>\n    </div>\n  </section>\n  \n  <section class="features">\n    <div class="feature-card">\n      <div class="feature-icon">📱</div>\n      <h3>Responsive</h3>\n      <p>ہر screen size کے لیے خودکار طور پر ڈھل جاتا ہے</p>\n    </div>\n    <div class="feature-card">\n      <div class="feature-icon">⚡</div>\n      <h3>Fast</h3>\n      <p>تیز اور efficient layouts کے لیے بہترین</p>\n    </div>\n    <div class="feature-card">\n      <div class="feature-icon">🎨</div>\n      <h3>Flexible</h3>\n      <p>آپ کی ہر design need کے لیے لچکدار</p>\n    </div>\n  </section>\n</div>\n</body>\n</html>`,
                    "complete-flexbox"
                  )
                }
              >
                {copiedCode === "complete-flexbox" ? "✔ کاپی" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block">
              <pre>{`<!DOCTYPE html>
<html lang="ur">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Complete Flexbox Example</title>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 800px;
  width: 100%;
}

/* ... باقی CSS code ... */
</style>
</head>
<body>
<div class="container">
  <header class="header">
    <h1>🎯 Flexbox Magic</h1>
    <p>CSS Flexbox کے ساتھ responsive layouts بنانا آسان!</p>
  </header>
  
  <nav class="navbar">
    <div class="logo">FlexBox</div>
    <ul class="nav-links">
      <li><a href="#">🏠 Home</a></li>
      <li><a href="#">📚 About</a></li>
      <li><a href="#">🛠️ Services</a></li>
      <li><a href="#">📞 Contact</a></li>
    </ul>
  </nav>
  
  <section class="hero-section">
    <div class="hero-content">
      <h2>Flexbox سیکھیں</h2>
      <p>CSS Flexbox ایک طاقتور layout module ہے جو آپ کو responsive اور flexible web designs بنانے میں مدد دیتی ہے۔</p>
      <a href="#" class="btn">
        <span>🚀 شروع کریں</span>
      </a>
    </div>
    <div class="hero-image">
      <div class="placeholder-img">Flexbox Illustration</div>
    </div>
  </section>
  
  <section class="features">
    <div class="feature-card">
      <div class="feature-icon">📱</div>
      <h3>Responsive</h3>
      <p>ہر screen size کے لیے خودکار طور پر ڈھل جاتا ہے</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <h3>Fast</h3>
      <p>تیز اور efficient layouts کے لیے بہترین</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🎨</div>
      <h3>Flexible</h3>
      <p>آپ کی ہر design need کے لیے لچکدار</p>
    </div>
  </section>
</div>
</body>
</html>`}</pre>
            </div>
          </div>

          <div className="demo-container">
            <h4>🎯 Complete Flexbox Layout Live Demo</h4>
            <div
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "20px",
                borderRadius: "15px",
                fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              {/* Header */}
              <div className="whitehead">
                <h2><span className="emoji-icon">🎯</span>Flexbox Magic</h2>
                <p style={{ }}>
                  CSS Flexbox کے ساتھ responsive layouts بنانا آسان!
                </p>
              </div>

              {/* Navbar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "white",
                  padding: "12px 20px",
                  borderRadius: "25px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#667eea",
                  }}
                >
                  FlexBox
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                  <span style={{ color: "#333", fontWeight: "500" }}>
                    🏠 Home
                  </span>
                  <span style={{ color: "#333", fontWeight: "500" }}>
                    📚 About
                  </span>
                  <span style={{ color: "#333", fontWeight: "500" }}>
                    🛠️ Services
                  </span>
                </div>
              </div>

              {/* Hero Section */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  background: "white",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  marginBottom: "20px",
                }}
              >
                <div style={{ flex: "1", minWidth: "200px" }}>
                  <h3
                    style={{
                      color: "#333",
                      marginBottom: "10px",
                      fontSize: "1.3rem",
                    }}
                  >
                    Flexbox سیکھیں
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      lineHeight: "1.5",
                      marginBottom: "15px",
                      fontSize: "0.9rem",
                    }}
                  >
                    CSS Flexbox ایک طاقتور layout module ہے جو آپ کو responsive
                    اور flexible web designs بنانے میں مدد دیتی ہے۔
                  </p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      background: "#667eea",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    🚀 شروع کریں
                  </div>
                </div>
                <div
                  style={{
                    flex: "1",
                    minWidth: "200px",
                    background: "linear-gradient(45deg, #667eea, #764ba2)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    height: "120px",
                  }}
                >
                  Flexbox Illustration
                </div>
              </div>

              {/* Features */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                {[
                  {
                    icon: "📱",
                    title: "Responsive",
                    desc: "ہر screen size کے لیے خودکار",
                  },
                  {
                    icon: "⚡",
                    title: "Fast",
                    desc: "تیز اور efficient layouts",
                  },
                  {
                    icon: "🎨",
                    title: "Flexible",
                    desc: "ہر design need کے لیے لچکدار",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      flex: "1",
                      minWidth: "120px",
                      background: "white",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
                      {feature.icon}
                    </div>
                    <h4
                      style={{
                        color: "#333",
                        marginBottom: "5px",
                        fontSize: "0.9rem",
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "0.8rem",
                        lineHeight: "1.3",
                      }}
                    >
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flexbox Summary */}
        <div className="summary-section">
          <h3>📚 Flexbox Summary</h3>
          <div className="summary-grid">
            <div className="summary-card">
              <h4>🎯 Container Properties</h4>
              <ul>
                <li>
                  <code>display: flex</code> - Flex container بناتا ہے
                </li>
                <li>
                  <code>flex-direction</code> - Items کی سمت
                </li>
                <li>
                  <code>justify-content</code> - افقی alignment
                </li>
                <li>
                  <code>align-items</code> - عمودی alignment
                </li>
                <li>
                  <code>flex-wrap</code> - Multiple lines
                </li>
                <li>
                  <code>gap</code> - Items کے درمیان فاصلہ
                </li>
              </ul>
            </div>
            <div className="summary-card">
              <h4>🚀 Item Properties</h4>
              <ul>
                <li>
                  <code>flex-grow</code> - Item کا پھیلنا
                </li>
                <li>
                  <code>flex-shrink</code> - Item کا سکڑنا
                </li>
                <li>
                  <code>flex-basis</code> - Initial size
                </li>
                <li>
                  <code>align-self</code> - Individual alignment
                </li>
              </ul>
            </div>
            <div className="summary-card">
              <h4>💡 Best Practices</h4>
              <ul>
                <li>
                  Responsive layouts کے لیے <code>flex-wrap: wrap</code>
                </li>
                <li>
                  Spacing کے لیے <code>gap</code> property استعمال کریں
                </li>
                <li>
                  Centering کے لیے <code>justify-content: center</code> اور{" "}
                  <code>align-items: center</code>
                </li>
                <li>Mobile-first approach اپنائیں</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>CSS Display Properties - مکمل گائیڈ</p>
        <p>اب آپ layout کے بادشاہ بننے کے راستے پر ہیں! 🚀</p>
      </footer>
    </div>
  );
};

export default DisplayFlex;