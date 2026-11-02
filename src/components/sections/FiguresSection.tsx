import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { historicalFigures } from '../../data/historicalData';

export default function FiguresSection() {
  const featured = historicalFigures.slice(0, 4);

  return (
    <section
      id="figures"
      className="py-24 px-4 scroll-mt-24"
      style={{ backgroundColor: '#0a0602' }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="ТАРИХИ ТҰЛҒАЛАР"
          title="Тарих жасаған есімдер"
          subtitle="XX ғасыр басындағы қазақ тарихының көрнекті қайраткерлері"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((figure, i) => (
            <motion.div
              key={figure.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={`/figures/${figure.id}`}
                className="group block rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#0f0a04',
                  border: '1px solid rgba(201,168,76,0.15)',
                  textDecoration: 'none',
                }}
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto"
                  style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '2px solid rgba(201,168,76,0.3)' }}
                >
                  {figure.name.charAt(0)}
                </div>
                <div className="text-center">
                  <h3
                    className="font-bold text-base mb-1"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
                  >
                    {figure.name}
                  </h3>
                  <p className="text-xs mb-2" style={{ color: '#C9A84C' }}>
                    {figure.years}
                  </p>
                  <p className="text-xs mb-4" style={{ color: 'rgba(245,240,232,0.6)' }}>
                    {figure.role}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs" style={{ color: '#C9A84C' }}>
                    Толығырақ
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/figures"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 border"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#C9A84C' }}
          >
            Барлық тарихи тұлғалар ({historicalFigures.length})
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
