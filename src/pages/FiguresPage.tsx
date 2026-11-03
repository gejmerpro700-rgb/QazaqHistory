import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { historicalFigures } from '../data/historicalData';

export default function FiguresPage() {
  return (
    <div className="page-surface figures-page">
      <PageHero
        kicker="ТАРИХИ ТҰЛҒАЛАР"
        title="Тарих жасаған есімдер"
        subtitle="XX ғасыр басындағы қазақ тарихының көрнекті қайраткерлері"
      />

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {historicalFigures.map((figure, i) => (
            <motion.div
              key={figure.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.18 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={`/figures/${figure.id}`}
                className="interactive-card glass-card group block rounded-2xl p-6 h-full"
                style={{
                  backgroundColor: '#0d0906',
                  border: '1px solid rgba(201,168,76,0.15)',
                  textDecoration: 'none',
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-5 mx-auto"
                  style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: '2px solid rgba(201,168,76,0.25)' }}
                >
                  {figure.name.charAt(0)}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
                    {figure.name}
                  </h3>
                  <p className="text-xs mb-2 font-semibold" style={{ color: '#C9A84C' }}>{figure.years}</p>
                  <p className="text-xs mb-4" style={{ color: 'rgba(245,240,232,0.6)' }}>{figure.role}</p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(245,240,232,0.5)' }}>
                    {figure.description.slice(0, 100)}...
                  </p>
                  <div className="flex items-center justify-center gap-1 text-sm font-medium" style={{ color: '#C9A84C' }}>
                    Толығырақ
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
