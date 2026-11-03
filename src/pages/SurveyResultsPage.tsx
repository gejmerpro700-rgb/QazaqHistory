import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SurveyResultsSection from '../components/sections/SurveyResultsSection';

export default function SurveyResultsPage() {
  return (
    <div className="page-surface pt-16">
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-4">
        <Link
          to="/survey"
          className="inline-flex items-center gap-2 text-sm"
          style={{ color: '#C9A84C' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Сауалнамаға оралу
        </Link>
      </div>
      <SurveyResultsSection />
    </div>
  );
}
