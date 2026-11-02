import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { timelineEvents } from '../../data/historicalData';

const categoryColors = {
  political: '#8B6914',
  economic: '#5C4A1E',
  social: '#4A5C1E',
  cultural: '#1E4A5C',
  military: '#5C1E1E',
};

const categoryLabels = {
  political: 'Саяси',
  economic: 'Экономикалық',
  social: 'Әлеуметтік',
  cultural: 'Мәдени',
  military: 'Әскери',
};

export default function TimelineSection() {
  const featured = timelineEvents.slice(0, 6);

  return (
    <section
      id="timeline"
      className="py-24 px-4 scroll-mt-24"
      style={{ backgroundColor: '#0f0a04' }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          kicker="ХРОНОЛОГИЯ"
          title="Тарихи хронология"
          subtitle="XX ғасыр басындағы Қазақстандағы негізгі тарихи оқиғалар"
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)' }}
          />

          <div className="space-y-8">
            {featured.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 pl-4"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 flex items-start pt-1">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10"
                    style={{ background: '#C9A84C', color: '#0f0a04' }}
                  >
                    {event.year.slice(-2)}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-5 rounded-xl"
                  style={{ backgroundColor: '#0d0906', border: '1px solid rgba(201,168,76,0.1)' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl font-bold" style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}>
                      {event.year}
                      {event.month && ` ж. ${event.month}`}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${categoryColors[event.category]}40`, color: '#C9A84C' }}
                    >
                      {categoryLabels[event.category]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base mb-2" style={{ color: '#f5f0e8', fontFamily: 'Playfair Display, serif' }}>
                    {event.title}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: 'rgba(245,240,232,0.6)' }}>
                    {event.description}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(201,168,76,0.8)', fontStyle: 'italic' }}>
                    Маңызы: {event.significance}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/timeline"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 border"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#C9A84C' }}
          >
            Толық хронология ({timelineEvents.length} оқиға)
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
