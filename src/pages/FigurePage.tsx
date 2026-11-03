import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { historicalFigures } from '../data/historicalData';

export default function FigurePage() {
  const { figureId } = useParams<{ figureId: string }>();
  const figure = historicalFigures.find((f) => f.id === figureId);

  if (!figure) return <Navigate to="/figures" replace />;

  return (
    <div className="page-surface figures-page">
      {/* Hero */}
      <div className="page-hero pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-8 text-left">
            <Link to="/figures" className="inline-flex items-center gap-2 text-sm" style={{ color: '#C9A84C' }}>
              <ArrowLeft className="w-4 h-4" />
              Тарихи тұлғаларға оралу
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-28 h-28 rounded-full flex items-center justify-center text-5xl font-bold mx-auto mb-6"
            style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '3px solid rgba(201,168,76,0.3)' }}
          >
            {figure.name.charAt(0)}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
            {figure.name}
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg font-semibold mb-2" style={{ color: '#C9A84C' }}>
            {figure.years}
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-base mb-6" style={{ color: 'rgba(245,240,232,0.7)' }}>
            {figure.role}
          </motion.p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-2xl mb-8"
        >
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
            Өмірі мен қызметі
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.7)' }}>
            {figure.description}
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
            Негізгі жетістіктері
          </h2>
          <div className="space-y-4">
            {figure.achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card interactive-card flex items-start gap-3 p-4 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                <p className="text-sm" style={{ color: 'rgba(245,240,232,0.7)' }}>{ach}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
