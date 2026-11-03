import { HashRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const TopicsPage = lazy(() => import('./pages/TopicsPage'));
const TopicPage = lazy(() => import('./pages/TopicPage'));
const TimelinePage = lazy(() => import('./pages/TimelinePage'));
const FiguresPage = lazy(() => import('./pages/FiguresPage'));
const FigurePage = lazy(() => import('./pages/FigurePage'));
const InterviewPage = lazy(() => import('./pages/InterviewPage'));
const LessonPage = lazy(() => import('./pages/LessonPage'));
const SurveyPage = lazy(() => import('./pages/SurveyPage'));
const SurveyResultsPage = lazy(() => import('./pages/SurveyResultsPage'));
const SourcesPage = lazy(() => import('./pages/SourcesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0f0a04' }}>
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: '#C9A84C', borderTopColor: 'transparent' }}
        />
        <p style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}>Жүктелуде...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/topics/:topicId" element={<TopicPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/figures" element={<FiguresPage />} />
              <Route path="/figures/:figureId" element={<FigurePage />} />
              <Route path="/interview" element={<InterviewPage />} />
              <Route path="/lesson" element={<LessonPage />} />
              <Route path="/survey" element={<SurveyPage />} />
              <Route path="/survey/results" element={<SurveyResultsPage />} />
              <Route path="/sources" element={<SourcesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
