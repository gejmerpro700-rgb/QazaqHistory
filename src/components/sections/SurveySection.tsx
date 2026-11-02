import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { surveyQuestions } from '../../data/surveyQuestions';
import { markSurveyCompleted, hasSurveyCompleted } from '../../lib/storage';

export default function SurveySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(hasSurveyCompleted());

  const handleSingle = (qId: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const handleMultiple = (qId: string, option: string) => {
    setAnswers((prev) => {
      const current = (prev[qId] as string[]) || [];
      const exists = current.includes(option);
      return {
        ...prev,
        [qId]: exists ? current.filter((o) => o !== option) : [...current, option],
      };
    });
  };

  const handleSubmit = () => {
    markSurveyCompleted();
    setSubmitted(true);
    setIsExpanded(false);
  };

  const answeredCount = Object.keys(answers).length;
  const canSubmit = answeredCount >= surveyQuestions.filter((q) => q.type !== 'text').length;

  return (
    <section
      id="survey"
      className="py-24 px-4 scroll-mt-24"
      style={{ backgroundColor: '#0d0906' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#0f0a04', border: '1px solid rgba(201,168,76,0.2)' }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.15)' }}>
                  <BarChart2 className="w-5 h-5" style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase mb-0.5" style={{ color: '#C9A84C' }}>
                    ПІКІРІНІЗДІ БІЛДІРІҢІЗ
                  </p>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
                    Тарихи сауалнама
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {submitted ? (
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#C9A84C' }}>
                    <CheckCircle className="w-4 h-4" />
                    Аяқталды
                  </div>
                ) : (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                    style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: 'none', cursor: 'pointer' }}
                  >
                    {isExpanded ? 'Жабу' : 'Жауап беру'}
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                )}
              </div>
            </div>

            {submitted && (
              <p className="text-sm mt-3" style={{ color: 'rgba(245,240,232,0.6)' }}>
                Жауаптарыңыз сақталды. Нәтижелерді төмендегі бөлімнен қараңыз.
              </p>
            )}
          </div>

          {/* Expandable form */}
          <AnimatePresence>
            {isExpanded && !submitted && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div
                  className="px-6 pb-6"
                  style={{ maxHeight: '60vh', overflowY: 'auto' }}
                >
                  <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '1.5rem' }}>
                    <div className="space-y-6">
                      {surveyQuestions.map((q, qi) => (
                        <div key={q.id}>
                          <p className="text-sm font-semibold mb-3" style={{ color: '#f5f0e8' }}>
                            {qi + 1}. {q.question}
                          </p>
                          {q.type === 'text' ? (
                            <textarea
                              rows={3}
                              className="w-full text-sm rounded-lg px-3 py-2 resize-none"
                              style={{
                                backgroundColor: '#0a0602',
                                border: '1px solid rgba(201,168,76,0.2)',
                                color: '#f5f0e8',
                                outline: 'none',
                              }}
                              placeholder="Жауабыңызды жазыңыз..."
                              onChange={(e) => setAnswers((p) => ({ ...p, [q.id]: e.target.value }))}
                            />
                          ) : (
                            <div className="space-y-2">
                              {q.options?.map((opt) => {
                                const selected = q.type === 'multiple'
                                  ? ((answers[q.id] as string[]) || []).includes(opt)
                                  : answers[q.id] === opt;
                                return (
                                  <button
                                    key={opt}
                                    onClick={() => q.type === 'multiple' ? handleMultiple(q.id, opt) : handleSingle(q.id, opt)}
                                    className="w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all"
                                    style={{
                                      backgroundColor: selected ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.03)',
                                      border: `1px solid ${selected ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.1)'}`,
                                      color: selected ? '#C9A84C' : 'rgba(245,240,232,0.7)',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <button
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
                        style={{
                          background: canSubmit ? '#C9A84C' : 'rgba(201,168,76,0.2)',
                          color: canSubmit ? '#0f0a04' : 'rgba(201,168,76,0.4)',
                          border: 'none',
                          cursor: canSubmit ? 'pointer' : 'not-allowed',
                        }}
                      >
                        Жіберу
                      </button>
                      <span className="text-xs" style={{ color: 'rgba(245,240,232,0.4)' }}>
                        {answeredCount}/{surveyQuestions.length} сұрақ жауапталды
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Link to full survey page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-4"
        >
          <Link
            to="/survey"
            className="text-sm transition-colors hover:opacity-80"
            style={{ color: 'rgba(201,168,76,0.7)' }}
          >
            Сауалнаманы толық бетте ашу →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
