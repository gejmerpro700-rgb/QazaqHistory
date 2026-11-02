import SurveySection from '../components/sections/SurveySection';
import SurveyResultsSection from '../components/sections/SurveyResultsSection';

export default function SurveyPage() {
  return (
    <div style={{ backgroundColor: '#0f0a04', minHeight: '100vh', paddingTop: '4rem' }}>
      <SurveySection />
      <SurveyResultsSection />
    </div>
  );
}
