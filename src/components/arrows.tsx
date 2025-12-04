'use client';
import { useSection, Section, lastSection } from '@/app/section-context';

export default function Arrows() {
  const { activeSection } = useSection();

  const isFirst = activeSection === Section.Hero;
  const isLast = activeSection === lastSection;

  return (
    <div className="pointer-events-none fixed inset-0 z-10 whitespace-nowrap">
      <div
        className={`absolute left-1/2 -translate-x-1/2 ${isFirst ? 'bottom-6 md:bottom-16' : 'bottom-4'}`}
      >
        <button
          className={`pointer-events-auto rotate-180 overflow-hidden p-2 transition-all duration-300 ${
            !isFirst
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none w-0 translate-y-2 p-0 opacity-0'
          }`}
          onClick={() => {
            scrollToSection((activeSection - 1).toString());
          }}
        >
          <ArrowIcon />
        </button>
        <button
          className={`pointer-events-auto overflow-hidden p-2 transition-all duration-300 ${
            !isLast
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none w-0 translate-y-2 p-0 opacity-0'
          } ${isFirst ? 'animate-bounce' : ''}`}
          onClick={() => {
            scrollToSection((activeSection + 1).toString());
          }}
        >
          <ArrowIcon className={isFirst ? 'size-28 md:size-36' : 'size-20 md:size-28'} />
        </button>
      </div>
    </div>
  );
}

type ArrowIconProps = {
  className?: string;
};

function ArrowIcon({ className = 'size-20 md:size-28' }: ArrowIconProps): React.ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        className="fill-gray-500 p-0 transition-colors hover:fill-[#e03131] active:fill-[#e03131]"
      />
    </svg>
  );
}

export function scrollToSection(id: string) {
  if (parseInt(id) < 0 || parseInt(id) > lastSection) return null;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
