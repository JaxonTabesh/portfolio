'use client';
import { useEffect } from 'react';
import { useSection, Section } from '@/app/section-context';

export default function SectionObserver() {
  const { activeSection, setActiveSection } = useSection();

  console.log('SectionObserver rendered.');
  useEffect(() => {
    console.log('SectionObserver mounted');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target.id, entry.isIntersecting);
          if (entry.isIntersecting) setActiveSection(parseInt(entry.target.id));
        });
      },
      { root: null, threshold: 0.51 },
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);

  return null;
}
