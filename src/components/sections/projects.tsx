export default function Projects() {
  return (
    <section id="3">
      <div className="flex h-full min-h-screen flex-col">
        <h1 className="flex flex-col text-center text-6xl md:text-8xl">Projects</h1>
        <div className="flex flex-col justify-center text-center">
          <div className="flex flex-1 flex-row justify-center text-center">
            <div className="flex flex-1 flex-col items-center justify-center">
              <h3 className="text-3xl">Title of first thing</h3>
              <div> {'about section'}</div>
            </div>
            <div className="flex flex-1 items-center justify-center">{'carousel'}</div>
          </div>
          <div className="flex flex-1 flex-row items-center justify-center">
            <div className="flex flex-1 flex-col items-center justify-center">
              <h3 className="text-3xl">Title of first thing</h3>
              <div> {'about section'}</div>
            </div>
            <div className="flex flex-1 justify-center text-center">{'carousel'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
