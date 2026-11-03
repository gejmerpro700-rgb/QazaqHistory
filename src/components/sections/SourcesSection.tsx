import { motion } from 'framer-motion';
import { BookOpen, Archive, Newspaper, FileText } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { historicalSources } from '../../data/historicalData';

const typeIcons = {
  book: BookOpen,
  archive: Archive,
  newspaper: Newspaper,
  article: FileText,
};

const typeLabels = {
  book: 'Кітап',
  archive: 'Мұрағат',
  newspaper: 'Газет/Журнал',
  article: 'Мақала',
};

export default function SourcesSection() {
  return (
    <section
      id="sources"
      className="home-section section-sources py-24 px-4 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          kicker="ДЕРЕККӨЗДЕР"
          title="Академиялық дереккөздер"
          subtitle="Барлық материалдар академиялық шынайылық принципіне сай дайындалды"
        />

        <div className="space-y-4">
          {historicalSources.map((source, i) => {
            const Icon = typeIcons[source.type];
            return (
              <motion.div
                key={source.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card interactive-card flex gap-4 p-5 rounded-xl"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,168,76,0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#C9A84C' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h4 className="font-semibold text-sm" style={{ color: '#f5f0e8' }}>
                      {source.author} ({source.year})
                    </h4>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}
                    >
                      {typeLabels[source.type]}
                    </span>
                  </div>
                  <p className="text-sm italic mb-1" style={{ color: '#C9A84C' }}>
                    {source.title}
                  </p>
                  <p className="text-xs mb-2" style={{ color: 'rgba(245,240,232,0.4)' }}>
                    {source.publisher}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(245,240,232,0.6)' }}>
                    {source.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
