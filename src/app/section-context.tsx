'use client';
import { createContext, useState, useContext } from 'react';

export const enum Section {
  Hero = 0,
  About = 1,
  Experience = 2,
}

export const lastSection = Section.Experience;

const SectionContext = createContext({
  activeSection: Section.Hero,
  setActiveSection: (() => {}) as React.Dispatch<React.SetStateAction<Section>>,
});

type Props = { children: React.ReactNode };

export function SectionProvider({ children }: Props) {
  const [activeSection, setActiveSection] = useState(Section.Hero);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  return useContext(SectionContext);
}
