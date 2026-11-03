import type { ReactNode } from 'react';

interface SectionPageProps {
  children: ReactNode;
  className?: string;
}

export default function SectionPage({ children, className = '' }: SectionPageProps) {
  return (
    <div
      className={`page-surface ${className}`}
    >
      {children}
    </div>
  );
}
