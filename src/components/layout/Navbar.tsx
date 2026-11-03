import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/historicalData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active section based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      // On homepage, detect by scroll
      const updateActive = () => {
        const sectionIds = navItems.map((n) => n.id);
        // Sort sections by offsetTop ascending
        const sections = sectionIds
          .map((id) => ({ id, el: document.getElementById(id) }))
          .filter((s) => s.el !== null)
          .sort((a, b) => (a.el!.offsetTop) - (b.el!.offsetTop));

        const scrollY = window.scrollY + 120;
        let current = sections[0]?.id ?? 'home';
        for (const s of sections) {
          if (scrollY >= s.el!.offsetTop) {
            current = s.id;
          }
        }
        setActiveSection(current);
      };
      window.addEventListener('scroll', updateActive, { passive: true });
      updateActive();
      return () => window.removeEventListener('scroll', updateActive);
    } else {
      // On sub-pages, match by path
      const matched = navItems.find((n) => n.path && path.startsWith(n.path) && n.path !== '/');
      if (matched) {
        setActiveSection(matched.id);
      } else {
        setActiveSection('home');
      }
    }
  }, [location]);

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMobileOpen(false);
    if (location.pathname === '/' && item.href.startsWith('/#')) {
      // On home page: scroll to section
      const id = item.href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(8,5,2,0.95)' : 'rgba(8,5,2,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: '#C9A84C', color: '#0f0a04' }}
            >
              Q
            </div>
            <div className="hidden sm:block">
              <div style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8', fontWeight: 700, fontSize: '1rem', lineHeight: 1 }}>
                QAZAQ
              </div>
              <div style={{ color: '#C9A84C', fontSize: '0.6rem', letterSpacing: '0.15em', lineHeight: 1 }}>
                HISTORY
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="interactive-control px-3 py-2 text-sm rounded-md cursor-pointer"
                  style={{
                    color: isActive ? '#C9A84C' : 'rgba(245,240,232,0.7)',
                    backgroundColor: isActive ? 'rgba(201,168,76,0.12)' : 'transparent',
                    fontWeight: isActive ? 600 : 400,
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="interactive-control lg:hidden p-2 rounded-md"
            style={{ color: '#C9A84C' }}
            aria-label="Мәзір"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div
          className="lg:hidden"
          style={{ backgroundColor: 'rgba(8,5,2,0.98)', borderTop: '1px solid rgba(201,168,76,0.15)' }}
        >
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="interactive-control w-full text-left px-4 py-3 rounded-md text-sm"
                  style={{
                    color: isActive ? '#C9A84C' : 'rgba(245,240,232,0.8)',
                    backgroundColor: isActive ? 'rgba(201,168,76,0.1)' : 'transparent',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
