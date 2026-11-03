import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import VideoPlayer from '../components/ui/VideoPlayer';
import { Bot } from 'lucide-react';

export default function LessonPage() {
  return (
    <div className="page-surface lesson-page">
      <PageHero
        kicker="ТАРИХ LIVE • Инновациялық сұхбат"
        title="ИИ-ұстазбен сұхбат"
        subtitle="Жасанды интеллект ұстазымен интерактивті сұхбат арқылы тарихты үйреніңіз"
      />

      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.18 }}
              transition={{ duration: 0.6 }}
            >
              <VideoPlayer src={`${import.meta.env.BASE_URL}AiTeacherLive.mp4`} />
            </motion.div>
          </div>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="glass-card p-5 rounded-xl">
              <p className="text-xs font-semibold mb-2" style={{ color: '#C9A84C' }}>Сұхбат туралы</p>
              <h3 className="font-bold text-sm mb-2" style={{ color: '#f5f0e8' }}>XX ғасыр басындағы Қазақстан</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                ИИ-ұстаз Қазақстандағы саяси, экономикалық, және мәдени өзгерістерді жан-жақты қарастырады. Алаш қозғалысы, жер мәселесі және ұлт-азаттық күрес туралы толық ақпарат берілген.
              </p>
            </div>

            <div className="glass-card p-5 rounded-xl">
              <p className="text-xs font-semibold mb-3" style={{ color: '#C9A84C' }}>Негізгі тақырыптар</p>
              <div className="space-y-2">
                {[
                  'Кіріспе — кезең туралы жалпы шолу',
                  'Патшалық отар саясаты',
                  'Жер мәселесі және Степной регламент',
                  '1916 жылғы көтеріліс',
                  'Алашорда үкіметінің құрылуы',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(245,240,232,0.6)' }}>
                    <Bot className="w-3 h-3 flex-shrink-0" style={{ color: '#C9A84C' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl text-center">
              <p className="text-xs" style={{ color: 'rgba(245,240,232,0.4)', fontStyle: 'italic' }}>
                ИИ-ұстаз моделі арқылы жүргізілген тарихи білім беру сұхбаты.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
