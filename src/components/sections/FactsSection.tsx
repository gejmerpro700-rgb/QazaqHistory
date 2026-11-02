import { motion } from 'framer-motion';
import { historicalFacts } from '../../data/historicalData';

export default function FactsSection() {
  return (
    <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #0a0602 0%, #0d0906 50%, #0a0602 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#C9A84C' }}>
            ТАРИХИ ДЕРЕКТЕР
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
            Маңызды сандар
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {historicalFacts.map((fact, i) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl"
              style={{ backgroundColor: '#0f0a04', border: '1px solid rgba(201,168,76,0.15)' }}
            >
              <div
                className="text-3xl md:text-4xl font-black mb-2"
                style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}
              >
                {fact.number}
              </div>
              <div className="text-sm font-semibold mb-2" style={{ color: '#f5f0e8' }}>
                {fact.label}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.5)' }}>
                {fact.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
