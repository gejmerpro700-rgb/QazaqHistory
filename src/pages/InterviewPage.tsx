import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import VideoPlayer from '../components/ui/VideoPlayer';

export default function InterviewPage() {
  return (
    <div style={{ backgroundColor: '#0f0a04', minHeight: '100vh' }}>
      <PageHero
        kicker="ТІРІ КУӘЛАР"
        title="Бейне-сұхбат"
        subtitle="Тарихи оқиғалар туралы куәліктер мен сауалнама жазбалары"
      />

      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <VideoPlayer src={`${import.meta.env.BASE_URL}Survey.mp4`} />
            </motion.div>
          </div>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="p-5 rounded-xl" style={{ backgroundColor: '#0d0906', border: '1px solid rgba(201,168,76,0.15)' }}>
              <p className="text-xs font-semibold mb-2" style={{ color: '#C9A84C' }}>Сұхбат туралы</p>
              <h3 className="font-bold text-sm mb-2" style={{ color: '#f5f0e8' }}>Тарихи сауалнама сұхбаты</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                Бұл бейнежазбада тарих бойынша жүргізілген сауалнама сұхбатының жазбасы берілген. Респонденттер XX ғасыр басындағы Қазақстан тарихы туралы өз білімдерімен бөлісті.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ backgroundColor: '#0d0906', border: '1px solid rgba(201,168,76,0.15)' }}>
              <p className="text-xs font-semibold mb-3" style={{ color: '#C9A84C' }}>Тарихи контекст</p>
              <div className="space-y-2 text-xs" style={{ color: 'rgba(245,240,232,0.6)' }}>
                <div><span style={{ color: '#C9A84C' }}>Кезең:</span> XX ғасырдың басы (1900–1920)</div>
                <div><span style={{ color: '#C9A84C' }}>Тақырып:</span> Саяси, экономикалық, әлеуметтік жағдай</div>
                <div><span style={{ color: '#C9A84C' }}>Мақсат:</span> Тарихи сананың дамуы</div>
              </div>
            </div>

            <p className="text-xs text-center px-4" style={{ color: 'rgba(245,240,232,0.4)', fontStyle: 'italic' }}>
              Бейнежазба білім беру мақсатында ғана пайдаланылады. Жеке деректер қорғалған.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
