import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { topicCards } from '../data/historicalData';

export default function TopicsPage() {
  return (
    <div style={{ backgroundColor: '#0f0a04', minHeight: '100vh' }}>
      <PageHero
        kicker="ТАРИХИ АСПЕКТІЛЕР"
        title="Зерттеу бағыттары"
        subtitle="XX ғасыр басындағы Қазақстан тарихының алты негізгі аспектісі"
      />

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicCards.map((topic, i) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={`/topics/${topic.id}`}
                className="group block rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#0d0906',
                  border: '1px solid rgba(201,168,76,0.15)',
                  textDecoration: 'none',
                }}
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
                >
                  {topic.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: '#C9A84C' }}>
                  {topic.subtitle}
                </p>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  {topic.description}
                </p>
                <ul className="space-y-1 mb-6">
                  {topic.keyFacts.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>
                      <span style={{ color: '#C9A84C', flexShrink: 0 }}>•</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#C9A84C' }}>
                  Толығырақ
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
