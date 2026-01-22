import Carousel from '@/components/carousel';

export default function Experience() {
  return (
    <section id="2">
      <div className="flex h-full min-h-screen flex-col items-center md:pb-20 dark:text-neutral-400">
        <h2 className="text-6xl md:text-8xl">Experience</h2>
        <div className="flex flex-grow flex-col items-center md:flex-row md:py-20">
          <div className="flex-1">
            <div className="flex max-w-7xl flex-col items-center justify-center px-10 py-10 md:py-0">
              <h3 className="text-3xl font-bold dark:text-white">
                TakeMyCall
                <span className="text-[#60a8ff] dark:text-[#BFDBFE]">.AI</span>
              </h3>
              <p className="font-bold">Co-Founder | Software Engineer</p>
              <p className="italic">Jun 2025 - Present</p>
              <div className="pt-6 md:px-20">
                <p className="border-l border-neutral-900 pl-3 text-left text-2xl dark:border-neutral-400">
                  Building a cross-platform dashboard using Expo + React Native (Android, iOS, Web)
                  and Supabase for backend logic, authentication, and real-time data management.
                  Designed database tables, triggers, and RPCs, and integrated Retellt&apos;s
                  webhook through a Supabase Edge Function to automatically store and display AI
                  phone call data for clients. Currently in early testing before App Store release.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex max-w-7xl flex-col items-center justify-center px-10 py-10 md:py-0">
              <div className="sm:hidden">
                <Carousel
                  items={[
                    [
                      'vid',
                      '/carousel_content/takemycall/1.mp4',
                      'TakeMyCall.AI app demo video',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/1.png',
                      'TakeMyCall.AI app image of login screen',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/2.png',
                      'TakeMyCall.AI app image of organization dashboard',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/3.png',
                      'TakeMyCall.AI app image of organization calls tab',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/4.png',
                      'TakeMyCall.AI app image of the call details page',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/5.png',
                      'TakeMyCall.AI app image of the tickets tab',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/6.png',
                      'TakeMyCall.AI app image of the people tab',
                      1179,
                      2556,
                    ],
                  ]}
                  width={'w-52'}
                  arrowSize="size-16"
                  arrowOffset="mr-52"
                  mockPhone
                />
              </div>

              <div className="hidden sm:flex">
                <Carousel
                  items={[
                    [
                      'vid',
                      '/carousel_content/takemycall/1.mp4',
                      'TakeMyCall.AI app demo video',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/1.png',
                      'TakeMyCall.AI app image of login screen',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/2.png',
                      'TakeMyCall.AI app image of organization dashboard',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/3.png',
                      'TakeMyCall.AI app image of organization calls tab',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/4.png',
                      'TakeMyCall.AI app image of the call details page',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/5.png',
                      'TakeMyCall.AI app image of the tickets tab',
                      1179,
                      2556,
                    ],
                    [
                      'img',
                      '/carousel_content/takemycall/6.png',
                      'TakeMyCall.AI app image of the people tab',
                      1179,
                      2556,
                    ],
                  ]}
                  width={'w-72'}
                  arrowSize="size-20"
                  arrowOffset="mr-72"
                  mockPhone
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center pb-20 text-center">
          <div className="flex max-w-7xl flex-col items-center justify-center px-10 py-10 md:py-0">
            <h3 className="text-3xl font-bold text-red-600">Mt. San Jacinto College</h3>
            <p className="font-bold">
              Supplemental Instruction Leader — Data Structures & Algorithms
            </p>
            <p className="italic">Aug 2024 - Dec 2024</p>
            <div className="pt-6 md:px-60">
              <p className="border-l border-neutral-900 pl-3 text-left text-2xl dark:border-neutral-400">
                Selected by the Computer Science department chair to serve as a Supplemental
                Instruction Leader for his Data Structures and Algorithms course. Designed and led
                twice-weekly collaborative coding sessions on recursion, time complexity, and core
                data structures, created custom practice problems, and provided one-on-one tutoring
                to support student success while strengthening communication and leadership skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
