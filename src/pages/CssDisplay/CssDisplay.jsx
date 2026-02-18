import React, { useState } from "react";
import "./CssDisplay.css";

const CssDisplay = () => {
  const [copiedCode, setCopiedCode] = useState("");
  const [showCopyConfirm, setShowCopyConfirm] = useState(false);

  const copyToClipboard = (code, exampleName) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(exampleName);
    setShowCopyConfirm(true);
    setTimeout(() => {
      setShowCopyConfirm(false);
      setCopiedCode("");
    }, 2000);
  };

  const displayProperties = [
    {
      property: "display: block",
      description: "پوری لائن گھیر لیتا ہے — نئی لائن شروع ہوتی ہے",
      example: "<div>, <p>",
      code: `.element {
  display: block;
  width: 100%;
}`,
      demo: (
        <div className="demo-container">
          <div className="block-demo">
            <div
              className="block-box"
              style={{
                display: "block",
                background: "lightgreen",
                padding: "10px",
                margin: "5px",
              }}
            >
              Block Element 1
            </div>
            <div
              className="block-box"
              style={{
                display: "block",
                background: "lightblue",
                padding: "10px",
                margin: "5px",
              }}
            >
              Block Element 2
            </div>
          </div>
        </div>
      ),
    },
    {
      property: "display: inline",
      description: "لائن کے ساتھ بہتا ہے — چوڑائی/اونچائی set نہیں کر سکتے",
      example: "<span>, <a>",
      code: `.element {
  display: inline;
  /* width/height کام نہیں کرے گا */
}`,
      demo: (
        <div className="demo-container">
          <div className="inline-demo">
            <span
              className="inline-box"
              style={{
                display: "inline",
                background: "yellow",
                padding: "5px",
                margin: "2px",
              }}
            >
              Inline 1
            </span>
            <span
              className="inline-box"
              style={{
                display: "inline",
                background: "orange",
                padding: "5px",
                margin: "2px",
              }}
            >
              Inline 2
            </span>
            <span
              className="inline-box"
              style={{
                display: "inline",
                background: "pink",
                padding: "5px",
                margin: "2px",
              }}
            >
              Inline 3
            </span>
          </div>
        </div>
      ),
    },
    {
      property: "display: inline-block",
      description: "لائن کے ساتھ رہتا ہے مگر width/height set ہو سکتی ہے",
      example: "Buttons, small boxes",
      code: `.element {
  display: inline-block;
  width: 100px;
  height: 50px;
}`,
      demo: (
        <div className="demo-container">
          <div className="inline-block-demo">
            <div
              className="inline-block-box"
              style={{
                display: "inline-block",
                width: "100px",
                height: "50px",
                background: "lightcoral",
                margin: "5px",
                textAlign: "center",
                lineHeight: "50px",
              }}
            >
              Box 1
            </div>
            <div
              className="inline-block-box"
              style={{
                display: "inline-block",
                width: "100px",
                height: "50px",
                background: "lightseagreen",
                margin: "5px",
                textAlign: "center",
                lineHeight: "50px",
              }}
            >
              Box 2
            </div>
            <div
              className="inline-block-box"
              style={{
                display: "inline-block",
                width: "100px",
                height: "50px",
                background: "plum",
                margin: "5px",
                textAlign: "center",
                lineHeight: "50px",
              }}
            >
              Box 3
            </div>
          </div>
        </div>
      ),
    },
    {
      property: "display: none",
      description: "Element کو مکمل چھپا دیتا ہے (layout سے بھی ہٹا دیتا ہے)",
      example: "Hide/Toggle UI",
      code: `.element {
  display: none;
  /* بالکل غائب ہو جائے گا */
}`,
      demo: (
        <div className="demo-container">
          <div className="none-demo">
            <div
              style={{
                background: "lightgray",
                padding: "10px",
                margin: "5px",
              }}
            >
              Visible Element
            </div>
            <div
              style={{
                display: "none",
                background: "red",
                padding: "10px",
                margin: "5px",
              }}
            >
              Hidden Element (display: none)
            </div>
            <div
              style={{
                background: "lightgray",
                padding: "10px",
                margin: "5px",
              }}
            >
              Another Visible Element
            </div>
          </div>
        </div>
      ),
    },
    {
      property: "display: flex",
      description: "Modern layout — items horizontally/vertically arrange",
      example: "Navbar, Cards layout",
      code: `.container {
  display: flex;
  gap: 10px;
  justify-content: center;
}`,
      demo: (
        <div className="demo-container">
          <div
            className="flex-demo"
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              padding: "10px",
              background: "#f0f0f0",
            }}
          >
            <div
              style={{
                background: "lightgreen",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              Flex Item 1
            </div>
            <div
              style={{
                background: "lightblue",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              Flex Item 2
            </div>
            <div
              style={{
                background: "lightcoral",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              Flex Item 3
            </div>
          </div>
        </div>
      ),
    },
    {
      property: "display: inline-flex",
      description: "Flex لیکن inline رہتا ہے",
      example: "Small toolbars",
      code: `.container {
  display: inline-flex;
  gap: 5px;
}`,
      demo: (
        <div className="demo-container">
          <div style={{ textAlign: "center" }}>
            <div
              className="inline-flex-demo"
              style={{
                display: "inline-flex",
                gap: "5px",
                background: "#e0e0e0",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              <span
                style={{
                  background: "gold",
                  padding: "5px",
                  borderRadius: "3px",
                }}
              >
                Tool 1
              </span>
              <span
                style={{
                  background: "silver",
                  padding: "5px",
                  borderRadius: "3px",
                }}
              >
                Tool 2
              </span>
              <span
                style={{
                  background: "bronze",
                  padding: "5px",
                  borderRadius: "3px",
                }}
              >
                Tool 3
              </span>
            </div>
            <span style={{ marginLeft: "10px" }}>← یہ inline-flex ہے</span>
          </div>
        </div>
      ),
    },
    {
      property: "display: grid",
      description: "2D layout، rows/columns control",
      example: "Website sections layout",
      code: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}`,
      demo: (
        <div className="demo-container">
          <div
            className="grid-demo"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              padding: "10px",
              background: "#f8f8f8",
            }}
          >
            <div
              style={{
                background: "lightgreen",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Grid Item 1
            </div>
            <div
              style={{
                background: "lightblue",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Grid Item 2
            </div>
            <div
              style={{
                background: "lightcoral",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Grid Item 3
            </div>
            <div
              style={{
                background: "plum",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Grid Item 4
            </div>
          </div>
        </div>
      ),
    },
    {
      property: "display: inline-grid",
      description: "Grid لیکن inline",
      example: "Mini grid UI",
      code: `.container {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
}`,
      demo: (
        <div className="demo-container">
          <div style={{ textAlign: "center" }}>
            <div
              className="inline-grid-demo"
              style={{
                display: "inline-grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5px",
                background: "#e8e8e8",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  background: "lightgreen",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                A
              </div>
              <div
                style={{
                  background: "lightblue",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                B
              </div>
              <div
                style={{
                  background: "lightcoral",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                C
              </div>
              <div
                style={{
                  background: "plum",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                D
              </div>
            </div>
            <span style={{ marginLeft: "10px" }}>← یہ inline-grid ہے</span>
          </div>
        </div>
      ),
    },
    {
      property: "display: table",
      description: "Element table کی طرح behave کرتا ہے",
      example: "Special layouts",
      code: `.element {
  display: table;
  width: 100%;
}`,
      demo: (
        <div className="demo-container">
          <div
            className="table-demo"
            style={{
              display: "table",
              width: "100%",
              border: "1px solid #ccc",
            }}
          >
            <div style={{ display: "table-row" }}>
              <div
                style={{
                  display: "table-cell",
                  padding: "10px",
                  border: "1px solid #ccc",
                  background: "#f0f0f0",
                }}
              >
                Header 1
              </div>
              <div
                style={{
                  display: "table-cell",
                  padding: "10px",
                  border: "1px solid #ccc",
                  background: "#f0f0f0",
                }}
              >
                Header 2
              </div>
            </div>
            <div style={{ display: "table-row" }}>
              <div
                style={{
                  display: "table-cell",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              >
                Data 1
              </div>
              <div
                style={{
                  display: "table-cell",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              >
                Data 2
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      property: "display: table-row / table-cell",
      description: "Table rows/cells کی طرح behave",
      example: "Rare cases",
      code: `.row {
  display: table-row;
}
.cell {
  display: table-cell;
  padding: 10px;
}`,
      demo: (
        <div className="demo-container">
          <div
            style={{
              display: "table",
              width: "100%",
              border: "1px solid #ddd",
            }}
          >
            <div style={{ display: "table-row", background: "#e9ecef" }}>
              <div
                style={{
                  display: "table-cell",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}
              >
                نام
              </div>
              <div
                style={{
                  display: "table-cell",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}
              >
                عمر
              </div>
            </div>
            <div style={{ display: "table-row" }}>
              <div
                style={{
                  display: "table-cell",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}
              >
                احمد
              </div>
              <div
                style={{
                  display: "table-cell",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}
              >
                25
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      property: "display: list-item",
      description: "Bullet points والا behavior",
      example: "Custom list UI",
      code: `.element {
  display: list-item;
  list-style-type: circle;
}`,
      demo: (
        <div className="demo-container">
          <div className="list-item-demo">
            <div
              style={{
                display: "list-item",
                listStyleType: "circle",
                marginLeft: "20px",
              }}
            >
              پہلی آئٹم
            </div>
            <div
              style={{
                display: "list-item",
                listStyleType: "square",
                marginLeft: "20px",
              }}
            >
              دوسری آئٹم
            </div>
            <div
              style={{
                display: "list-item",
                listStyleType: "disc",
                marginLeft: "20px",
              }}
            >
              تیسری آئٹم
            </div>
          </div>
        </div>
      ),
    },
    {
      property: "display: contents",
      description: "Children نظر آئیں گے لیکن parent غائب",
      example: "Cleanup structure",
      code: `.parent {
  display: contents;
}
.child {
  background: lightblue;
}`,
      demo: (
        <div className="demo-container">
          <div style={{ border: "2px dashed #ccc", padding: "10px" }}>
            <div style={{ display: "contents" }}>
              <div
                style={{
                  background: "lightblue",
                  padding: "10px",
                  margin: "5px",
                }}
              >
                Child 1 (parent display: contents)
              </div>
              <div
                style={{
                  background: "lightgreen",
                  padding: "10px",
                  margin: "5px",
                }}
              >
                Child 2 (parent display: contents)
              </div>
            </div>
          </div>
          <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
            Parent غائب ہے لیکن children نظر آ رہے ہیں
          </p>
        </div>
      ),
    },
  ];

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

      <header className="header">
        <h1>CSS Display Properties - Complete Guide</h1>
        <p>display properties وہ جادو ہیں جو ویب پیج پر elements کے behavior اور layout کو کنٹرول کرتے ہیں ✨</p>
        <p className="subtitle">سادے لفظوں میں: کون سا element لائن میں آئے گا، کون سا نئی لائن لے گا، کون سا لچکدار ہوگا — سب کچھ display سے چلتا ہے۔</p>
      </header>

      {/* Quick Examples Section */}
      <section className="quick-examples">
        <h2>🧩 Quick Examples</h2>
        
        <div className="example-grid">
          <div className="example-card">
            <h3>✅ Block vs Inline</h3>
            <div className="code-section">
              <div className="code-header">
                <span>HTML & CSS</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(`<style>\n  .block { display: block; background: lightgreen; }\n  .inline { display: inline; background: yellow; }\n</style>\n\n<span class="block">Block Span</span>\n<span class="block">Block Span</span>\n\n<p class="inline">Inline Para</p>\n<p class="inline">Inline Para</p>`, 'block-inline')}
                >
                  {copiedCode === 'block-inline' ? '✔ کاپی' : '📋 کاپی کریں'}
                </button>
              </div>
              <div className="code-block">
                <pre>{`<style>
  .block { display: block; background: lightgreen; }
  .inline { display: inline; background: yellow; }
</style>

<span class="block">Block Span</span>
<span class="block">Block Span</span>

<p class="inline">Inline Para</p>
<p class="inline">Inline Para</p>`}</pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="live-demo">
                <div style={{display: 'block', background: 'lightgreen', padding: '10px', margin: '5px'}}>Block Span</div>
                <div style={{display: 'block', background: 'lightgreen', padding: '10px', margin: '5px'}}>Block Span</div>
                <span style={{display: 'inline', background: 'yellow', padding: '10px', margin: '5px'}}>Inline Para</span>
                <span style={{display: 'inline', background: 'yellow', padding: '10px', margin: '5px'}}>Inline Para</span>
              </div>
              <div className="demo-explanation">
                <p>✅ Block → نیچے نیچے</p>
                <p>✅ Inline → ساتھ ساتھ</p>
              </div>
            </div>
          </div>

          <div className="example-card">
            <h3>✅ Flex Example</h3>
            <div className="code-section">
              <div className="code-header">
                <span>CSS</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(`.container {\n  display: flex;\n  gap: 10px;\n}\n.box {\n  background: #ddd;\n  padding: 10px;\n}`, 'flex-example')}
                >
                  {copiedCode === 'flex-example' ? '✔ کاپی' : '📋 کاپی کریں'}
                </button>
              </div>
              <div className="code-block">
                <pre>{`.container {
  display: flex;
  gap: 10px;
}
.box {
  background: #ddd;
  padding: 10px;
}`}</pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="live-demo">
                <div style={{display: 'flex', gap: '10px', padding: '10px', background: '#f0f0f0'}}>
                  <div style={{background: '#ddd', padding: '10px', flex: '1'}}>Box 1</div>
                  <div style={{background: '#ddd', padding: '10px', flex: '1'}}>Box 2</div>
                  <div style={{background: '#ddd', padding: '10px', flex: '1'}}>Box 3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="example-card">
            <h3>✅ Grid Example</h3>
            <div className="code-section">
              <div className="code-header">
                <span>CSS</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(`.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}`, 'grid-example')}
                >
                  {copiedCode === 'grid-example' ? '✔ کاپی' : '📋 کاپی کریں'}
                </button>
              </div>
              <div className="code-block">
                <pre>{`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}`}</pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="live-demo">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '10px',
                  padding: '10px',
                  background: '#f8f8f8'
                }}>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>1</div>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>2</div>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>3</div>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>4</div>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>5</div>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE DETAILED EXPLANATIONS - ALL CONTENT PRESERVED */}
      <section className="detailed-explanations">
        <h2>⭐ Detailed Explanations with Visual Examples</h2>
        
        {/* Display: Inline Explanation */}
        <div className="explanation-section">
          <h3>⭐ display: inline کیا ہوتا ہے؟</h3>
          <p>یہ ایسے سمجھیں جیسے کوئی چیز لائن میں کھڑی ہو اور اپنے ارد گرد کسی کو دھکا نہ دے۔</p>
          <p>یعنی جتنا اس element کے ٹیکسٹ یا مواد کو جگہ چاہیے، بس اتنا سا حصہ لے گا۔</p>
          <p>Width, height, margin-top, margin-bottom اس پر اچھے سے کام نہیں کرتے۔</p>
          <div className="example-box">
            <p><strong>✅ مثال:</strong></p>
            <p><code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code> وغیرہ Inline elements ہوتے ہیں۔</p>
            <p>یہ ایک ہی لائن میں رہتے ہیں۔</p>
          </div>
          <div className="key-point">
            <p><strong>📌 آسان الفاظ میں:</strong></p>
            <p>Inline element کہتا ہے: "مجھے لائن کے ساتھ ہی رہنا ہے، پورا block نہیں بنانا!"</p>
          </div>
        </div>

        {/* Display: Inline-element Clarification */}
        <div className="explanation-section">
          <h3>⭐ display: inline-element کیا ہے؟ 😅</h3>
          <p><strong>اصل میں "display: inline-element" کوئی property ہی نہیں ہوتی!</strong></p>
          <p>یہ اکثر لوگ غلطی سے بول دیتے ہیں۔</p>
          <p><strong>اصل لفظ ہوتا ہے: ✅ Inline Elements</strong></p>
          <p>یعنی وہ HTML سراپے جو پہلے سے inline ہوتے ہیں: <code>&lt;a&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;b&gt;</code> وغیرہ</p>
          <p>یہاں display: inline تو CSS property ہے اور inline elements HTML کی categories میں آتے ہیں۔</p>
        </div>

        {/* Comparison Table 1 */}
        <div className="comparison-section">
          <h3>💡 فرق دو لائنوں میں</h3>
          <div className="table-container">
            <table className="scrollable-table">
              <thead>
                <tr>
                  <th>چیز</th>
                  <th>کیا ہے؟</th>
                  <th>کس میں ملتی ہے؟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>display: inline</strong></td>
                  <td>CSS کی property</td>
                  <td>کسی بھی element پر لگائی جا سکتی ہے</td>
                </tr>
                <tr>
                  <td><strong>Inline elements</strong></td>
                  <td>HTML element کی type</td>
                  <td>جیسے span, a… پہلے سے inline ہوتے ہیں</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Mind Trick */}
        <div className="mind-trick">
          <h3>🎯 Final Mind Trick 🎯</h3>
          <ul>
            <li><strong>Inline</strong> = Line کے اندر رہتا ہے</li>
            <li><strong>Block</strong> = اپنی الگ پوری لائن بناتا ہے</li>
            <li><strong>Inline-block</strong> = Line میں بھی رہتا ہے اور Width/Height بھی مانتا ہے ✨</li>
          </ul>
        </div>

        {/* Does inline-element exist? */}
        <div className="explanation-section">
          <h3>کیا display: inline-element; exist نہیں کرتا؟</h3>
          <div className="answer-box">
            <p><strong>❌ display: inline-element; نام کی کوئی CSS property exist نہیں کرتی۔</strong></p>
            <p>CSS میں inline، block، inline-block، flex، grid وغیرہ ہوتے ہیں لیکن inline-element نہیں ہوتا۔</p>
            <p>بہت سے beginners غلطی سے HTML کی category inline elements کو CSS کی property سمجھ لیتے ہیں۔ اسی وجہ سے یہ کنفیوزن پیدا ہوتی ہے۔</p>
          </div>
          
          {/* Correct Options Table */}
          <div className="comparison-section">
            <h4>✅ اصل صحیح options کیا ہیں؟</h4>
            <div className="table-container">
              <table className="scrollable-table">
                <thead>
                  <tr>
                    <th>CSS Value</th>
                    <th>کیا کرتا ہے؟</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>display: inline</code></td>
                    <td className="fontSize15">ایک ہی لائن میں رکھتا ہے (width/height نہیں مانتا)</td>
                  </tr>
                  <tr>
                    <td><code>display: inline-block</code></td>
                    <td>ایک لائن میں بھی اور custom width/height بھی</td>
                  </tr>
                  <tr>
                    <td><code>display: block</code></td>
                    <td>پوری لائن گھیر لیتا ہے</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="memory-trick">
            <p><strong>یادگار Trick 🔔</strong></p>
            <p>Inline element ✅</p>
            <p>display: inline ✅</p>
            <p>display: inline-element ❌</p>
          </div>
        </div>

        {/* Display: Inline-block Detailed Explanation */}
        <div className="explanation-section">
          <h3>⭐ Display: inline-block کیا ہوتا ہے؟</h3>
          <p>یہ inline اور block دونوں کی خوبیوں والا طاقتور جنگجوی عاشق 😎</p>
          <p>ایک لائن میں رہتا ہے، مگر اپنی چوڑائی (width) اور اونچائی (height) بھی رکھ سکتا ہے۔</p>
          <p>اور margin اوپر نیچے بھی قبول کر لیتا ہے۔</p>
          
          {/* Inline-block Behavior Table */}
          <div className="comparison-section">
            <h4>ایک لائن میں کہانی:</h4>
            <div className="table-container">
              <table className="scrollable-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Behaviour</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Inline کی طرح</td>
                    <td>ایک ہی لائن میں رہتا ہے</td>
                  </tr>
                  <tr>
                    <td>Block کی طرح</td>
                    <td>Width/Height اور Margin/Padding اوپر نیچے کام کرتے ہیں</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="example-box">
            <h4>✅ مثال سے تصور کیجئے</h4>
            <p>فرض کریں تین چھوٹے Box ہیں۔</p>
            <p>اگر انہیں display: inline-block; دے دیں تو یہ ایسے لگیں گے جیسے تین دوست ہاتھ پکڑ کر ایک ہی لائن میں کھڑے ہیں۔</p>
            <p>ہر دوست کے پاس اپنی پرسنل space یعنی width/height بھی ہے۔</p>
          </div>

          {/* Inline-block Code Example */}
          <div className="code-section">
            <div className="code-header">
              <span>🔍 Code Example</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(`<style>\n.box {\n  display: inline-block;\n  width: 120px;\n  height: 70px;\n  background: #00cc88;\n  margin: 10px;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 70px;\n  color: #fff;\n}\n</style>\n\n<div class="box">Box 1</div>\n<div class="box">Box 2</div>\n<div class="box">Box 3</div>`, 'inline-block-example')}
              >
                {copiedCode === 'inline-block-example' ? '✔ کاپی' : '📋 کاپی کریں'}
              </button>
            </div>
            <div className="code-block">
              <pre>{`<style>
.box {
  display: inline-block;
  width: 120px;
  height: 70px;
  background: #00cc88;
  margin: 10px;
  text-align: center;
  vertical-align: middle;
  line-height: 70px;
  color: #fff;
}
</style>

<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>`}</pre>
            </div>
          </div>

          {/* Inline-block Live Demo */}
          <div className="demo-container">
            <div className="live-demo">
              <div style={{display: 'inline-block', width: '120px', height: '70px', background: '#00cc88', margin: '10px', textAlign: 'center', lineHeight: '70px', color: '#fff'}}>Box 1</div>
              <div style={{display: 'inline-block', width: '120px', height: '70px', background: '#00cc88', margin: '10px', textAlign: 'center', lineHeight: '70px', color: '#fff'}}>Box 2</div>
              <div style={{display: 'inline-block', width: '120px', height: '70px', background: '#00cc88', margin: '10px', textAlign: 'center', lineHeight: '70px', color: '#fff'}}>Box 3</div>
            </div>
            <p style={{textAlign: 'center', marginTop: '10px'}}>یہ تینوں Box ایک لائن میں بھی آئیں گے اور ہر ایک box کا اپنا سائز بھی ہے 😄</p>
          </div>

          {/* Usage Tips */}
          <div className="usage-tips">
            <h4>💡 کب استعمال کریں؟</h4>
            <ul>
              <li>✅ Navigation menu آئٹمز</li>
              <li>✅ Image gallery layout</li>
              <li>✅ Buttons side-by-side</li>
              <li>✅ Form fields ساتھ ساتھ دکھانے میں</li>
            </ul>
          </div>

          <div className="final-note">
            <p><strong>🎯 Final Mind Note</strong></p>
            <p>Inline-block = پروفیشنل gentleman</p>
            <p>نہ بلا وجہ جگہ گھیرتا ہے نہ دوسروں کے سر پہ چڑھتا ہے</p>
            <p>بس اپنے style کے ساتھ لائن میں رہتا ہے 😎</p>
          </div>
        </div>

        {/* Biscuit Example */}
        <div className="biscuit-example">
          <h3>🍪 Biscuit Example سے سمجھیں</h3>
          <p>تین Biscuit ہیں:</p>
          
          {/* Block Example */}
          <div className="example-item">
            <h4>1️⃣ display: block</h4>
            <p>ہر بَسکِٹ کہتا ہے: <strong>"مجھے پوری پلیٹ چاہیے!"</strong></p>
            <p>ایک کے بعد ایک نیچے نیچے آتے ہیں👇</p>
            <p>پوری لائن کو گھیر لیتے ہیں۔</p>
            <div className="demo-container">
              <div style={{display: 'block', background: 'lightcoral', padding: '15px', margin: '5px', textAlign: 'center'}}>[ Biscuit1 ]</div>
              <div style={{display: 'block', background: 'lightcoral', padding: '15px', margin: '5px', textAlign: 'center'}}>[ Biscuit2 ]</div>
              <div style={{display: 'block', background: 'lightcoral', padding: '15px', margin: '5px', textAlign: 'center'}}>[ Biscuit3 ]</div>
            </div>
          </div>

          {/* Inline Example */}
          <div className="example-item">
            <h4>2️⃣ display: inline</h4>
            <p>بَسکِٹ کہتا ہے: <strong>"میں لائن کے اندر ہی رہوں گا اور جتنی جگہ میرے نام کو چاہیے وہی کافی ہے!"</strong></p>
            <p>پورا block نہیں بنتا👇</p>
            <div className="demo-container">
              <span style={{display: 'inline', background: 'lightgreen', padding: '5px', margin: '2px'}}>Biscuit1</span>
              <span style={{display: 'inline', background: 'lightgreen', padding: '5px', margin: '2px'}}>Biscuit2</span>
              <span style={{display: 'inline', background: 'lightgreen', padding: '5px', margin: '2px'}}>Biscuit3</span>
            </div>
            <p>یہ width/height-set نہیں ہونے دیتا۔</p>
          </div>

          {/* Inline-block Example */}
          <div className="example-item">
            <h4>3️⃣ ⭐ display: inline-block</h4>
            <p>یہ بَسکِٹ کہتا ہے: <strong>"میں لائن میں بھی رہوں گا اور اپنی چوڑائی اور اونچائی بھی رکھوں گا!"</strong></p>
            <p>یعنی ایک ہی صف میں نظر آئیں گے مگر box کی شکل میں👇</p>
            <div className="demo-container">
              <div style={{display: 'inline-block', width: '100px', height: '40px', background: 'lightblue', margin: '5px', textAlign: 'center', lineHeight: '40px'}}>[ Biscuit1 ]</div>
              <div style={{display: 'inline-block', width: '100px', height: '40px', background: 'lightblue', margin: '5px', textAlign: 'center', lineHeight: '40px'}}>[ Biscuit2 ]</div>
              <div style={{display: 'inline-block', width: '100px', height: '40px', background: 'lightblue', margin: '5px', textAlign: 'center', lineHeight: '40px'}}>[ Biscuit3 ]</div>
            </div>
            <p>👈 یہی Inline-block ہے!</p>
          </div>

          {/* Comparison Summary Table */}
          <div className="comparison-section">
            <h4>🔍 ایک جملے میں نچوڑ</h4>
            <div className="table-container">
              <table className="scrollable-table">
                <thead>
                  <tr>
                    <th>قسم</th>
                    <th>Line میں؟</th>
                    <th>Width/Height؟</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Block</td>
                    <td>❌ نیچے نیچے</td>
                    <td>✅ ہاں</td>
                  </tr>
                  <tr>
                    <td>Inline</td>
                    <td>✅ ساتھ ساتھ</td>
                    <td>❌ نہیں</td>
                  </tr>
                  <tr>
                    <td>Inline-block</td>
                    <td>✅ ساتھ ساتھ</td>
                    <td>✅ ہاں ✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Experiment Section */}
        <div className="experiment-section">
          <h3>🔬 چھوٹا سا تجربہ (آپ خود try کیجیے)</h3>
          <div className="code-section">
            <div className="code-header">
              <span>HTML & CSS</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(`<style>\n.biscuit {\n  width: 100px;\n  height: 60px;\n  background: #0099ff;\n  margin: 5px;\n  color: #fff;\n  text-align: center;\n  line-height: 60px;\n}\n</style>\n\n<div class="biscuit">One</div>\n<div class="biscuit">Two</div>\n<div class="biscuit">Three</div>`, 'experiment-code')}
              >
                {copiedCode === 'experiment-code' ? '✔ کاپی' : '📋 کاپی کریں'}
              </button>
            </div>
            <div className="code-block">
              <pre>{`<style>
.biscuit {
  width: 100px;
  height: 60px;
  background: #0099ff;
  margin: 5px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
</style>

<div class="biscuit">One</div>
<div class="biscuit">Two</div>
<div class="biscuit">Three</div>`}</pre>
            </div>
          </div>
          <p><strong>پہلے ان پر display: block لگائیں پھر display: inline پھر display: inline-block</strong></p>
          <p><strong>تینوں صورتیں فوراً سمجھ آ جائیں گی 🎯</strong></p>
        </div>

        {/* Visual Guide */}
        <div className="visual-guide">
          <h3>🧱 Display Properties کا آسان خاکہ</h3>
          
          {/* Block Visual */}
          <div className="visual-item">
            <h4>1️⃣ display: block</h4>
            <p>ہر Box اپنی پوری لائن نگل لیتا ہے</p>
            <div className="visual-demo">
              <div style={{display: 'block', background: '#ff6b6b', padding: '20px', margin: '10px', textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Box 1</div>
              <div style={{display: 'block', background: '#4ecdc4', padding: '20px', margin: '10px', textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Box 2</div>
              <div style={{display: 'block', background: '#45b7d1', padding: '20px', margin: '10px', textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Box 3</div>
            </div>
          </div>

          {/* Inline Visual */}
          <div className="visual-item">
            <h4>2️⃣ display: inline</h4>
            <p>Boxes ایک لائن میں رہتے ہیں مگر Box کی شکل نہیں بناتے</p>
            <p>Width/height بات ہی نہیں مانتے</p>
            <div className="visual-demo">
              <span style={{display: 'inline', background: '#f9ca24', padding: '5px', margin: '2px'}}>Box1</span>
              <span style={{display: 'inline', background: '#f0932b', padding: '5px', margin: '2px'}}>Box2</span>
              <span style={{display: 'inline', background: '#eb4d4b', padding: '5px', margin: '2px'}}>Box3</span>
              <span style={{display: 'inline', background: '#6ab04c', padding: '5px', margin: '2px'}}>Box4</span>
              <span style={{display: 'inline', background: '#4834d4', padding: '5px', margin: '2px', color: 'white'}}>Box5</span>
            </div>
            <p>ایسے جیسے عام ٹیکسٹ ساتھ ساتھ چل رہا ہو۔</p>
          </div>

          {/* Inline-block Visual */}
          <div className="visual-item">
            <h4>⭐ 3️⃣ display: inline-block</h4>
            <p>Boxes ایک لائن میں بھی، مگر اپنی border, width, height کے ساتھ جینٹلمین اسٹائل میں 😎👇</p>
            <div className="visual-demo">
              <div style={{display: 'inline-block', width: '100px', height: '60px', background: '#00b894', margin: '5px', textAlign: 'center', lineHeight: '60px', color: 'white', fontWeight: 'bold'}}>Box1</div>
              <div style={{display: 'inline-block', width: '100px', height: '60px', background: '#00cec9', margin: '5px', textAlign: 'center', lineHeight: '60px', color: 'white', fontWeight: 'bold'}}>Box2</div>
              <div style={{display: 'inline-block', width: '100px', height: '60px', background: '#0984e3', margin: '5px', textAlign: 'center', lineHeight: '60px', color: 'white', fontWeight: 'bold'}}>Box3</div>
            </div>
            <p>ہر Box کی اپنی جگہ مخصوص مگر سب ایک ہی قطار میں!</p>
          </div>

          {/* Feature Comparison Table */}
          <div className="comparison-section">
            <h4>✨ یاد رکھیں:</h4>
            <div className="table-container">
              <table className="scrollable-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Block</th>
                    <th>Inline</th>
                    <th>Inline-block</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ایک لائن میں؟</td>
                    <td>❌</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>اپنی چوڑائی/اونچائی؟</td>
                    <td>✅</td>
                    <td>❌</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Box کی شکل؟</td>
                    <td>✅</td>
                    <td>❌</td>
                    <td>✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="final-visual-note">
            <p><strong>📌 Final Mind Picture</strong></p>
            <p>Inline-block ایک ایسا element جو لائن میں بھی کھڑا رہے اور Box ہونے کا رعب بھی دکھائے 😎</p>
          </div>
        </div>

        {/* Animation Section */}
        <div className="animation-section">
          <h3>🎬 Live Display Switch Animation</h3>
          <p>(صرف Copy → Paste کریں اور براوزر میں کھول لیں)</p>
          
          <div className="code-section">
            <div className="code-header">
              <span>Complete HTML Code</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(`<!DOCTYPE html>\n<html lang="ur">\n<head>\n<meta charset="UTF-8">\n<title>Display Animation</title>\n<style>\n.container {\n  margin-top: 30px;\n  text-align: center;\n}\n\n.box {\n  width: 120px;\n  height: 60px;\n  background: #00b894;\n  color: #fff;\n  line-height: 60px;\n  margin: 5px;\n  border-radius: 6px;\n  font-family: Arial, sans-serif;\n}\n\n/* Animation area */\n.stage {\n  animation: changeDisplay 8s infinite;\n}\n\n@keyframes changeDisplay {\n  0% {\n    display: block;\n  }\n  33% {\n    display: inline;\n  }\n  66% {\n    display: inline-block;\n  }\n}\n</style>\n</head>\n<body>\n\n<h2 style="text-align:center">Live Display Animation</h2>\n<p style="text-align:center">دیکھتے جائیں کیسے Display بدلتا ہے 👀</p>\n\n<div class="container">\n  <div class="box stage">One</div>\n  <div class="box stage">Two</div>\n  <div class="box stage">Three</div>\n</div>\n\n<p style="text-align:center; font-size:18px; margin-top:20px;">\nAnimation: Block ➜ Inline ➜ Inline-block ➜ دوبارہ\n</p>\n\n</body>\n</html>`, 'animation-code')}
              >
                {copiedCode === 'animation-code' ? '✔ کاپی' : '📋 کاپی کریں'}
              </button>
            </div>
            <div className="code-block">
              <pre>{`<!DOCTYPE html>
<html lang="ur">
<head>
<meta charset="UTF-8">
<title>Display Animation</title>
<style>
.container {
  margin-top: 30px;
  text-align: center;
}

.box {
  width: 120px;
  height: 60px;
  background: #00b894;
  color: #fff;
  line-height: 60px;
  margin: 5px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
}

/* Animation area */
.stage {
  animation: changeDisplay 8s infinite;
}

@keyframes changeDisplay {
  0% {
    display: block;
  }
  33% {
    display: inline;
  }
  66% {
    display: inline-block;
  }
}
</style>
</head>
<body>

<h2 style="text-align:center">Live Display Animation</h2>
<p style="text-align:center">دیکھتے جائیں کیسے Display بدلتا ہے 👀</p>

<div class="container">
  <div class="box stage">One</div>
  <div class="box stage">Two</div>
  <div class="box stage">Three</div>
</div>

<p style="text-align:center; font-size:18px; margin-top:20px;">
Animation: Block ➜ Inline ➜ Inline-block ➜ دوبارہ
</p>

</body>
</html>`}</pre>
            </div>
          </div>

          {/* Animation Explanation Table */}
          <div className="comparison-section">
            <h4>🤩 یہ Animation کیا دکھاتا ہے؟</h4>
            <div className="table-container">
              <table className="scrollable-table">
                <thead>
                  <tr>
                    <th>وقت</th>
                    <th>کیا ہوتا ہے؟</th>
                    <th>Visual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>شروع میں</td>
                    <td>Block mode</td>
                    <td>Boxes نیچے نیچے</td>
                  </tr>
                  <tr>
                    <td>3 سیکنڈ بعد</td>
                    <td>Inline mode</td>
                    <td>Boxes بغیر shape ساتھ ساتھ</td>
                  </tr>
                  <tr>
                    <td>5 سیکنڈ بعد</td>
                    <td>Inline-block mode</td>
                    <td>Boxes ساتھ ساتھ، مگر proper سائز کے ساتھ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>پھر یہ Action دوبارہ repeat ہوتا رہتا ہے ✅</p>
          </div>

          <div className="bonus-tip">
            <h4>🔥 Bonus Tip</h4>
            <p>Animation کی speed slow یا fast کرنی ہو تو:</p>
            <p><code>animation: changeDisplay 8s infinite;</code></p>
            <p>میں 8s کو بڑھا یا گھٹا دیں مثلاً 12s یا 4s وغیرہ</p>
          </div>
        </div>
      </section>

      {/* Main Display Properties */}
      <section className="display-properties">
        <h2>✅ Display Properties کی اہم اقسام</h2>
        
        <div className="properties-grid">
          {displayProperties.map((prop, index) => (
            <div key={index} className="property-card">
              <h3>{prop.property}</h3>
              <p className="property-description">{prop.description}</p>
              <p className="property-example"><strong>Example:</strong> {prop.example}</p>
              
              <div className="code-section">
                <div className="code-header">
                  <span>CSS Code</span>
                  <button 
                    className="copy-btn"
                    onClick={() => copyToClipboard(prop.code, `property-${index}`)}
                  >
                    {copiedCode === `property-${index}` ? '✔ کاپی' : '📋 کاپی کریں'}
                  </button>
                </div>
                <div className="code-block">
                  <pre>{prop.code}</pre>
                </div>
              </div>

              {/* Live Demo */}
              <div className="demo-section">
                <h4>🎯 Live Demo:</h4>
                {prop.demo}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Most Used Properties */}
      <section className="most-used">
        <h2>🔥 سب سے زیادہ استعمال ہونے والے</h2>
        <div className="used-properties">
          <div className="used-item">✔ block</div>
          <div className="used-item">✔ inline</div>
          <div className="used-item">✔ inline-block</div>
          <div className="used-item">✔ flex</div>
          <div className="used-item">✔ grid</div>
          <div className="used-item">✔ none</div>
        </div>
        <p className="motivation">یہ اگر آ جائیں تو layout king آپ 🤴🏻</p>
      </section>

      {/* Quick Examples Section */}
      <section className="quick-examples">
        <h2>🧩 Quick Examples</h2>

     <div className="example-grid">
          <div className="example-card">
            <h3>✅ Block vs Inline</h3>
            <div className="code-section">
              <div className="code-header">
                <span>HTML & CSS</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(`<style>\n  .block { display: block; background: lightgreen; }\n  .inline { display: inline; background: yellow; }\n</style>\n\n<span class="block">Block Span</span>\n<span class="block">Block Span</span>\n\n<p class="inline">Inline Para</p>\n<p class="inline">Inline Para</p>`, 'block-inline')}
                >
                  {copiedCode === 'block-inline' ? '✔ کاپی' : '📋 کاپی کریں'}
                </button>
              </div>
              <div className="code-block">
                <pre>{`<style>
  .block { display: block; background: lightgreen; }
  .inline { display: inline; background: yellow; }
</style>

<span class="block">Block Span</span>
<span class="block">Block Span</span>

<p class="inline">Inline Para</p>
<p class="inline">Inline Para</p>`}</pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="live-demo">
                <div style={{display: 'block', background: 'lightgreen', padding: '10px', margin: '5px'}}>Block Span</div>
                <div style={{display: 'block', background: 'lightgreen', padding: '10px', margin: '5px'}}>Block Span</div>
                <span style={{display: 'inline', background: 'yellow', padding: '10px', margin: '5px'}}>Inline Para</span>
                <span style={{display: 'inline', background: 'yellow', padding: '10px', margin: '5px'}}>Inline Para</span>
              </div>
              <div className="demo-explanation">
                <p>✅ Block → نیچے نیچے</p>
                <p>✅ Inline → ساتھ ساتھ</p>
              </div>
            </div>
          </div>

          <div className="example-card">
            <h3>✅ Flex Example</h3>
            <div className="code-section">
              <div className="code-header">
                <span>CSS</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(`.container {\n  display: flex;\n  gap: 10px;\n}\n.box {\n  background: #ddd;\n  padding: 10px;\n}`, 'flex-example')}
                >
                  {copiedCode === 'flex-example' ? '✔ کاپی' : '📋 کاپی کریں'}
                </button>
              </div>
              <div className="code-block">
                <pre>{`.container {
  display: flex;
  gap: 10px;
}
.box {
  background: #ddd;
  padding: 10px;
}`}</pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="live-demo">
                <div style={{display: 'flex', gap: '10px', padding: '10px', background: '#f0f0f0'}}>
                  <div style={{background: '#ddd', padding: '10px', flex: '1'}}>Box 1</div>
                  <div style={{background: '#ddd', padding: '10px', flex: '1'}}>Box 2</div>
                  <div style={{background: '#ddd', padding: '10px', flex: '1'}}>Box 3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="example-card">
            <h3>✅ Grid Example</h3>
            <div className="code-section">
              <div className="code-header">
                <span>CSS</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(`.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}`, 'grid-example')}
                >
                  {copiedCode === 'grid-example' ? '✔ کاپی' : '📋 کاپی کریں'}
                </button>
              </div>
              <div className="code-block">
                <pre>{`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}`}</pre>
              </div>
            </div>
            <div className="demo-container">
              <div className="live-demo">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '10px',
                  padding: '10px',
                  background: '#f8f8f8'
                }}>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>1</div>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>2</div>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>3</div>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>4</div>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>5</div>
                  <div style={{background: '#ddd', padding: '20px', textAlign: 'center'}}>6</div>
                </div>
              </div>
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

export default CssDisplay;
