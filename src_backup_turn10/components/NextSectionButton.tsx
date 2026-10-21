import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface NextSectionButtonProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

export const SECTION_SEQUENCE = [
  { id: 'hero',           label: 'About' },
  { id: 'about',          label: 'Experience & Education' },
  { id: 'experience',     label: 'Technical Skills' },
  { id: 'skills',         label: 'Projects' },
  { id: 'portfolio',      label: 'Certifications' },
  { id: 'certifications', label: 'Contact' },
  { id: 'contact',        label: '' },
];

export const NextSectionButton: React.FC<NextSectionButtonProps> = ({
  currentSection,
  onNavigate,
}) => {
  const currentIndex = SECTION_SEQUENCE.findIndex((s) => s.id === currentSection);

  // Hide button on contact (the final section) or if not found
  if (currentIndex === -1 || currentIndex >= SECTION_SEQUENCE.length - 1) {
    return null;
  }

  const nextSection = SECTION_SEQUENCE[currentIndex + 1];

  const handleClick = () => {
    onNavigate(nextSection.id);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Next section: ${nextSection.label}`}
      title={`Go to next section: ${nextSection.label}`}
      className="next-section-btn group"
    >
      <ChevronDown className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5" />
      <span className="sr-only">Next section: {nextSection.label}</span>
    </button>
  );
};
