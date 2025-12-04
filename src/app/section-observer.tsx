'use client';
import { useEffect } from 'react';
import { useSection } from '@/app/section-context';

const sectionObserverMap = new Map();

export default function SectionObserver() {
  const { setActiveSection } = useSection();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));

    sectionObserverMap.set(0, 1);

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let updated = false;
        for (const entry of entries) {
          const idNum = Number((entry.target as HTMLElement).id);
          sectionObserverMap.set(idNum, entry.intersectionRatio);
          updated = true;
        }
        if (updated) {
          const sectionObserverArray = [...sectionObserverMap.entries()];
          sectionObserverArray.sort((a, b) => b[1] - a[1]);
          const largestVisibleSection = sectionObserverArray[0][0];
          setActiveSection(largestVisibleSection);
        }
      },
      {
        threshold: [
          0, 0.01, 0.05, 0.075, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
        ],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
