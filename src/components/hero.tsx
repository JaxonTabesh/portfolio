import SocialIconComponent, { SocialIcon } from '@/components/social-icon';

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex h-screen flex-col items-center justify-center text-center dark:text-gray-400">
        <h2 className="m-8 text-center text-9xl">
          <span>{"Hi, I'm "}</span>
          <span className="text-[#e03131]">Jaxon Tabesh</span>.
        </h2>
        <div className="flex items-center gap-6 p-2 text-8xl">
          <SocialIconComponent type={SocialIcon.GitHub} />
          <SocialIconComponent type={SocialIcon.LinkedIn} />
          <SocialIconComponent type={SocialIcon.Email} />
          <SocialIconComponent type={SocialIcon.Resume} />
        </div>
      </div>
    </section>
  );
}
