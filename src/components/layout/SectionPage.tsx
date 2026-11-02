import type { ReactNode } from 'react';

interface SectionPageProps {
  children: ReactNode;
  className?: string;
}

export default function SectionPage({ children, className = '' }: SectionPageProps) {
  return (
    <div
      className={`min-h-screen ${className}`}
      style={{ backgroundColor: '#0f0a04' }}
    >
      {children}
    </div>
  );
}
