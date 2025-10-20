import TooltipIcon from './tooltip-icon';

export default function About() {
  return (
    <section id="1">
      <div className="flex h-full min-h-screen flex-col items-center dark:text-gray-400">
        <h2 className="text-8xl">About</h2>
        <div className="flex max-w-7xl flex-grow flex-col items-center justify-center md:flex-row">
          <div className="flex-1">
            <div className="px-10 py-10 md:py-0">
              {/* <p className="pb-10">Portrait</p> */}
              <p className="border-l border-gray-900 pl-3 text-2xl dark:border-gray-400">
                {"I\'m"} <span className="text-[#e03131]">Jaxon Tabesh</span>, a UC Irvine computer
                science student and
                <span className="text-[#e03131]"> {"Chancellor\'s"} Excellence Scholar</span>.{' '}
                {"I\'m "}
                currently building a<span className="text-[#e03131]"> cross-platform app</span> at
                <span className="text-[#e03131]"> TakeMyCall.ai</span>, which provides AI phone call
                assistants for small businesses through
                <span className="text-[#e03131]"> Retell AI</span>. The app lets businesses view and
                manage calls and data using <span className="text-[#e03131]">Supabase</span> and
                <span className="text-[#e03131]"> React Native</span>. Previously, I was
                <span className="text-[#e03131]"> president</span> of both the
                <span className="text-[#e03131]"> Computer Science Club</span> and
                <span className="text-[#e03131]"> Phi Theta Kappa</span> at MSJC, where I earned
                <span className="text-[#e03131]"> five associate degrees with honors</span>.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap justify-center gap-6 py-10 md:py-0 [&>div>img]:h-[100px] [&>div>img]:object-contain">
              <div className="flex flex-col items-center justify-center gap-4">
                <TooltipIcon path="/icons/supabase.svg" tooltip="Supabase"></TooltipIcon>
                <TooltipIcon path="/icons/postgresql.svg" tooltip="PostgreSQL"></TooltipIcon>
                <TooltipIcon path="/icons/git.svg" tooltip="Git"></TooltipIcon>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <TooltipIcon path="/icons/cpp.svg" tooltip="C++" />
                <TooltipIcon path="/icons/javascript.svg" tooltip="JavaScript" />
                <TooltipIcon path="/icons/python.svg" tooltip="Python" />
                <TooltipIcon path="/icons/dart.svg" tooltip="Dart" />
                <TooltipIcon path="/icons/sql.svg" tooltip="SQL" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <TooltipIcon path="/icons/nextdotjs.svg" tooltip="Next.js" />
                <TooltipIcon path="/icons/react.svg" tooltip="React" />
                <TooltipIcon path="/icons/flutter.svg" tooltip="Flutter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
