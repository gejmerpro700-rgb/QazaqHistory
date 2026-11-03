import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: '#C9A84C', color: '#0f0a04' }}
              >
                Q
              </div>
              <span style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8', fontWeight: 700, fontSize: '1.1rem' }}>
                Qazaq History
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.5)' }}>
              Қазақстанның XX ғасыр басындағы тарихын зерттеуге арналған білім беру платформасы.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: '#C9A84C' }}>
              БӨЛІМДЕР
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/timeline', label: 'Хронология' },
                { to: '/figures', label: 'Тарихи тұлғалар' },
                { to: '/interview', label: 'Бейне-сұхбат' },
                { to: '/lesson', label: 'ИИ-сұхбат' },
                { to: '/survey', label: 'Сауалнама' },
                { to: '/sources', label: 'Дереккөздер' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: 'rgba(245,240,232,0.6)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: '#C9A84C' }}>
              ТАРИХИ АСПЕКТІЛЕР
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/topics/political', label: 'Саяси жағдай' },
                { to: '/topics/economic', label: 'Экономикалық жағдай' },
                { to: '/topics/land', label: 'Жер мәселесі' },
                { to: '/topics/social', label: 'Әлеуметтік жағдай' },
                { to: '/topics/alash', label: 'Алаш қозғалысы' },
                { to: '/topics/uprising-1916', label: '1916 жылғы көтеріліс' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: 'rgba(245,240,232,0.6)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: '#C9A84C' }}>
              АҚПАРАТ
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.5)' }}>
              Барлық тарихи деректер академиялық дереккөздерге сүйенеді. Материалдар білім беру мақсатында дайындалған.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(245,240,232,0.4)' }}>
            © {year} Qazaq History. Білім беру мақсатында жасалған.
          </p>
          <p className="text-xs" style={{ color: 'rgba(245,240,232,0.4)' }}>
            Академиялық жоба
          </p>
        </div>
      </div>
    </footer>
  );
}
