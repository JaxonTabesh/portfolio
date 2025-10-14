import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import SocialIconComponent, { SocialIcon } from '@/components/social-icon';

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex h-screen flex-col items-center justify-center text-center dark:text-gray-400">
        <h2 className="m-2 text-center text-9xl">
          <span>Hi, I'm </span>
          <span className="text-[#e03131]">Jaxon Tabesh</span>.
        </h2>
        <div className="flex items-center gap-6 p-2 text-8xl">
          <SocialIconComponent type={SocialIcon.GitHub} />
          <SocialIconComponent type={SocialIcon.LinkedIn} />
          <SocialIconComponent type={SocialIcon.Email} />
          <SocialIconComponent type={SocialIcon.Resume} />
        </div>
        <button>
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
      </div>
    </section>
  );
}
