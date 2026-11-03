import SurveySection from '../components/sections/SurveySection';
import SurveyResultsSection from '../components/sections/SurveyResultsSection';

export default function SurveyPage() {
  return (
    <div className="page-surface pt-16">
      <SurveySection />
      <SurveyResultsSection />
    </div>
  );
}
