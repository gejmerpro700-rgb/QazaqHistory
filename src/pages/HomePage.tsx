import HeroSection from '../components/sections/HeroSection';
import TopicsSection from '../components/sections/TopicsSection';
import TimelineSection from '../components/sections/TimelineSection';
import FiguresSection from '../components/sections/FiguresSection';
import FactsSection from '../components/sections/FactsSection';
import InterviewSection from '../components/sections/InterviewSection';
import LessonSection from '../components/sections/LessonSection';
import SurveySection from '../components/sections/SurveySection';
import SurveyResultsSection from '../components/sections/SurveyResultsSection';
import SourcesSection from '../components/sections/SourcesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TopicsSection />
      <TimelineSection />
      <FiguresSection />
      <FactsSection />
      <InterviewSection />
      <LessonSection />
      <SurveySection />
      <SurveyResultsSection />
      <SourcesSection />
    </>
  );
}
