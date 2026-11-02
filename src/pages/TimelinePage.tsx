import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { timelineEvents } from '../data/historicalData';
import type { TimelineEvent } from '../types';

const categoryColors: Record<TimelineEvent['category'], string> = {
  political: '#C9A84C',
  economic: '#8B7A3C',
  social: '#6B8B3C',
  cultural: '#3C6B8B',
  military: '#8B3C3C',
};

const categoryLabels: Record<TimelineEvent['category'], string> = {
  political: 'Саяси',
  economic: 'Экономикалық',
  social: 'Әлеуметтік',
  cultural: 'Мәдени',
  military: 'Әскери',
};

const categories = ['all', 'political', 'economic', 'social', 'cultural', 'military'] as const;
const categoryFilterLabels = { all: 'Барлығы', ...categoryLabels };

export default function TimelinePage() {
  const [filter, setFilter] = useState<'all' | TimelineEvent['category']>('all');

  const filtered = filter === 'all' ? timelineEvents : timelineEvents.filter((e) => e.category === filter);

  return (
    <div style={{ backgroundColor: '#0f0a04', minHeight: '100vh' }}>
      <PageHero
        kicker="ХРОНОЛОГИЯ"
        title="Тарихи хронология"
        subtitle="XX ғасыр басындағы Қазақстандағы негізгі тарихи оқиғалар"
      />

      {/* Filter */}
      <div className="max-w-5xl mx-auto px-4 mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as typeof filter)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: filter === cat ? '#C9A84C' : 'rgba(201,168,76,0.08)',
                color: filter === cat ? '#0f0a04' : 'rgba(245,240,232,0.7)',
                border: '1px solid rgba(201,168,76,0.2)',
                cursor: 'pointer',
              }}
            >
              {categoryFilterLabels[cat as keyof typeof categoryFilterLabels]}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3) 10%, rgba(201,168,76,0.3) 90%, transparent)' }}
          />

          <div className="space-y-8">
            {filtered.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.5) }}
                className="flex gap-6 pl-4"
              >
                <div className="relative flex-shrink-0 flex items-start pt-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10"
                    style={{ background: categoryColors[event.category], color: '#0f0a04' }}
                  >
                    {event.year.slice(-2)}
                  </div>
                </div>

                <div
                  className="flex-1 p-5 rounded-xl"
                  style={{ backgroundColor: '#0d0906', border: '1px solid rgba(201,168,76,0.1)' }}
                >
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xl font-bold" style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}>
                      {event.year}{event.month && ` ж. ${event.month}`}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${categoryColors[event.category]}20`, color: categoryColors[event.category], border: `1px solid ${categoryColors[event.category]}40` }}
                    >
                      {categoryLabels[event.category]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base mb-2" style={{ color: '#f5f0e8', fontFamily: 'Playfair Display, serif' }}>
                    {event.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: 'rgba(245,240,232,0.6)' }}>
                    {event.description}
                  </p>
                  <div className="flex items-start gap-2 text-xs" style={{ color: 'rgba(201,168,76,0.8)', fontStyle: 'italic' }}>
                    <span style={{ flexShrink: 0 }}>★</span>
                    {event.significance}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
