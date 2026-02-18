import React, { useState } from 'react';
import './CssDisplayGrid.css';

const CssDisplayGrid = () => {
  const [copiedSection, setCopiedSection] = useState(null);

  const copyToClipboard = (text, sectionName) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionName);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const CodeBlock = ({ title, code, language = 'css', sectionName }) => (
    <div className="code-block">
      <div className="code-header">
        <h3>{title}</h3>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(code, sectionName)}
        >
          📋 کاپی کریں
        </button>
      </div>
      <pre className={`code-content language-${language} scrollable-code`}>
        <code>{code}</code>
      </pre>
      {copiedSection === sectionName && (
        <div className="copy-message">
          ✅ کوڈ کاپی ہو گیا!
        </div>
      )}
    </div>
  );

  const Separator = () => <div className="separator">________________________________________</div>;

  return (
    <div className="css-grid-tutorial">
      {/* Header Section */}
      <header className="tutorial-header">
        <h1>🧩 CSS Display Grid — آسان اردو میں</h1>
        <p>Display: grid کا مطلب ہوتا ہے کہ آپ اپنے HTML کے اندر موجود elements کو صفوں (rows) اور کالموں (columns) میں بانٹ سکتے ہیں۔</p>
        <p>یہ ایسے ہے جیسے کوئی چوکور خانوں والا بورڈ ہو، اور آپ اپنے عناصر (elements) کو ان خانوں میں رکھ سکیں۔</p>
      </header>

      <Separator />

      {/* Section 1: Grid Container and Items */}
      <section className="tutorial-section">
        <h2>🧱 Grid Container اور Grid Items</h2>
        <p>جب آپ کسی container (مثلاً &lt;div&gt;) کو display: grid; دیتے ہیں</p>
        <p>تو اس کے اندر کے تمام elements خود بخود grid items بن جاتے ہیں۔</p>
        <p>مثلاً:</p>
        
        <CodeBlock
          title="HTML مثال"
          code={`<div class="container">
  <div>Home</div>
  <div>About</div>
  <div>Shop</div>
  <div>Contact</div>
</div>`}
          language="html"
          sectionName="html-example"
        />

        <CodeBlock
          title="CSS گرڈ کنٹینر"
          code={`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}`}
          sectionName="grid-container"
        />
      </section>

      <Separator />

      {/* Section 2: FR Units */}
      <section className="tutorial-section">
        <h2>💡 1fr کیا ہے؟</h2>
        <p>fr کا مطلب ہوتا ہے fraction یعنی "حصہ"۔</p>
        <p>اگر آپ 1fr 1fr 1fr لکھتے ہیں تو اس کا مطلب ہے کہ تین برابر حصے بناؤ۔</p>
        <p>یعنی ہر column کو برابر جگہ ملے۔</p>
        <p>اگر آپ 2fr 1fr لکھیں،</p>
        <p>تو مطلب ہوگا: پہلا column دو حصے لے، دوسرا column ایک حصہ۔</p>
      </section>

      <Separator />

      {/* Section 3: Different Column Methods */}
      <section className="tutorial-section">
        <h2>🧭 Columns بنانے کے دوسرے طریقے:</h2>
        <p>1. Fix Widths</p>
        <p>2. grid-template-columns: 200px 200px 200px;</p>
        <p>👉 ہر column کی چوڑائی 200px ہو گی۔</p>
        <p>3. Auto Fit (Responsive Layout)</p>
        <p>4. grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));</p>
        <p>👉 یہ خود بخود جگہ کے حساب سے نئے columns بناتا ہے — موبائل پر خود adjust ہو جاتا ہے۔</p>
      </section>

      <Separator />

      {/* Section 4: Complete Example Page */}
      <section className="tutorial-section">
        <h2>🌐 اب بناتے ہیں ایک Example Page:</h2>
        <p>HTML:</p>
        
        <CodeBlock
          title="مکمل HTML کوڈ"
          code={`<body>
  <header class="navbar">
    <h1>My Laptop Store</h1>
    <nav class="nav-links">
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Deals</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">FAQ</a>
      <a href="#">Blog</a>
      <a href="#">Login</a>
    </nav>
  </header>

  <main class="product-grid">
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 1"><p>Laptop 1</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 2"><p>Laptop 2</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 3"><p>Laptop 3</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 4"><p>Laptop 4</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 5"><p>Laptop 5</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 6"><p>Laptop 6</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 7"><p>Laptop 7</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 8"><p>Laptop 8</p></div>
  </main>

  <footer class="footer">
    <p>© 2025 My Laptop Store. All rights reserved.</p>
  </footer>
</body>`}
          language="html"
          sectionName="complete-html-example"
        />

        <p>CSS:</p>

        <CodeBlock
          title="مکمل CSS کوڈ"
          code={`body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f4f4f4;
}

/* Navbar */
.navbar {
  background: #222;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
}

.nav-links {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.nav-links a {
  color: #00ffcc;
  text-decoration: none;
  background: #333;
  padding: 8px;
  border-radius: 6px;
  transition: 0.3s;
}

.nav-links a:hover {
  background: #00ffcc;
  color: #222;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 30px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  padding: 10px;
}

.card img {
  width: 100%;
  border-radius: 8px;
}

.footer {
  text-align: center;
  padding: 20px;
  background: #222;
  color: #aaa;
}`}
          sectionName="complete-css-example"
        />
      </section>

      {/* Section 5: Percentage Usage */}
      <section className="tutorial-section">
        <h2>🎯 Grid میں % (پرسنٹیج) کا استعمال</h2>
        <p>جب آپ grid بناتے ہیں تو آپ columns کی چوڑائی percentage (%) میں بھی دے سکتے ہیں۔</p>
        <p>اس کا مطلب ہوتا ہے:</p>
        <p><strong>"کل container کی چوڑائی میں سے اتنے فیصد (%) حصے پر یہ column ہو۔"</strong></p>
        <p>مثال:</p>
        
        <CodeBlock
          title="Percentage مثال"
          code={`grid-template-columns: 50% 50%;
👉 مطلب: دو برابر columns بنیں گے،
پہلا آدھا container لے گا، دوسرا آدھا۔`}
          sectionName="percentage-example"
        />
      </section>

      <Separator />

      {/* Section 6: FR vs Percentage Comparison */}
      <section className="tutorial-section">
        <h2>🔹 fr اور % میں فرق</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>پہلو</th>
                <th>% (Percentage)</th>
                <th>fr (Fraction)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>بنیاد</td>
                <td>container کی مکمل چوڑائی پر</td>
                <td>باقی بچی ہوئی space پر</td>
              </tr>
              <tr>
                <td>لچک</td>
                <td>تھوڑی rigid ہوتی ہے</td>
                <td>زیادہ flexible ہوتی ہے</td>
              </tr>
              <tr>
                <td>Responsive</td>
                <td>manually adjust کرنا پڑتا ہے</td>
                <td>خود adjust ہو جاتا ہے</td>
              </tr>
              <tr>
                <td>مثال</td>
                <td>50% 50%</td>
                <td>1fr 1fr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>🔸 یاد رکھو:</strong></p>
        <p>1fr کا مطلب ہے "equal share of available space"</p>
        <p>جبکہ % container کی fixed فیصد جگہ لیتا ہے۔</p>
      </section>

      <Separator />
      <Separator />

      {/* Section 7: Poppins Font Explanation */}
      <section className="tutorial-section">
        <h2>🧩 وضاحت فونٹ استعمال کرنے کی Poppins:</h2>
        <p>CSS میں اگر آپ لکھتے ہو:</p>
        <p><code>font-family: 'Poppins', sans-serif;</code></p>
        <p>تو براؤزر چیک کرتا ہے:</p>
        <p>1. کیا یہ فونٹ لوکل سسٹم (یعنی آپ کے کمپیوٹر یا موبائل) میں پہلے سے انسٹال ہے؟</p>
        <p>2. اگر نہیں، تو fallback فونٹ (یعنی sans-serif) استعمال کرے گا۔</p>
        <p>یعنی بغیر import کے Poppins کام نہیں کرے گا،</p>
        <p>بس کوئی دوسرا مشابہ فونٹ نظر آئے گا۔</p>
      </section>

      <Separator />

      {/* Section 8: Correct Font Import Methods */}
      <section className="tutorial-section">
        <h2>✅ صحیح طریقہ: Import یا Link شامل کرنا</h2>
        
        <div className="method-box">
          <h3>🔹 طریقہ 1: Google Fonts سے &lt;link&gt; tag (HTML میں)</h3>
          <p>اپنے &lt;head&gt; کے اندر یہ لائن شامل کرو 👇</p>
          
          <CodeBlock
            title="HTML میں Font Link"
            code={`<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">`}
            language="html"
            sectionName="font-link-html"
          />

          <p>پھر CSS میں:</p>

          <CodeBlock
            title="CSS میں Font استعمال"
            code={`body {
  font-family: 'Poppins', sans-serif;
}`}
            sectionName="font-css"
          />
        </div>

        <div className="method-box">
          <h3>🔹 طریقہ 2: Import (CSS کے شروع میں)</h3>
          <p>اگر آپ الگ CSS فائل استعمال کر رہے ہیں تو سب سے اوپر یہ لکھ دو 👇</p>

          <CodeBlock
            title="CSS Import طریقہ"
            code={`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}`}
            sectionName="font-import"
          />
        </div>

        <p><strong>🔸 یاد رکھنے والی بات:</strong></p>
        <p>Import کے بغیر فونٹ صرف fallback سے replace ہو جائے گا۔</p>
        <p>مثال: اگر Poppins موجود نہیں، تو براؤزر Arial یا کوئی دوسرا sans-serif فونٹ استعمال کرے گا۔</p>
      </section>

      <Separator />

      {/* Section 9: Final Message Chapter 1 */}
      <section className="tutorial-section final-message-section">
        <h2>🎓 آخری پیغام (اردو رسم الخط میں)</h2>
        <p>مبارک ہو 🌟</p>
        <p>آپ نے Display Grid کا پورا چیپٹر مکمل کر لیا!</p>
        <p>اب آپ جان چکے ہیں کہ display: grid; سے ویب پیج میں چیزوں کو کالمز اور روز میں کس طرح ترتیب دیا جاتا ہے۔</p>
        <p>آپ 1fr، auto-fit، اور minmax() جیسے concepts سمجھ چکے ہیں — جو Responsive ویب ڈیزائن کے بنیادی ہتھیار ہیں 💪</p>
      </section>

      <Separator />

      {/* Section 10: Complete Poppins Import Method */}
      <section className="tutorial-section">
        <h2>مکمل فانٹ Poppins امپورٹ کا طریقہ</h2>
        <p>یہ رہا تمہارا پورا، مکمل اور چلنے والا HTML + CSS کوڈ جس میں Poppins فونٹ صحیح طریقے سے شامل کیا گیا ہے (یعنی Google Fonts سے import کیا گیا ہے)۔</p>
        <p>یہ مثال ایک چھوٹی سی Laptop Store Grid Website دکھاتی ہے۔ 💻</p>

        <Separator />

        <h3>🌐 HTML فائل (index.html)</h3>
        <CodeBlock
          title="مکمل HTML کوڈ"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Laptop Store</title>

  <!-- ✅ Google Fonts: Poppins -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- ✅ CSS file -->
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <header class="navbar">
    <h1>💻 My Laptop Store</h1>
    <nav class="nav-links">
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Deals</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">FAQ</a>
      <a href="#">Blog</a>
      <a href="#">Login</a>
    </nav>
  </header>

  <main class="product-grid">
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 1"><p>Laptop 1</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 2"><p>Laptop 2</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 3"><p>Laptop 3</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 4"><p>Laptop 4</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 5"><p>Laptop 5</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 6"><p>Laptop 6</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 7"><p>Laptop 7</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 8"><p>Laptop 8</p></div>
  </main>

  <footer class="footer">
    <p>© 2025 My Laptop Store. All rights reserved.</p>
  </footer>
</body>
</html>`}
          language="html"
          sectionName="complete-html-file"
        />

        <Separator />

        <h3>🎨 CSS فائل (style.css)</h3>
        <CodeBlock
          title="مکمل CSS کوڈ"
          code={`/* ✅ Import Google Font (Optional if already linked in HTML)
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
*/

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f6f8fa;
}

/* --- Navbar --- */
.navbar {
  background: #222;
  color: #fff;
  padding: 15px 20px;
  text-align: center;
}

.navbar h1 {
  margin: 0;
  font-weight: 600;
  font-size: 1.6rem;
}

.nav-links {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  margin-top: 15px;
}

.nav-links a {
  color: #00ffcc;
  text-decoration: none;
  background: #333;
  padding: 8px 0;
  border-radius: 6px;
  transition: 0.3s;
  font-weight: 500;
}

.nav-links a:hover {
  background: #00ffcc;
  color: #222;
}

/* --- Product Grid --- */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 30px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  padding: 15px;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  border-radius: 8px;
}

.footer {
  text-align: center;
  padding: 20px;
  background: #222;
  color: #aaa;
  font-size: 14px;
}`}
          sectionName="complete-css-file"
        />

        <Separator />

        <div className="important-note">
          <h3>🌟 اب مکمل سمجھ لو:</h3>
          <p>✔️ font-family: 'Poppins', sans-serif; صرف تب کام کرے گا</p>
          <p>جب تم Google Fonts سے یہ font import کرو گے۔</p>
          <p>✔️ &lt;link&gt; طریقہ زیادہ بہتر ہے کیونکہ HTML کے head میں لگانے سے</p>
          <p>font جلدی load ہوتا ہے۔</p>
        </div>
      </section>

      <Separator />

      {/* Section 11: Final Urdu Message */}
      <section className="tutorial-section final-urdu-message">
        <h2>🎓 اردو رسم الخط میں آخری پیغام</h2>
        <p>🌸 شاباش! طلباءِ کرام! 🌸</p>
        <p>آپ نے آج سیکھا کہ:</p>
        <ul>
          <li>Grid system میں 1fr, %, auto-fit, اور minmax() کیسے کام کرتے ہیں۔</li>
          <li>اور ساتھ ہی فونٹس کو صحیح طریقے سے import کرنا بھی سیکھ لیا۔</li>
        </ul>
        <p>💪 اب آپ کے پاس وہ تمام بنیادی skills ہیں جو ایک responsive professional webpage بنانے کے لیے درکار ہوتے ہیں۔</p>
        <p>🎉 مبارک ہو! آپ نے Display Grid کا مکمل باب کامیابی سے مکمل کر لیا!</p>
      </section>

      {/* Section 12: minmax() Explanation */}
      <section className="tutorial-section">
        <h2>🎯 minmax() کیا ہے؟</h2>
        <p>minmax() ایک فنکشن ہے جو grid کو لچکدار (flexible) بناتا ہے۔</p>
        <p>یہ کہتا ہے:</p>
        <p><strong>"کالم کی کم از کم (minimum) اور زیادہ سے زیادہ (maximum) چوڑائی بتاؤ، تاکہ وہ خود بخود screen کے حساب سے adjust ہو جائے۔"</strong></p>
        
        <Separator />

        <h3>🧩 Syntax (فارمیٹ):</h3>
        <CodeBlock
          title="minmax() Syntax"
          code={`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`}
          sectionName="minmax-syntax"
        />

        <h3>اب سمجھو کہ اس میں کیا ہو رہا ہے 👇</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>حصہ</th>
                <th>مطلب</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>auto-fit</td>
                <td>جتنے columns screen میں آ سکتے ہیں، اتنے خود بنا لو۔</td>
              </tr>
              <tr>
                <td>minmax(200px, 1fr)</td>
                <td>ہر column کی کم از کم چوڑائی 200px ہو، لیکن زیادہ سے زیادہ 1fr تک پھیل سکتا ہے۔</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <h3>🎨 مثال سمجھو:</h3>
        <p>فرض کرو تمہارے پاس 8 product cards ہیں۔</p>
        <p>جب screen بڑی ہوگی تو یہ 4 یا 5 columns میں نظر آئیں گے،</p>
        <p>لیکن جب موبائل پر screen چھوٹی ہوگی،</p>
        <p>تو grid خود adjust ہو کر 1 یا 2 columns بنا دے گا۔</p>
        <p>یعنی کوئی scroll نہیں ہوگا، سب کچھ responsive بن جائے گا! ✅</p>

        <Separator />

        <h3>🔹 ایک اور مثال:</h3>
        <p>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));</p>
        <p>👉 مطلب:</p>
        <p>ہر grid card کم سے کم 250px کا ہو۔</p>
        <p>اگر screen میں جگہ زیادہ ہے تو column 1fr (برابر حصہ) تک پھیل جائے۔</p>

        <Separator />

        <h3>🔸 اگر minmax نہ لگاؤ:</h3>
        <p>grid-template-columns: repeat(auto-fit, 1fr);</p>
        <p>تو جب screen چھوٹی ہوگی، cards بہت تنگ ہو جائیں گے</p>
        <p>(چھوٹے boxes بن جائیں گے)۔</p>
        <p>لیکن minmax(200px, 1fr) لگانے سے</p>
        <p>minimum limit لگ جاتی ہے کہ card اس سے چھوٹا نہ ہو۔ 🎯</p>

        <Separator />

        <h3>💡 خلاصہ:</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>تصور</th>
                <th>مطلب</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>minmax(کم سے کم, زیادہ سے زیادہ)</td>
                <td>چوڑائی کی حدود طے کرنا</td>
              </tr>
              <tr>
                <td>فائدہ</td>
                <td>Responsive design خود بن جاتا ہے</td>
              </tr>
              <tr>
                <td>عام استعمال</td>
                <td>repeat(auto-fit, minmax(200px, 1fr))</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>اب تم Display Grid کے تین بڑے concepts سیکھ چکے ہو:</p>
        <div className="concepts-grid">
          <div className="concept-item">✅ fr = flexible share</div>
          <div className="concept-item">✅ % = fixed width</div>
          <div className="concept-item">✅ minmax() = flexible + limit control</div>
        </div>
      </section>
      <Separator/>

      {/* Final Achievement Section */}
      <section className="achievement-section">
        <h2>🎓 مبارک ہو! آپ نے CSS Display Grid کا مکمل کورس مکمل کر لیا! 🌟</h2>
        <div className="achievement-badge">
          <span>🏆 CSS Grid Master 🏆</span>
        </div>
        <p>اب آپ professional level کے CSS Grid concepts سمجھ چکے ہیں اور responsive websites بنا سکتے ہیں!</p>
      </section>
        {/* Section 13: Grid Areas Introduction */}
      <section className="tutorial-section">
        <h2>اب تم Display Grid کا دوسرا باب سیکھنے جا رہے ہو —</h2>
        <p>یعنی Grid Areas & Layout Design 🎨</p>
        <p>یہ باب تمہیں سکھائے گا کہ کس طرح تم grid کے اندر</p>
        <p>Header, Sidebar, Main Content, اور Footer کو</p>
        <p>نام دے کر (named areas) ترتیب سے رکھ سکتے ہو۔</p>
        <p>چلو شروع کرتے ہیں بلکل آسان، 16 سالہ طالب علم کے انداز میں 👇</p>

        <Separator />

        <h2>🎯 Grid Areas کیا ہوتی ہیں؟</h2>
        <p>جب ہم display: grid; استعمال کرتے ہیں</p>
        <p>تو ہم ہر cell (یعنی grid کا خانہ) کو ایک نام دے سکتے ہیں۔</p>
        <p>پھر انہی ناموں کے ذریعے ہم پورا صفہ (layout) design کر لیتے ہیں۔</p>

        <Separator />

        <h3>🧩 Step 1: بنیادی HTML Structure</h3>
        <CodeBlock
          title="HTML Structure"
          code={`<body>
  <div class="container">
    <header class="header">Header</header>
    <nav class="sidebar">Sidebar</nav>
    <main class="main">Main Content</main>
    <footer class="footer">Footer</footer>
  </div>
</body>`}
          language="html"
          sectionName="grid-areas-html"
        />

        <p>یہ چار حصے ہیں:</p>
        <ul>
          <li>Header</li>
          <li>Sidebar</li>
          <li>Main content</li>
          <li>Footer</li>
        </ul>

        <Separator />

        <h3>🎨 Step 2: Grid Container کے اندر Design بنانا</h3>
        <p>اب CSS میں ہم یہ لکھتے ہیں 👇</p>
        
        <CodeBlock
          title="Grid Container Design"
          code={`.container {
  display: grid;
  height: 100vh; /* پورے صفحے کی اونچائی */
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}`}
          sectionName="grid-container-design"
        />

        <p>اب دیکھو کیا ہوا 👇</p>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Row</th>
                <th>Columns</th>
                <th>Layout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>پہلی row</td>
                <td>2 columns</td>
                <td>دونوں header ہوں گے</td>
              </tr>
              <tr>
                <td>دوسری row</td>
                <td>2 columns</td>
                <td>ایک sidebar، دوسرا main content</td>
              </tr>
              <tr>
                <td>تیسری row</td>
                <td>2 columns</td>
                <td>دونوں footer ہوں گے</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <h3>🧱 Step 3: Grid Areas کو Elements سے جوڑنا</h3>
        <p>اب ہر element کو بتاؤ کہ وہ کون سا area ہے 👇</p>

        <CodeBlock
          title="Grid Areas Elements"
          code={`.header {
  grid-area: header;
  background: #00bcd4;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
}

.sidebar {
  grid-area: sidebar;
  background: #263238;
  color: white;
  padding: 20px;
}

.main {
  grid-area: main;
  background: #f4f4f4;
  padding: 20px;
}

.footer {
  grid-area: footer;
  background: #212121;
  color: #aaa;
  text-align: center;
  padding: 15px;
}`}
          sectionName="grid-areas-elements"
        />
      </section>

      <Separator />

      {/* Section 14: Complete Grid Areas Example */}
      <section className="tutorial-section">
        <h2>🌐 مکمل Example (HTML + CSS)</h2>
        <p>یہ Code تم براہِ راست اپنے browser میں چلا سکتے ہو 👇</p>

        <Separator />

        <h3>✅ index.html</h3>
        <CodeBlock
          title="مکمل HTML"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Areas Layout</title>

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <header class="header">📘 Header</header>
    <nav class="sidebar">
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Deals</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <main class="main">
      <h2>Main Content Area</h2>
      <p>یہ جگہ آرٹیکلز، تصاویر یا پروڈکٹ لسٹنگ کے لیے استعمال ہوتی ہے۔</p>
    </main>
    <footer class="footer">© 2025 Grid Layout Design</footer>
  </div>
</body>
</html>`}
          language="html"
          sectionName="complete-grid-areas-html"
        />

        <Separator />

        <h3>✅ style.css</h3>
        <CodeBlock
          title="مکمل CSS"
          code={`body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

/* Grid Container */
.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

/* Header */
.header {
  grid-area: header;
  background: #00bcd4;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 1.6rem;
  font-weight: 600;
}

/* Sidebar */
.sidebar {
  grid-area: sidebar;
  background: #263238;
  color: white;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 15px 0;
  cursor: pointer;
  transition: 0.3s;
}

.sidebar li:hover {
  color: #00bcd4;
}

/* Main Content */
.main {
  grid-area: main;
  background: #f4f4f4;
  padding: 25px;
}

/* Footer */
.footer {
  grid-area: footer;
  background: #212121;
  color: #ccc;
  text-align: center;
  padding: 20px;
  font-size: 14px;
}`}
          sectionName="complete-grid-areas-css"
        />

        <Separator />

        <h3>💡 Responsive Version (Bonus Tip)</h3>
        <p>اگر تم چاہو کہ موبائل پر Sidebar نیچے آ جائے</p>
        <p>تو بس ایک Media Query لکھو 👇</p>

        <CodeBlock
          title="Responsive Media Query"
          code={`@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: 80px auto auto 60px;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }
}`}
          sectionName="responsive-media-query"
        />

        <p>اب موبائل پر Header → Main → Sidebar → Footer</p>
        <p>ایک سیدھی لائن میں آ جائیں گے 📱</p>
      </section>

      <Separator />

      {/* Section 15: Final Grid Areas Message */}
      <section className="tutorial-section final-message-section">
        <h2>🎓 آخری پیغام (اردو رسم الخط میں)</h2>
        <p>🌟 مبارک ہو ساتھی طالب علمو! 🌟</p>
        <p>آپ نے Grid Areas کا پورا چیپٹر مکمل کر لیا!</p>
        <p>اب آپ جان چکے ہیں کہ:</p>
        <ul>
          <li>grid کو rows اور columns میں کیسے بانٹنا ہے</li>
          <li>grid areas کے نام کیسے دینے ہیں</li>
          <li>اور responsive layout کیسے بنانا ہے</li>
        </ul>
        <p>اب آپ چاہیں تو پورا ویب پیج بنا سکتے ہیں</p>
        <p>جس میں header, sidebar, main, footer — سب اپنی جگہ درست بیٹھے ہوں۔</p>
        <p>👏 آپ اب Professional CSS Grid Designer بننے کے راستے پر ہیں!</p>
      </section>

      <Separator />

      {/* Section 16: Responsive Grid Areas Course */}
      <section className="tutorial-section">
        <h2>باب دوم: ریسپانسیو گرڈ ایریاز کا مکمل کورس</h2>
        <h3>📘 تعارفی سبق: جدید ویب ڈیزائن کا فن</h3>
        <p>پیارے طالب علمو! آج ہم CSS Grid کے اسرار و رموز سیکھیں گے۔ یہ وہ فن ہے جو آپ کی ویب ڈیزائننگ کی مہارت کو نئی بلندیوں پر لے جائے گا۔ آج کے دور میں جہاں ہر شخص موبائل، ٹیبلٹ اور ڈیسک ٹاپ پر انٹرنیٹ استعمال کرتا ہے، وہاں ایک ہی ویب سائٹ کا تمام ڈیوائسز پر خود بخود ڈھل جانا بہت اہم ہے۔</p>
        
        <h3>🎯 ہمارا مقصد</h3>
        <p>ہم ایک ایسا ویب لے آؤٹ بنائیں گے جو:</p>
        <ul>
          <li>ڈیسک ٹاپ پر شاندار نظر آئے</li>
          <li>ٹیبلٹ پر مکمل فٹ ہو</li>
          <li>موبائل پر یکساں خوبصورت رہے</li>
        </ul>

        <Separator />

        <h3>🛠️ عملی حصہ: کوڈ کے ساتھ سفر</h3>
        <h4>📄 HTML ڈھانچہ (بنیادی ساخت)</h4>
        
        <CodeBlock
          title="مکمل HTML ڈھانچہ"
          code={`<!DOCTYPE html>
<html lang="ur">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مکمل ریسپانسیو گرڈ لے آؤٹ</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header class="header">📘 ہیڈر</header>
        <nav class="sidebar">
            <ul>
                <li>🏠 ہوم</li>
                <li>🛍️ شاپ</li>
                <li>🔥 ڈیلز</li>
                <li>ℹ️ ہمارے بارے میں</li>
                <li>📞 رابطہ</li>
                <li>⭐ پسندیدہ</li>
                <li>📚 بلاگ</li>
                <li>⚙️ ترتیبات</li>
            </ul>
        </nav>
        <main class="main">
            <h2>مرکزی مواد</h2>
            <p>یہ جگہ آرٹیکلز، تصاویر یا پروڈکٹ لسٹنگ کے لیے استعمال ہوتی ہے۔</p>
            <div class="content-box">
                <p>یہ ایک مثال ہے کہ content کو max-width: 400px سے کیسے limit کریں۔</p>
            </div>
        </main>
        <footer class="footer">© 2025 گرڈ لے آؤٹ ڈیزائن</footer>
    </div>
</body>
</html>`}
          language="html"
          sectionName="responsive-html-structure"
        />

        <Separator />

        <h3>🎨 CSS اسٹائلنگ: موبائل فرسٹ اپروچ</h3>
        <h4>📱 موبائل ویو (ڈیفالٹ اسٹائلز)</h4>

        <CodeBlock
          title="موبائل فرسٹ CSS"
          code={`/* === بنیادی ریسیٹ === */
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #f0f2f5;
    line-height: 1.6;
}

/* === گرڈ کنٹینر === */
.container {
    display: grid;
    min-height: 100vh;
    
    /* 📱 موبائل لے آؤٹ */
    grid-template-columns: 1fr;
    grid-template-rows: 70px auto auto 50px;
    grid-template-areas:
        "header"
        "main"
        "sidebar"
        "footer";
    gap: 10px;
    padding: 10px;
}

/* === ہیڈر اسٹائلز === */
.header {
    grid-area: header;
    background: linear-gradient(135deg, #00bcd4, #0097a7);
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 1.4rem;
    font-weight: 600;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* === سائیڈبار اسٹائلز === */
.sidebar {
    grid-area: sidebar;
    background: #263238;
    color: white;
    padding: 20px;
    border-radius: 8px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar li {
    margin: 12px 0;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 5px;
}

.sidebar li:hover {
    background: #37474f;
    color: #00bcd4;
    transform: translateX(5px);
}

/* === مرکزی مواد === */
.main {
    grid-area: main;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* === فوٹر === */
.footer {
    grid-area: footer;
    background: #212121;
    color: #ccc;
    text-align: center;
    padding: 15px;
    font-size: 14px;
    border-radius: 8px;
}

/* === max-width کی عملی مثال === */
.content-box {
    background: #e3f2fd;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid #00bcd4;
    max-width: 400px;
    margin: 20px 0;
}`}
          sectionName="mobile-first-css"
        />

        <Separator />

        <h3>🔄 میڈیا کوئیریز: ریسپانسیو جادو</h3>
        <h4>💻 ٹیبلٹ ویو (768px سے اوپر)</h4>

        <CodeBlock
          title="ٹیبلٹ میڈیا کوئری"
          code={`@media (min-width: 768px) {
    .container {
        /* 💻 ٹیبلٹ لے آؤٹ */
        grid-template-columns: 200px 1fr;
        grid-template-rows: 80px 1fr 60px;
        grid-template-areas:
            "header header"
            "sidebar main"
            "footer footer";
        gap: 15px;
        padding: 15px;
    }
    
    .header {
        font-size: 1.6rem;
        padding: 20px;
    }
    
    .sidebar li {
        margin: 15px 0;
    }
}`}
          sectionName="tablet-media-query"
        />

        <h4>🖥️ ڈیسک ٹاپ ویو (1024px سے اوپر)</h4>

        <CodeBlock
          title="ڈیسک ٹاپ میڈیا کوئری"
          code={`@media (min-width: 1024px) {
    .container {
        /* 🖥️ ڈیسک ٹاپ لے آؤٹ */
        grid-template-columns: 250px 1fr;
        grid-template-rows: 90px 1fr 70px;
        gap: 20px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .header {
        font-size: 1.8rem;
        padding: 25px;
    }
    
    .main {
        padding: 30px;
    }
    
    .content-box {
        margin: 30px 0;
    }
}`}
          sectionName="desktop-media-query"
        />
      </section>

      <Separator />

      {/* Section 17: Min and Max Width Explanation */}
      <section className="tutorial-section">
        <h2>🎯 min-width اور max-width کی مکمل سمجھ</h2>
        
        <h3>🔸 max-width: 400px کی عملی تفہیم</h3>
        <CodeBlock
          title="max-width مثال"
          code={`content-box {
    max-width: 400px;
}`}
          sectionName="max-width-example"
        />
        <p>سادہ اردو میں مطلب:</p>
        <p><strong>"اس باکس کی چوڑائی 400 پکسلز سے زیادہ نہیں ہو سکتی، چاہے اسے کتنی ہی جگہ میسر کیوں نہ ہو۔"</strong></p>
        <p>عملی مثال:</p>
        <ul>
          <li>اگر والد عنصر کی چوڑائی 500px ہے → باکس 400px کی رہے گی</li>
          <li>اگر والد عنصر کی چوڑائی 300px ہے → باکس 300px کی ہوگی</li>
        </ul>

        <h3>🔸 min-width: 300px کی عملی تفہیم</h3>
        <CodeBlock
          title="min-width مثال"
          code={`sidebar {
    min-width: 300px;
}`}
          sectionName="min-width-example"
        />
        <p>سادہ اردو میں مطلب:</p>
        <p><strong>"سائیڈبار کی چوڑائی 300 پکسلز سے کم نہیں ہو سکتی، چاہے جگہ کتنی ہی کم کیوں نہ ہو۔"</strong></p>

        <Separator />

        <h3>📊 میڈیا کوئیری کی اقسام</h3>
        
        <h4>1. موبائل کے لیے (max-width)</h4>
        <CodeBlock
          title="موبائل میڈیا کوئیری"
          code={`@media (max-width: 767px) {
    /* اسکرین 767px یا اس سے چھوٹی ہو تو یہ اسٹائلز چلیں گی */
}`}
          sectionName="mobile-media-query"
        />

        <h4>2. ٹیبلٹ کے لیے (دونوں limits)</h4>
        <CodeBlock
          title="ٹیبلٹ میڈیا کوئیری"
          code={`@media (min-width: 768px) and (max-width: 1023px) {
    /* اسکرین 768px سے 1023px کے درمیان ہو تو یہ اسٹائلز چلیں گی */
}`}
          sectionName="tablet-range-media-query"
        />

        <h4>3. ڈیسک ٹاپ کے لیے (min-width)</h4>
        <CodeBlock
          title="ڈیسک ٹاپ میڈیا کوئیری"
          code={`@media (min-width: 1024px) {
    /* اسکرین 1024px یا اس سے بڑی ہو تو یہ اسٹائلز چلیں گی */
}`}
          sectionName="desktop-min-media-query"
        />

        <Separator />

        <h3>🌟 ریسپانسیو رویے کا خلاصہ</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>ڈیوائس</th>
                <th>لے آؤٹ</th>
                <th>سائیڈبار</th>
                <th>max-width کا اثر</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>📱 موبائل</td>
                <td>ہیڈر → مرکزی مواد → سائیڈبار → فوٹر</td>
                <td>نیچے آجاتی ہے</td>
                <td>400px سے زیادہ نہیں بڑھتا</td>
              </tr>
              <tr>
                <td>💻 ٹیبلٹ</td>
                <td>ہیڈر (اوپر) + سائیڈبار اور مرکزی مواد (نیچے)</td>
                <td>بائیں طرف</td>
                <td>400px تک محدود</td>
              </tr>
              <tr>
                <td>🖥️ ڈیسک ٹاپ</td>
                <td>ہیڈر (اوپر) + سائیڈبار اور مرکزی مواد (نیچے)</td>
                <td>بائیں طرف</td>
                <td>400px تک محدود</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <h3>💡 یاد رکھنے کے اہم نکات</h3>
        
        <h4>✅ min-width اور max-width کا فرق</h4>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>پراپرٹی</th>
                <th>مطلب</th>
                <th>عملی استعمال</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>max-width</td>
                <td>زیادہ سے زیادہ حد</td>
                <td>تصاویر، ویڈیوز، باکسز کو limit کرنے کے لیے</td>
              </tr>
              <tr>
                <td>min-width</td>
                <td>کم سے کم حد</td>
                <td>بٹنز، مینوز، سائیڈبارز کے لیے</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>✅ موبائل فرسٹ کے فوائد</h4>
        <ol>
          <li>بہتر کارکردگی - کم ڈیوائسز کے لیے ہلکا کوڈ</li>
          <li>آسان ترقی - چھوٹے سے بڑے کی طرف سفر</li>
          <li>بہتر SEO - سرچ انجن موبائل فرسٹ سائٹس کو ترجیح دیتے ہیں</li>
        </ol>

        <Separator />

        <h3>🔍 عملی مشاہدہ کی ہدایات</h3>
        <p>آپ اس کوڈ کو عملی طور پر آزمائیں:</p>
        <ol>
          <li>براؤزر کھولیں اور ویب پیج لوڈ کریں</li>
          <li>براؤزر ونڈو کی چوڑائی کو تبدیل کریں</li>
          <li>مشاہدہ کریں کہ کیسے لے آؤٹ خود بخود ڈھل جاتا ہے</li>
          <li>موبائل ڈیوائس پر ٹیسٹ کریں</li>
        </ol>

        <Separator />

        <h3>🎓 اختتامی کلمات</h3>
        <p>پیارے طالب علمو! آج ہم نے سیکھا کہ کیسے CSS Grid اور میڈیا کوئیریز کے ذریعے پیشہ ورانہ ریسپانسیو ویب لے آؤٹ تیار کیا جاتا ہے۔ یہ وہ مہارت ہے جو آپ کو جدید ویب ڈیزائن کی دنیا میں نمایاں کرے گی۔</p>
        <p><strong>یاد رکھیں:</strong></p>
        <p><em>"اچھا ڈیزائن وہ نہیں جو صرف ڈیسک ٹاپ پر خوبصورت لگے، بلکہ وہ ہے جو ہر ڈیوائس پر یکساں خوبصورت اور قابل استعمال ہو۔"</em></p>

        <Separator />

        <div className="final-message-section">
          <p>🌹 اللہ آپ کے علم میں برکت عطا فرمائے اور آپ کو اس میدان میں کامیابی عطا فرمائے! 🌹</p>
        </div>
      </section>

      <Separator />

      {/* Final Achievement Section */}
      <section className="achievement-section">
        <h2>🎓 مبارک ہو! آپ نے CSS Display Grid کا مکمل کورس مکمل کر لیا! 🌟</h2>
        <div className="achievement-badge">
          <span>🏆 CSS Grid Master 🏆</span>
        </div>
        <p>اب آپ professional level کے CSS Grid concepts سمجھ چکے ہیں اور responsive websites بنا سکتے ہیں!</p>
      </section>
            <Separator />

      {/* Section 18: Grid + Flexbox Combo */}
      <section className="tutorial-section">
        <h2>اب تم داخل ہو گئے ہو Advanced Layout Design کی دنیا میں —</h2>
        <p>جہاں Grid + Flexbox ایک ساتھ مل کر Professional Web Layouts بناتے ہیں۔</p>
        <p>یہ چیپٹر تمہیں سکھائے گا کہ کب grid استعمال کرنی ہے، کب flexbox،</p>
        <p>اور دونوں کو ملا کر responsive homepage کیسے بنایا جاتا ہے۔</p>

        <Separator />

        <h2>🧭 چیپٹر کا نام:</h2>
        <h3>Grid + Flexbox Combo Layout</h3>
        <p>(Modern Homepage Design in Urdu Style)</p>

        <Separator />

        <h2>🎯 مقصد:</h2>
        <p>ہم ایک مکمل Homepage Layout بنائیں گے جس میں ہوں گے:</p>
        <ol>
          <li>Header (navbar with logo + links)</li>
          <li>Hero Section (intro banner)</li>
          <li>Product Grid (using Display Grid)</li>
          <li>Footer (using Flexbox)</li>
        </ol>

        <Separator />

        <h3>🧩 Step 1: HTML Structure</h3>
        <CodeBlock
          title="Grid + Flexbox HTML Structure"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid + Flexbox Combo</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- 🔹 Header/Navbar -->
  <header class="navbar">
    <div class="logo">💻 LaptopZone</div>
    <ul class="nav-links">
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
      <li>Contact</li>
      <li>Support</li>
      <li>Blog</li>
      <li>Gallery</li>
      <li>Login</li>
    </ul>
  </header>

  <!-- 🔹 Hero Section -->
  <section class="hero">
    <h1>Welcome to LaptopZone</h1>
    <p>Find your perfect laptop — performance meets design.</p>
    <button>Shop Now</button>
  </section>

  <!-- 🔹 Product Grid -->
  <section class="product-grid">
    <div class="card">💻 Laptop 1</div>
    <div class="card">💻 Laptop 2</div>
    <div class="card">💻 Laptop 3</div>
    <div class="card">💻 Laptop 4</div>
    <div class="card">💻 Laptop 5</div>
    <div class="card">💻 Laptop 6</div>
    <div class="card">💻 Laptop 7</div>
    <div class="card">💻 Laptop 8</div>
  </section>

  <!-- 🔹 Footer -->
  <footer class="footer">
    <p>© 2025 LaptopZone. All rights reserved.</p>
  </footer>

</body>
</html>`}
          language="html"
          sectionName="grid-flexbox-html"
        />

        <Separator />

        <h3>🎨 Step 2: CSS Styling (Grid + Flexbox Combo)</h3>
        <CodeBlock
          title="Grid + Flexbox CSS"
          code={`/* General Style */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f5f5f5;
  color: #333;
}

/* 🔹 Navbar using Flexbox */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #212121;
  color: white;
  padding: 15px 40px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links li {
  cursor: pointer;
  transition: 0.3s;
}

.nav-links li:hover {
  color: #00bcd4;
}

/* 🔹 Hero Section (Center using Flex) */
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #00bcd4, #00838f);
  color: white;
  text-align: center;
  height: 250px;
}

.hero button {
  margin-top: 15px;
  padding: 10px 25px;
  background: white;
  color: #00838f;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.hero button:hover {
  background: #e0f7fa;
}

/* 🔹 Product Section using Grid */
.product-grid {
  display: grid;
  gap: 20px;
  padding: 40px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.card {
  background: white;
  border-radius: 10px;
  text-align: center;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

/* 🔹 Footer using Flexbox */
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212121;
  color: #ccc;
  height: 60px;
}`}
          sectionName="grid-flexbox-css"
        />

        <Separator />

        <h3>🧠 Breakdown — Grid + Flexbox ملا کر کیسے کام کرتے ہیں؟</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>حصہ</th>
                <th>Layout Type</th>
                <th>مقصد</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Header</td>
                <td>Flexbox</td>
                <td>Navigation links horizontally align کرنا</td>
              </tr>
              <tr>
                <td>Hero</td>
                <td>Flexbox</td>
                <td>Text & Button center میں لانا</td>
              </tr>
              <tr>
                <td>Product Grid</td>
                <td>Grid</td>
                <td>Cards کو برابر columns میں تقسیم کرنا</td>
              </tr>
              <tr>
                <td>Footer</td>
                <td>Flexbox</td>
                <td>Text کو center میں رکھنا</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <h3>📱 Responsive Behaviour (Already built-in)</h3>
        <ul>
          <li>✅ Navbar automatically wraps links when screen چھوٹی ہو</li>
          <li>✅ Product grid automatically adjusts with minmax(200px, 1fr)</li>
          <li>✅ Hero section remains centered on all screens</li>
        </ul>

        <Separator />

        <h3>💬 اردو میں سادہ خلاصہ</h3>
        <ul>
          <li>flexbox = ایک لائن میں یا سینٹر کرنے کے لیے بہترین</li>
          <li>grid = پورا layout یا multi-column design کے لیے بہترین</li>
          <li>auto-fit اور minmax() سے responsive design خود بن جاتا ہے</li>
          <li>fr سے برابر جگہ بانٹ سکتے ہیں</li>
        </ul>

        <Separator />

        <div className="final-message-section">
          <h3 className='final-message-title'>🎓 آخری پیغام (اردو رسم الخط میں)</h3>
          <p>🌟 مبارک ہوطلباءِ کرام! 🌟</p>
          <p>آپ نے نہ صرف Display Grid بلکہ اب Grid + Flexbox Combo Layout بھی سیکھ لیا ہے۔</p>
          <p>آپ کا یہ ہوم پیج اب professional developers کے level کا ہے۔</p>
          <p>اب آپ اپنی مرضی کے header, footer, cards, images, themes سب خود بنا سکتے ہیں۔</p>
          <p><strong>"یہ وہ مقام ہے جہاں سیکھنے والا developer بننے کی راہ پر قدم رکھتا ہے!" 👨💻✨</strong></p>
        </div>
      </section>

      <Separator />

      {/* Section 19: Grid vs Flexbox Comparison */}
      <section className="tutorial-section">
        <h2>یہ رہا وہ promised 🔥 "Grid vs Flexbox Quick Comparison Table" —</h2>
        <p>بلکل آسان اردو رسم الخط میں تاکہ تمہیں ہر بات ایک نظر میں سمجھ آ جائے۔</p>

        <Separator />

        <h3>💡 Grid vs Flexbox — فرق اور استعمال</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>خصوصیت (Feature)</th>
                <th>Grid 🧱</th>
                <th>Flexbox 🎯</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>بنیادی مقصد</td>
                <td>پورے layout (structure) کو بنانا (rows + columns دونوں)</td>
                <td>کسی ایک لائن یا ایک column کے اندر items کو ترتیب دینا</td>
              </tr>
              <tr>
                <td>ترتیب کی سمت (Direction)</td>
                <td>دو سمتوں میں — افقی (rows) + عمودی (columns)</td>
                <td>ایک ہی سمت میں — row یا column</td>
              </tr>
              <tr>
                <td>Responsive Design</td>
                <td>auto-fit, minmax() کے ساتھ بہت طاقتور</td>
                <td>Flexbox بھی responsive ہے مگر زیادہ linear layout کے لیے</td>
              </tr>
              <tr>
                <td>Alignment Control</td>
                <td>Grid areas کے ذریعے پورا page divide کیا جا سکتا ہے</td>
                <td>justify-content, align-items سے items adjust ہوتے ہیں</td>
              </tr>
              <tr>
                <td>Code Structure</td>
                <td>اکثر پورا layout بناتے وقت استعمال ہوتا ہے</td>
                <td>Navbar، footer، یا card alignment کے لیے بہترین</td>
              </tr>
              <tr>
                <td>Space Sharing</td>
                <td>1fr سے برابر جگہ تقسیم کرتا ہے</td>
                <td>flex: 1 سے بھی کر سکتے ہیں مگر Grid زیادہ precise ہے</td>
              </tr>
              <tr>
                <td>Complex Layouts</td>
                <td>مثلاً header + sidebar + main + footer</td>
                <td>مثلاً horizontally centered navbar</td>
              </tr>
              <tr>
                <td>Best Use Case</td>
                <td>Complete web page structure</td>
                <td>Single row/column alignment</td>
              </tr>
              <tr>
                <td>Example Use</td>
                <td>Product cards grid، dashboard layout</td>
                <td>Navigation bar، button alignment، hero section</td>
              </tr>
              <tr>
                <td>Learning Difficulty</td>
                <td>تھوڑا زیادہ مگر logical</td>
                <td>آسان اور intuitive</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <h3>🧠 خلاصہ (Summary)</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>اگر تمہیں چاہیے…</th>
                <th>تو استعمال کرو:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>پورے page کا structure</td>
                <td>🧱 Grid</td>
              </tr>
              <tr>
                <td>ایک لائن میں items کو برابر رکھنا</td>
                <td>🎯 Flexbox</td>
              </tr>
              <tr>
                <td>Responsive cards کا layout</td>
                <td>🧱 Grid</td>
              </tr>
              <tr>
                <td>Navbar یا Footer alignment</td>
                <td>🎯 Flexbox</td>
              </tr>
              <tr>
                <td>Both combined in one page</td>
                <td>💪 Grid + Flexbox Combo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <div className="important-note">
          <h3>🌟 یاد رکھو:</h3>
          <p>Grid skeleton بناتا ہے،</p>
          <p>Flexbox body کو shape دیتا ہے. 💪</p>
          <p>دونوں مل کر ہی modern responsive websites بنتی ہیں۔</p>
        </div>
      </section>

      <Separator />

      {/* Section 20: CSS Grid Cheat Sheet */}
      <section className="tutorial-section">
        <h2>اب تم سیکھنے کے اس مقام پر پہنچ گئے ہو جہاں تمہیں چاہیے ایک مکمل CSS Grid Cheat Sheet in Urdu —</h2>
        <p>تاکہ تم جب چاہو ایک نظر میں ساری properties، استعمال اور مثالیں یاد کر سکو۔</p>
        <p>یہ cheat sheet بالکل step-by-step ترتیب میں ہے، اور professional level کی ہے —</p>
        <p>مگر اردو رسم الخط میں، آسان زبان میں۔ 📘✨</p>

        <Separator />

        <h2>🧱 CSS Grid Cheat Sheet (Complete in Urdu)</h2>

        <Separator />

        <h3>🔹 1. Grid کو فعال (Activate) کرنا</h3>
        <CodeBlock
          title="Grid Activate"
          code={`.container {
  display: grid;
}`}
          sectionName="grid-activate"
        />
        <p>✅ display: grid; سے div کے اندر موجود عناصر (items) grid کے boxes بن جاتے ہیں۔</p>

        <Separator />

        <h3>🔹 2. Columns اور Rows بنانا</h3>
        <CodeBlock
          title="Columns and Rows"
          code={`grid-template-columns: 200px 200px 200px;
grid-template-rows: 100px 100px;`}
          sectionName="columns-rows"
        />
        <p>📦 اوپر والے code میں 3 columns اور 2 rows بنیں گے۔</p>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>مطلب</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>grid-template-columns</td>
                <td>Columns کی چوڑائی طے کرنا</td>
              </tr>
              <tr>
                <td>grid-template-rows</td>
                <td>Rows کی اونچائی طے کرنا</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <h3>🔹 3. Fraction Units (fr)</h3>
        <CodeBlock
          title="Fraction Units"
          code={`grid-template-columns: 1fr 2fr 1fr;`}
          sectionName="fraction-units"
        />
        <p>👉 fr کا مطلب ہے: "available space کا fraction"</p>
        <p>یعنی 2fr والا column دوسرے سے دو گنا چوڑا ہوگا۔</p>

        <Separator />

        <h3>🔹 4. Percentage (%)</h3>
        <CodeBlock
          title="Percentage Units"
          code={`grid-template-columns: 30% 70%;`}
          sectionName="percentage-units"
        />
        <p>ایک column 30% اور دوسرا 70% space لے گا۔</p>

        <Separator />

        <h3>🔹 5. Repeat Function</h3>
        <CodeBlock
          title="Repeat Function"
          code={`grid-template-columns: repeat(3, 1fr);`}
          sectionName="repeat-function"
        />
        <p>یعنی "3 بار 1fr والے columns بناؤ"</p>
        <p>یہ code = 1fr 1fr 1fr کے برابر ہے۔</p>

        <Separator />

        <h3>🔹 6. Auto-fit اور Auto-fill (Responsive Grids)</h3>
        <CodeBlock
          title="Auto-fit and Auto-fill"
          code={`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`}
          sectionName="auto-fit-fill"
        />
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>لفظ</th>
                <th>مطلب</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>auto-fit</td>
                <td>جتنے columns screen میں fit ہو جائیں، اتنے بنا دو</td>
              </tr>
              <tr>
                <td>minmax(200px, 1fr)</td>
                <td>ہر column کی کم از کم چوڑائی 200px، زیادہ سے زیادہ 1fr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>✨ Responsive grid بنانے کا سب سے مشہور طریقہ۔</p>

        <Separator />

        <h3>🔹 7. Gap Control</h3>
        <CodeBlock
          title="Gap Control"
          code={`gap: 20px;
/* یا الگ الگ */
column-gap: 15px;
row-gap: 10px;`}
          sectionName="gap-control"
        />
        <p>✅ Columns اور Rows کے درمیان فاصلہ۔</p>

        <Separator />

        <h3>🔹 8. Grid Areas (Layout Mapping)</h3>
        <CodeBlock
          title="Grid Areas"
          code={`grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";`}
          sectionName="grid-areas"
        />
        <p>اور پھر child elements میں:</p>
        <CodeBlock
          title="Grid Area Elements"
          code={`.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`}
          sectionName="grid-area-elements"
        />
        <p>✨ پورے layout کو آسانی سے visualize کرنے کا طریقہ۔</p>

        <Separator />

        <h3>🔹 9. Item Positioning (Individual Control)</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>مطلب</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>grid-column-start</td>
                <td>کس column سے شروع ہو</td>
              </tr>
              <tr>
                <td>grid-column-end</td>
                <td>کہاں ختم ہو</td>
              </tr>
              <tr>
                <td>grid-row-start</td>
                <td>کس row سے شروع ہو</td>
              </tr>
              <tr>
                <td>grid-row-end</td>
                <td>کہاں ختم ہو</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Example 👇</p>
        <CodeBlock
          title="Item Positioning Example"
          code={`.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`}
          sectionName="item-positioning"
        />
        <p>مطلب: item1 column 1 سے شروع ہو کر 3 تک پھیلے۔</p>

        <Separator />

        <h3>🔹 10. Alignments</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>مقصد</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>justify-items</td>
                <td>Columns کے اندر horizontal alignment</td>
              </tr>
              <tr>
                <td>align-items</td>
                <td>Rows کے اندر vertical alignment</td>
              </tr>
              <tr>
                <td>justify-content</td>
                <td>پورے grid کو horizontally move کرنا</td>
              </tr>
              <tr>
                <td>align-content</td>
                <td>پورے grid کو vertically move کرنا</td>
              </tr>
              <tr>
                <td>place-items</td>
                <td>دونوں کو ایک ساتھ لکھنے کے لیے short form</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Example:</p>
        <CodeBlock
          title="Alignment Example"
          code={`.container {
  justify-items: center;
  align-items: center;
}`}
          sectionName="alignment-example"
        />

        <Separator />

        <h3>🔹 11. Auto Rows / Auto Columns</h3>
        <CodeBlock
          title="Auto Rows Columns"
          code={`grid-auto-rows: 150px;
grid-auto-columns: 100px;`}
          sectionName="auto-rows-columns"
        />
        <p>جب items زیادہ ہو جائیں اور تم نے explicit rows/columns define نہ کیے ہوں۔</p>

        <Separator />

        <h3>🔹 12. Implicit vs Explicit Grid</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>قسم</th>
                <th>وضاحت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Explicit Grid</td>
                <td>جو تم grid-template-columns/rows سے define کرو</td>
              </tr>
              <tr>
                <td>Implicit Grid</td>
                <td>جو browser خود بنا لے جب جگہ ختم ہو جائے</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <h3>🔹 13. Shorthand Syntax</h3>
        <CodeBlock
          title="Shorthand Syntax"
          code={`grid-template: 
  "header header" 80px
  "sidebar main"  1fr
  "footer footer" 60px
  / 200px 1fr;`}
          sectionName="shorthand-syntax"
        />
        <p>اوپر / کے بعد columns ہیں،</p>
        <p>ہر لائن کے آخر میں rows کی height ہے۔</p>

        <Separator />

        <h3>🔹 14. Nested Grid</h3>
        <CodeBlock
          title="Nested Grid"
          code={`.main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}`}
          sectionName="nested-grid"
        />
        <p>ایک grid کے اندر دوسرا grid بنانا — nested grid کہتے ہیں۔</p>

        <Separator />

        <h3>🔹 15. Responsive Adjustment (Media Queries کے ساتھ)</h3>
        <CodeBlock
          title="Responsive Media Query"
          code={`@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }
}`}
          sectionName="responsive-adjustment"
        />
        <p>موبائل پر سب کچھ ایک column میں آ جائے گا۔</p>

        <Separator />

        <h3>🎓 خلاصہ</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>مطلب</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>display: grid;</td>
                <td>Grid کو activate کرنا</td>
              </tr>
              <tr>
                <td>1fr</td>
                <td>available space کا fraction</td>
              </tr>
              <tr>
                <td>repeat()</td>
                <td>values کو بار بار دہرانا</td>
              </tr>
              <tr>
                <td>minmax()</td>
                <td>کم سے کم اور زیادہ سے زیادہ limit دینا</td>
              </tr>
              <tr>
                <td>auto-fit</td>
                <td>responsive columns بنانا</td>
              </tr>
              <tr>
                <td>grid-template-areas</td>
                <td>layout structure بنانا</td>
              </tr>
              <tr>
                <td>gap</td>
                <td>items کے درمیان فاصلہ</td>
              </tr>
              <tr>
                <td>align-items / justify-items</td>
                <td>alignment controls</td>
              </tr>
              <tr>
                <td>grid-column / grid-row</td>
                <td>individual item کی positioning</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <div className="important-note">
          <h3>🎁 تمہارے لیے Developer Tip</h3>
          <p><strong>"Grid کو کبھی یاد کرنے کی کوشش مت کرو —</strong></p>
          <p><strong>اسے سمجھ کر visualize کرو،</strong></p>
          <p><strong>تب تم کسی بھی design کو recreate کر سکو گے۔" 💡</strong></p>
        </div>
      </section>
    </div>
  );
};

export default CssDisplayGrid;