import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Chapters data - INCLUDING HOMEPAGE as first chapter
  const chapters = [
    {
      id: "home",
      title: "ہوم پیج",
      emoji: "🏠",
      path: "/",
    },
    {
      id: "css-background",
      title: "پس منظر کی خصوصیات",
      emoji: "🎨",
      path: "/css-background",
    },
    {
      id: "css-position",
      title: "پوزیشننگ",
      emoji: "📍",
      path: "/css-position",
    },
    {
      id: "css-display",
      title: "ڈسپلے پراپرٹیز",
      emoji: "📱",
      path: "/css-display",
    },
    {
      id: "css-responsive-bar",
      title: "ریسپانسیو نیویگیشن بار",
      emoji: "🍔",
      path: "/css-responsive-bar",
    },
    {
      id: "css-pseudo",
      title: "Pseudo Elements",
      emoji: "✨",
      path: "/css-pseudo",
    },
    // NEW CHAPTER ADDED HERE - Cubic Bezier
    {
      id: "css-cubic-bezier",
      title: "Cubic Bezier",
      emoji: "📈",
      path: "/css-cubic-bezier",
    }
  ];

  // Set active chapter based on current route
  useEffect(() => {
    const currentChapter = chapters.find(
      (chapter) =>
        location.pathname === chapter.path ||
        location.pathname.startsWith(chapter.path + "/")
    );
    if (currentChapter) {
      setActiveChapter(currentChapter.id);
    }
  }, [location.pathname]);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking on a link (MOBILE ONLY)
  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // Close sidebar when clicking on overlay (MOBILE ONLY)
  const handleOverlayClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay - Only on mobile */}
      {isOpen && isMobile && (
        <div className="sidebar-overlay" onClick={handleOverlayClick}></div>
      )}

      {/* Hamburger Toggle Button - Only on mobile */}
      {isMobile && (
        <button
          className={`sidebar-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">🎨</div>
            <div className="logo-text">
              <h2>CSS اردو</h2>
              <p>ٹیوٹوریلز</p>
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <nav className="sidebar-nav">
          <div className="nav-header">
            <h3>فہرست ابواب</h3>
            <div className="progress-indicator">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "60%" }}></div>
              </div>
              <span>60% مکمل</span>
            </div>
          </div>

          <ul className="chapter-list">
            {chapters.map((chapter, index) => (
              <li key={chapter.id} className="chapter-item">
                <Link
                  to={chapter.path}
                  className={`chapter-link ${activeChapter === chapter.id ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  <div className="chapter-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="chapter-content">
                    <div className="chapter-emoji">{chapter.emoji}</div>
                    <div className="chapter-info">
                      <span className="chapter-title">{chapter.title}</span>
                      <span className="chapter-status">
                        {activeChapter === chapter.id ? "جاری ہے" : "مکمل"}
                      </span>
                    </div>
                  </div>
                  <div className="chapter-arrow">›</div>
                </Link>

                {/* Small buttons for CSS Display in single line */}
                {chapter.id === "css-display" && (
                  <div className="sub-buttons-single-line">
                    <Link
                      to="/css-display-grid"
                      className={`sub-button ${location.pathname === "/css-display-grid" ? "active" : ""}`}
                      onClick={handleLinkClick}
                    >
                      Grid
                    </Link>
                    <Link
                      to="/css-display/flex"
                      className={`sub-button ${location.pathname === "/css-display/flex" ? "active" : ""}`}
                      onClick={handleLinkClick}
                    >
                      Flex
                    </Link>
                  </div>
                )}

                {/* Small buttons for Responsive Navbar in single line */}
                {chapter.id === "css-responsive-bar" && (
                  <div className="sub-buttons-single-line">
                    <Link
                      to="/css-responsive-bar/html"
                      className={`sub-button ${location.pathname === "/css-responsive-bar/html" ? "active" : ""}`}
                      onClick={handleLinkClick}
                    >
                      HTML
                    </Link>
                    <Link
                      to="/css-responsive-bar/css"
                      className={`sub-button ${location.pathname === "/css-responsive-bar/css" ? "active" : ""}`}
                      onClick={handleLinkClick}
                    >
                      CSS
                    </Link>
                    <Link
                      to="/css-responsive-bar/js"
                      className={`sub-button ${location.pathname === "/css-responsive-bar/js" ? "active" : ""}`}
                      onClick={handleLinkClick}
                    >
                      Java
                      Script
                    </Link>
                  </div>
                )}

                {/* New sentence below Cubic Bezier button */}
                {/* New sentence below Cubic Bezier button */}
{chapter.id === "css-cubic-bezier" && (
  <div className="cubic-bezier-note" dir="rtl">
     پانچ ماڈرن &nbsp; animations &nbsp; کے ساتھ
  </div>
)}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;