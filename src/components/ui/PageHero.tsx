import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PageHeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  backTo?: string;
  backLabel?: string;
}

export default function PageHero({ kicker, title, subtitle, backTo = '/', backLabel = 'Басты бетке оралу' }: PageHeroProps) {
  return (
    <div className="pt-24 pb-16 px-4 text-center" style={{ backgroundColor: '#0f0a04' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-left"
        >
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-80"
            style={{ color: '#C9A84C' }}
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>
        </motion.div>

        {kicker && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            {kicker}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl"
            style={{ color: 'rgba(245,240,232,0.7)' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
