export interface NavItem {
  id: string;
  label: string;
  href: string;
  path?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  month?: string;
  title: string;
  description: string;
  significance: string;
  category: 'political' | 'economic' | 'social' | 'cultural' | 'military';
}

export interface TopicCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  keyFacts: string[];
}

export interface HistoricalFigure {
  id: string;
  name: string;
  years: string;
  role: string;
  description: string;
  achievements: string[];
  imageUrl?: string;
}

export interface HistoricalSource {
  id: string;
  author: string;
  title: string;
  year: string;
  publisher: string;
  type: 'book' | 'article' | 'archive' | 'newspaper';
  description: string;
}

export interface HistoricalFact {
  id: string;
  number: string;
  label: string;
  description: string;
}

export interface SurveyQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'text';
  options?: string[];
}

export interface AcademicTopic {
  id: string;
  title: string;
  subtitle: string;
  kicker: string;
  overview: string;
  sections: AcademicSection[];
  keyDates: KeyDate[];
  figures: string[];
  sources: string[];
}

export interface AcademicSection {
  title: string;
  content: string;
  facts?: string[];
}

export interface KeyDate {
  date: string;
  event: string;
}
