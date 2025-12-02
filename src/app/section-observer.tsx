'use client';
import { useEffect } from 'react';
import { useSection } from '@/app/section-context';

export default function SectionObserver() {
  const { setActiveSection } = useSection();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const best = visible[0];
        const idNum = parseInt((best.target as HTMLElement).id, 10);
        if (!Number.isNaN(idNum)) {
          setActiveSection(idNum);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: '-20% 0px -20% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);

  return null;
}
