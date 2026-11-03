import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div
      className="page-surface min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="text-8xl font-black mb-6"
            style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}
          >
            404
          </div>
          <h1
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
          >
            Бет табылмады
          </h1>
          <p className="text-base mb-8" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Сіз іздеген бет жоқ немесе жылжытылған.
          </p>
          <Link
            to="/"
            className="interactive-control inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            style={{ background: '#C9A84C', color: '#0f0a04' }}
          >
            <Home className="w-4 h-4" />
            Басты бетке оралу
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
