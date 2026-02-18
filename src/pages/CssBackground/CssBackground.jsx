// ChBackground.jsx
import React, { useState, useRef } from 'react';
import './CssBackground.css';

const CssBackground = () => {
  const [activeSection, setActiveSection] = useState('background-image');
  const [copiedCode, setCopiedCode] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Copy code to clipboard
  const copyToClipboard = (code, section) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(section);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  // Mobile menu functions
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  // Background properties data - COMPLETE WITH 10 ITEMS
  const backgroundProperties = [
    {
      id: 'background-image',
      title: 'background-image',
      description: 'عنصر کے لیے ایک یا زیادہ پس منظر کی تصاویر مقرر کرتا ہے۔',
      code: `background-image: url("image.jpg");\n\n/* Multiple images */\nbackground-image: url("layer1.png"), url("layer2.png");`,
      demoStyle: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=800")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    },
    {
      id: 'background-color',
      title: 'background-color',
      description: 'عنصر کا پس منظر کا رنگ مقرر کرتا ہے۔',
      code: 'background-color: #f5f5f5;',
      demoStyle: {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px'
      }
    },
    {
      id: 'background-repeat',
      title: 'background-repeat',
      description: 'پس منظر کی تصویر کیسے دہرائی جائے گی اس کی وضاحت کرتا ہے۔',
      code: `background-repeat: no-repeat;\n\n/* Other values: repeat, repeat-x, repeat-y, space, round */`,
      demoStyle: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&w=100")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '50px 50px'
      }
    },
    {
      id: 'background-position',
      title: 'background-position',
      description: 'پس منظر کی تصویر کی ابتدائی پوزیشن مقرر کرتا ہے۔',
      code: `background-position: center center;\nbackground-position: 50% 100px;\nbackground-position: top right;`,
      demoStyle: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&w=100")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: '80px 80px'
      }
    },
    {
      id: 'background-size',
      title: 'background-size',
      description: 'پس منظر کی تصویر کا سائز مقرر کرتا ہے۔',
      code: `background-size: cover;\n\n/* Other values: auto, contain, 200px 150px, 50% 80% */`,
      demoStyle: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&w=800")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    },
    {
      id: 'background-attachment',
      title: 'background-attachment',
      description: 'پس منظر کی تصویر اسکرول ہوتی ہے یا فکسڈ رہتی ہے۔',
      code: `background-attachment: fixed;\n\n/* Other values: scroll, local */`,
      demoStyle: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&w=800")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200px'
      }
    },
    {
      id: 'background-clip',
      title: 'background-clip',
      description: 'پس منظر کس حد تک عنصر کے اندر پھیلا ہوا ہے۔',
      code: `background-clip: content-box;\n\n/* Other values: border-box, padding-box */`,
      demoStyle: {
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        backgroundClip: 'content-box',
        padding: '20px',
        border: '10px dashed rgba(0,0,0,0.2)',
        color: 'white',
        textAlign: 'center'
      }
    },
    {
      id: 'background-origin',
      title: 'background-origin',
      description: 'پس منظر کی تصویر کی پوزیشننگ ایریا کہاں سے شروع ہوتی ہے۔',
      code: `background-origin: border-box;\n\n/* Other values: padding-box, content-box */`,
      demoStyle: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&w=100")',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'border-box',
        padding: '20px',
        border: '10px dashed rgba(0,0,0,0.2)',
        backgroundSize: '60px 60px'
      }
    },
    {
      id: 'background-blend-mode',
      title: 'background-blend-mode',
      description: 'پس منظر کی تصاویر ایک دوسرے کے ساتھ اور عنصر کے پس منظر کے رنگ کے ساتھ کیسے ملتی ہیں۔',
      code: `background-blend-mode: multiply;\n\n/* Other values: normal, screen, overlay, darken, lighten */`,
      demoStyle: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&w=800"), linear-gradient(135deg, #ff6b6b, #4ecdc4)',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    },
    {
      id: 'background-shorthand',
      title: 'background (Shorthand)',
      description: 'تمام پس منظر کی خصوصیات کو ایک پراپرٹی میں یکجا کرتا ہے۔',
      code: `background: #222 url("bg.jpg") no-repeat center center / cover fixed;`,
      demoStyle: {
        background: '#222 url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&w=800") no-repeat center center / cover',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }
    }
  ];

  // Complete example code with Urdu explanation
  const completeExampleCode = `/* === مکمل CSS پس منظر کی مثال === */
/* یہ کوڈ ایک خوبصورت ستاروں والی رات کی تھیم بناتا ہے */

body {
  /* بنیادی سیاہ پس منظر */
  background-color: #000000;
  
  /* ستاروں کی تصویر */
  background-image: url("stars-background.jpg");
  
  /* تصویر کو دہرانا بند کریں */
  background-repeat: no-repeat;
  
  /* تصویر کو مرکز میں رکھیں */
  background-position: center center;
  
  /* تصویر کو پورے ویب پیج پر پھیلائیں */
  background-size: cover;
  
  /* تصویر کو فکسڈ رکھیں (اسکرول نہ ہو) */
  background-attachment: fixed;
  
  /* پس منظر کو بورڈر تک پھیلائیں */
  background-clip: border-box;
  
  /* پس منظر کی پوزیشننگ بورڈر سے شروع کریں */
  background-origin: border-box;
  
  /* تصویر اور رنگ کا ملاپ ہلکا رکھیں */
  background-blend-mode: lighten;
}

/* مختصر ورژن: تمام پراپرٹیز ایک لائن میں */
body {
  background: #000 url("stars-background.jpg") no-repeat center center / cover fixed border-box border-box lighten;
}`;

  // Summary table data
  const summaryData = [
    { property: 'background-image', description: 'پس منظر کی تصویر مقرر کرتا ہے', values: 'url(), none, gradient' },
    { property: 'background-color', description: 'پس منظر کا رنگ مقرر کرتا ہے', values: 'color value, transparent' },
    { property: 'background-repeat', description: 'تصویر کی دہرائی کو کنٹرول کرتا ہے', values: 'repeat, no-repeat, repeat-x, repeat-y, space, round' },
    { property: 'background-position', description: 'تصویر کی پوزیشن مقرر کرتا ہے', values: 'top, bottom, left, right, center, x% y%, x-pos y-pos' },
    { property: 'background-size', description: 'تصویر کا سائز مقرر کرتا ہے', values: 'auto, cover, contain, length, percentage' },
    { property: 'background-attachment', description: 'تصویر اسکرول ہوتی ہے یا فکسڈ رہتی ہے', values: 'scroll, fixed, local' },
    { property: 'background-clip', description: 'پس منظر کہاں تک پھیلتا ہے', values: 'border-box, padding-box, content-box' },
    { property: 'background-origin', description: 'پس منظر کی پوزیشننگ ایریا', values: 'border-box, padding-box, content-box' },
    { property: 'background-blend-mode', description: 'تصاویر کا آپس میں ملاپ', values: 'normal, multiply, screen, overlay, darken, lighten, etc.' },
    { property: 'background (shorthand)', description: 'تمام خصوصیات کو یکجا کرتا ہے', values: '[color] [image] [position] / [size] [repeat] [attachment] [origin] [clip]' }
  ];

  return (
    <div className="chbackground-container" dir="rtl">
      
      {/* Header */}
      <header className="header">
        <h1>CSS پس منظر کی خصوصیات</h1>
        <p>CSS میں background اور background-image پراپرٹیز کسی بھی عنصر کے پس منظر میں تصویر لگانے اور اسے کنٹرول کرنے کے لیے استعمال ہوتی ہیں۔</p>
      </header>

      {/* Table of Contents */}
      <section className="toc">
        <h2>فہرست</h2>
        <div className="toc-grid">
          {backgroundProperties.map((prop) => (
            <button
              key={prop.id}
               style={{ fontSize: '18px', color: 'beige' }}
              className={`toc-item ${activeSection === prop.id ? 'active' : ''}`}
              onClick={() => setActiveSection(prop.id)}
            >
              <span className="emoji">🎨</span>
              <span>{prop.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Examples Section */}
      <section className="examples">
        {backgroundProperties.map((prop) => (
          <div 
            key={prop.id} 
            className={`example ${activeSection === prop.id ? 'active' : ''}`}
            id={prop.id}
          >
            <h2>{prop.title}</h2>
            
            <div className="explanation">
              <p>{prop.description}</p>
            </div>

            <div className="code-section">
              <div className="code-header">
              <h3 style={{color: '#ffe4c4'}}>کوڈ:</h3>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(prop.code, prop.id)}
                >
                  {copiedCode === prop.id ? 'کاپی ہو گیا!' : 'کاپی کریں'}
                </button>
              </div>
              <div className="code-block">
                <pre>{prop.code}</pre>
              </div>
            </div>

            <div className="result">
              <h3>نتیجہ:</h3>
              <div className="demo" style={prop.demoStyle}>
                <p style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                  {prop.title} کا ڈیمو
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Complete Example Section - SEPARATE AND PROMINENT */}
      <section className="complete-example-section" id="complete-example">
        <div className="example-header">
          <h2>🚀 مکمل عملی مثال</h2>
          <p className="section-intro">
            ذیل میں ایک مکمل عملی مثال دی گئی ہے جو تمام پس منظر کی خصوصیات کو ایک ساتھ استعمال کرتی ہے۔ 
            یہ مثال ایک خوبصورت ستاروں والی رات کی تھیم بناتی ہے جس میں ہر پراپرٹی کے استعمال کو واضح کیا گیا ہے۔
          </p>
        </div>

        <div className="example-card featured">
          <div className="code-section featured">
            <div className="code-header"> 
              <h3 style={{color: '#ffe4c4'}}>📝 مکمل CSS کوڈ (اردو تشریح کے ساتھ)</h3>
              <button 
                className="copy-btn featured"
                onClick={() => copyToClipboard(completeExampleCode, 'complete')}
              >
                {copiedCode === 'complete' ? '✅ کاپی ہو گیا!' : '📋 پورا کوڈ کاپی کریں'}
              </button>
            </div>
            <div className="code-block featured">
              <pre>{completeExampleCode}</pre>
            </div>
          </div>

          <div className="result">
            <h3>👁️ نتیجہ (دیکھیں کیسے نظر آتا ہے):</h3>
            <div className="demo featured" style={{
              backgroundColor: '#0a0a2a',
              backgroundImage: 'url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&w=800")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundAttachment: 'scroll',
              backgroundClip: 'border-box',
              backgroundOrigin: 'border-box',
              backgroundBlendMode: 'lighten',
              height: '300px',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}>
              <div style={{ 
                color: 'white', 
                textAlign: 'center', 
                padding: '40px 20px',
                background: 'rgba(0,0,0,0.6)',
                borderRadius: '12px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <h3 style={{ marginBottom: '15px', fontSize: '24px', color: '#9bbebeff' }}>✨ ستاروں والی رات ✨</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '500px', color: '#dfc4c4ff' }}>
                  یہ ایک مکمل پس منظر کی مثال ہے جس میں تمام CSS background properties استعمال کی گئی ہیں۔ 
                  اس کوڈ کو کاپی کر کے اپنے پروجیکٹ میں استعمال کریں!
                </p>
              </div>
            </div>
          </div>

          <div className="usage-tips">
            <h4>💡 استعمال کے نکات:</h4>
            <ul>
              <li>یہ کوڈ مکمل ویب پیج کے پس منظر کے لیے مثالی ہے</li>
              <li>ستاروں کی تصویر کی جگہ اپنی پسندیدہ تصویر استعمال کریں</li>
              <li>رنگوں اور blend-mode کو اپنی ضرورت کے مطابق تبدیل کریں</li>
              <li>مختصر ورژن بھی شامل ہے جو ایک لائن میں تمام properties کو combine کرتا ہے</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="summary" id="summary">
        <h2>خلاصہ جدول</h2>
        <div className="summary-table">
          <table>
            <thead>
              <tr>
                <th>پراپرٹی</th>
                <th>تفصیل</th>
                <th>قدریں</th>
              </tr>
            </thead>
            <tbody>
              {summaryData.map((row, index) => (
                <tr key={index}>
                  <td>{row.property}</td>
                  <td>{row.description}</td>
                  <td>{row.values}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CssBackground;