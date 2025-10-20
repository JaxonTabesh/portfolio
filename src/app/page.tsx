import Hero from '@/components/hero';
import About from '@/components/about';
import Arrows from '@/components/arrows';
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
        </SectionProvider>
      </main>
    </>
  );
}
