import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Arrows from '@/components/arrows';
import Experience from '@/components/sections/experience';
import { SectionProvider } from '@/app/section-context';
import SectionObserver from '@/app/section-observer';

export default function Home() {
  return (
    <>
      <main className="smooth-scroll">
        <SectionProvider>
          <SectionObserver />
          <Arrows />
          <Hero />
          <About />
          <Experience />
        </SectionProvider>
      </main>
    </>
  );
}
