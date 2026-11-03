import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Users, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export default function InterviewSection() {
  return (
    <section
      id="interview"
      className="home-section section-interview py-24 px-4 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker="ТІРІ КУӘЛАР"
          title="Бейне-сұхбат"
          subtitle="Тарихи оқиғалар туралы куәліктер мен сауалнама жазбалары"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Video preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.7 }}
            className="video-frame relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
            style={{ backgroundColor: '#0a0602' }}
          >
            <Link to="/interview" className="block w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(8,5,2,0.6)' }}>
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: 'rgba(201,168,76,0.9)' }}
                >
                  <Play className="w-8 h-8 ml-1" style={{ color: '#0f0a04' }} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold" style={{ color: '#f5f0e8' }}>Тарихи сауалнама сұхбаты</p>
                <p className="text-xs" style={{ color: 'rgba(245,240,232,0.6)' }}>XX ғасыр басындағы Қазақстан туралы</p>
              </div>
            </Link>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.1)' }}>
                <Users className="w-5 h-5" style={{ color: '#C9A84C' }} />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: '#f5f0e8' }}>Сауалнама туралы</p>
                <p className="text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>102 респондент</p>
              </div>
            </div>

            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(245,240,232,0.7)' }}>
              Бұл бейнежазбада тарих бойынша жүргізілген сауалнама сұхбатының жазбасы берілген. Респонденттер XX ғасыр басындағы Қазақстан тарихы туралы өз білімдерімен бөлісті.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Алаш қозғалысы туралы білім деңгейі',
                '1916 жылғы оқиғалар хабардарлығы',
                'Тарихи тұлғаларды тану',
                'Тарихты оқытудың тиімді жолдары',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C9A84C' }} />
                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/interview"
              className="interactive-control inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{ background: '#C9A84C', color: '#0f0a04' }}
            >
              Бейнені қарау
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
