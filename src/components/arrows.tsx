'use client';
import { useSection, Section, lastSection } from '@/app/section-context';

export default function Arrows() {
  const { activeSection, setActiveSection } = useSection();

  const isUpArrowVisible = activeSection !== Section.Hero;
  const isDownArrowVisible = activeSection !== lastSection;
  const bottomLeft = 'bottom-4 left-210';
  const bottomRight = 'bottom-4 right-210';
  const rightTop = 'top-4 right-4';
  const rightBottom = 'bottom-4 right-4';

  return (
    <div className="pointer-events-none fixed inset-0">
      {
        <button
          className={`pointer-events-auto absolute ${bottomLeft} rotate-180 p-2 transition-all duration-300 ${
            isUpArrowVisible
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-2 opacity-0'
          }`}
          onClick={() => {
            scrollToSection((activeSection - 1).toString());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-28"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              className="fill-gray-500 p-0 transition-colors hover:fill-[#e03131]"
            />
          </svg>
        </button>
      }

      {
        <button
          className={`pointer-events-auto absolute ${bottomRight} p-2 transition-all duration-300 ${
            isDownArrowVisible
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-2 opacity-0'
          }`}
          onClick={() => {
            scrollToSection((activeSection + 1).toString());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-28"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              className="fill-gray-500 p-0 transition-colors hover:fill-[#e03131]"
            />
          </svg>
        </button>
      }
    </div>
  );
}

export function scrollToSection(id: string) {
  if (parseInt(id) < 0 || parseInt(id) > lastSection) return null;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
