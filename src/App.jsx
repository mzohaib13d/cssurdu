import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./pages/Homepage/Homepage";
import CssBackground from "./pages/CssBackground/CssBackground";
import CssPosition from "./pages/CssPosition/CssPosition";
import CssPseudo from "./pages/CssPseudo/CssPseudo";
import CssDisplay from "./pages/CssDisplay/CssDisplay";
import DisplayFlex from "./pages/CssDisplay/DisplayFlex";
import CssDisplayGrid from "./pages/CssDisplay/CssDisplayGrid";
import CssCubicBezier from "./pages/CssCubicBezier/CubicBezier";  
import CssResponsiveBar from "./pages/CssResponsiveBar/CssResponsiveBar";
import CssResponsiveBarCss from "./pages/CssResponsiveBar/CssResponsiveBarCss";
import CssResponsiveBarJs from "./pages/CssResponsiveBar/CssResponsiveBarJs";
import "./App.css";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show button when page is scrolled down - optimized with useCallback
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    // Add throttle to scroll event for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Scroll to top function - memoized with useCallback
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Keyboard accessibility for scroll to top
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToTop();
      }
    },
    [scrollToTop]
  );

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content" id="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/css-background" element={<CssBackground />} />
            <Route path="/css-position" element={<CssPosition />} />
            <Route path="/css-display" element={<CssDisplay />} />
            <Route path="/css-display-grid" element={<CssDisplayGrid />} />
            <Route path="/css-display/flex" element={<DisplayFlex />} />
            <Route path="/css-pseudo" element={<CssPseudo />} />
            
            {/* CssResponsiveBar Routes */}
            <Route path="/css-responsive-bar" element={<CssResponsiveBar />} />
            <Route
              path="/css-responsive-bar/html"
              element={<CssResponsiveBar activeTab="html" />}
            />
            <Route
              path="/css-responsive-bar/css"
              element={<CssResponsiveBarCss />}
            />
            <Route
              path="/css-responsive-bar/js"
              element={<CssResponsiveBarJs />}
            />
            <Route 
            path="/css-cubic-bezier" 
            element={<CssCubicBezier />} /> 

            {/* Fallback route */}
            <Route path="*" element={<Homepage />} />
          </Routes>
        </main>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
            onKeyDown={handleKeyDown}
            aria-label="Scroll to top"
            tabIndex={0}
          >
            ↑
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;