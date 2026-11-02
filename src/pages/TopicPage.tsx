import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { academicTopics } from '../data/academicTopics';
import { historicalFigures } from '../data/historicalData';

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = academicTopics.find((t) => t.id === topicId);

  if (!topic) return <Navigate to="/topics" replace />;

  const relatedFigures = historicalFigures.filter((f) => topic.figures.includes(f.id));

  return (
    <div style={{ backgroundColor: '#0f0a04', minHeight: '100vh' }}>
      {/* Hero */}
      <div className="pt-24 pb-16 px-4" style={{ backgroundColor: '#0a0602' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-8">
            <Link to="/topics" className="inline-flex items-center gap-2 text-sm" style={{ color: '#C9A84C' }}>
              <ArrowLeft className="w-4 h-4" />
              Тарихи аспектілерге оралу
            </Link>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#C9A84C' }}>
            {topic.kicker}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
            {topic.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg mb-6" style={{ color: '#C9A84C' }}>
            {topic.subtitle}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-base leading-relaxed max-w-3xl" style={{ color: 'rgba(245,240,232,0.7)' }}>
            {topic.overview}
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Sections */}
        <div className="space-y-12 mb-16">
          {topic.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: '#0d0906', border: '1px solid rgba(201,168,76,0.1)' }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
                {section.title}
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(245,240,232,0.7)' }}>
                {section.content}
              </p>
              {section.facts && (
                <div className="space-y-2">
                  {section.facts.map((fact, fi) => (
                    <div key={fi} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(245,240,232,0.6)' }}>
                      <span style={{ color: '#C9A84C', flexShrink: 0 }}>▸</span>
                      {fact}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Key dates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5" style={{ color: '#C9A84C' }} />
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
              Негізгі даталар
            </h2>
          </div>
          <div className="space-y-3">
            {topic.keyDates.map((kd, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl"
                style={{ backgroundColor: '#0d0906', border: '1px solid rgba(201,168,76,0.1)' }}
              >
                <div className="font-bold text-sm flex-shrink-0 pt-0.5" style={{ color: '#C9A84C', minWidth: '140px' }}>
                  {kd.date}
                </div>
                <div className="text-sm" style={{ color: 'rgba(245,240,232,0.7)' }}>
                  {kd.event}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Related figures */}
        {relatedFigures.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5" style={{ color: '#C9A84C' }} />
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
                Тарихи тұлғалар
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedFigures.map((figure) => (
                <Link
                  key={figure.id}
                  to={`/figures/${figure.id}`}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: '#0d0906',
                    border: '1px solid rgba(201,168,76,0.1)',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                    style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C' }}
                  >
                    {figure.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#f5f0e8' }}>{figure.name}</p>
                    <p className="text-xs" style={{ color: '#C9A84C' }}>{figure.years}</p>
                    <p className="text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>{figure.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
