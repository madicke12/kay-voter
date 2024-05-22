import Events from "./typeEvent";
import CalendarDay from "./calendar";
import Image from "next/image";


const Election: React.FC = () => {
  const events = [
    {
      time: "08:00 AM",
      title: "Election Presidentielle 2022",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddc744285942b083ab2fc018cfb2872aec3af8984998e6ad7cb96cfe923a9fbf?apiKey=9c066bb72ce5442ca7b521d698a43bb1&",
      details: "08:00 - 09:00 AM",
    },
  ];

  const days = [
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: true },
    { day: 1, isCurrentMonth: true, isHighlighted: true },
    { day: 2, isCurrentMonth: true, isHighlighted: true },
    { day: 3, isCurrentMonth: true, isHighlighted: true },
    { day: 4, isCurrentMonth: true, isHighlighted: true },
    { day: 5, isCurrentMonth: true, isHighlighted: true, hasEvent: true },
    { day: 6, isCurrentMonth: true, isHighlighted: true, hasEvent: true },
    { day: 7, isCurrentMonth: true, isHighlighted: true },
    { day: 8, isCurrentMonth: true, isHighlighted: true },
    { day: 9, isCurrentMonth: true, isHighlighted: true, hasEvent: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
  ];

  return (
    <div className="flex flex-col items-start px-8 pt-8 pb-20 bg-white rounded shadow-sm max-md:px-5">
      <header className="self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-2 max-md:max-w-full">
              <div className="flex gap-5 px-px w-full max-md:flex-wrap max-md:max-w-full">
                <h1 className="flex-auto my-auto text-2xl font-bold leading-9 text-zinc-900">
                  Calendrier
                </h1>
                <button className="flex gap-1.5 justify-center px-3 py-2.5 text-sm leading-5 text-white bg-cyan-500 rounded">
                  <Image
                    width={16}
                    height={16}
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f09d06011503856017901ab10d66ba2c21973bcae7758ac1ddb20d2b2077991?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
                    alt=""
                    className="shrink-0 w-4 aspect-square"
                  />
                  <span className="flex-auto">Ajouter Election</span>
                </button>
              </div>
              <div className="flex gap-2.5 mt-10 text-xs leading-5 text-zinc-400 max-md:flex-wrap max-md:max-w-full">
                <span>08:00 AM</span>
                <Image
                  width={16}
                  height={16}
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e39ef50324c1df82e1e296cd0c15dbfad7d345072bf734db14805b3eaa839fc?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
                  alt=""
                  className="grow shrink-0 my-auto border border-dashed basis-0 border-zinc-200 stroke-[1px] stroke-zinc-200 w-fit max-md:max-w-full"
                />
              </div>
              {events.map((event, index) => (
                <Events
                  key={index}
                  time={event.time}
                  title={event.title}
                  iconSrc={event.iconSrc}
                  details={event.details}
                />
              ))}
              <div className="flex gap-2.5 mt-1.5 max-md:flex-wrap">
                <time className="grow text-xs leading-5 text-cyan-500">
                  08:30 AM
                </time>
                <span className="flex flex-auto gap-0 self-start max-md:flex-wrap max-md:max-w-full">
                  <div className="shrink-0 w-2 h-2 bg-cyan-500 rounded-full" />
                  <Image
                    width={16}
                    height={16}
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4de24ef61ea13910ea247c398e24d5ceb0b1eddbcfc7b59898b5582036f7a32?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
                    alt=""
                    className="grow shrink-0 my-auto border border-cyan-500 border-solid basis-0 stroke-[1px] stroke-cyan-500 w-fit max-md:max-w-full"
                  />
                </span>
              </div>
              <div className="flex gap-2.5 mt-24 text-xs leading-5 text-zinc-400 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                <time>09:00 AM</time>
                <Image
                  width={16}
                  height={16}
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a729f2f4304463a26e9cf4821620b927976b7ecf38b11b6631880221b95bd6?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
                  alt=""
                  className="grow shrink-0 my-auto border border-dashed basis-0 border-zinc-200 stroke-[1px] stroke-zinc-200 w-fit max-md:max-w-full"
                />
              </div>
            </div>
          </section>
          <aside className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-2">
              <div className="flex flex-col px-4 py-5 w-full bg-gray-50 rounded-lg">
                <header className="flex gap-5 justify-between w-full">
                  <h2 className="text-lg font-bold leading-7 text-zinc-900">
                    Dec, 2022
                  </h2>
                  <nav className="flex gap-2">
                    <button>
                      <Image
                        width={16}
                        height={16}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f89fdbcc102c482ab5915275e65d707bfb472ebbd2bc3debe574ad5fd58d012?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
                        alt="Previous Month"
                        className="shrink-0 aspect-square w-[18px]"
                      />
                    </button>
                    <button>
                      <Image
                        width={16}
                        height={16}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/845ea3f5ea62ed8852eb9c7db1175d14a65fb7fba89de285234f7ce1a4985d33?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
                        alt="Next Month"
                        className="shrink-0 aspect-square w-[18px]"
                      />
                    </button>
                  </nav>
                </header>
                <div className="flex gap-5 mt-7 text-sm leading-5 text-center text-cyan-500 whitespace-nowrap">
                  <span className="grow">Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
                <div className="flex gap-1 mt-6 text-sm leading-5 whitespace-nowrap">
                  {days.map((dayInfo, index) => (
                    <CalendarDay
                      key={index}
                      day={dayInfo.day}
                      isCurrentMonth={dayInfo.isCurrentMonth}
                      isHighlighted={dayInfo.isHighlighted}
                      hasEvent={dayInfo.hasEvent}
                    />
                  ))}
                </div>
                <form className="flex flex-col justify-center py-1 mt-14 text-sm leading-5 bg-black bg-opacity-0 max-md:mt-10">
                  <label htmlFor="matricule" className="font-bold text-gray-700">
                    Matricule
                  </label>
                  <input
                    type="text"
                    id="matricule"
                    placeholder="Entrer le Matricule de l'election"
                    aria-label="Entrer le Matricule de l'election"
                    className="justify-center items-start px-4 py-4 rounded border-solid bg-black bg-opacity-0 border-[5px] border-cyan-500 border-opacity-20 max-md:pr-5 text-neutral-300"
                  />
                </form>
              </div>
            </div>
          </aside>
        </div>
      </header>
      <div className="flex gap-3 mt-12 max-w-full text-xs leading-5 text-zinc-400 w-[695px] max-md:flex-wrap max-md:mt-10">
        <time className="grow">10:00 AM</time>
        <Image
          width={16}
          height={16}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a729f2f4304463a26e9cf4821620b927976b7ecf38b11b6631880221b95bd6?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
          alt=""
          className="grow shrink-0 my-auto border border-dashed basis-0 border-zinc-200 stroke-[1px] stroke-zinc-200 w-fit max-md:max-w-full"
        />
      </div>
      <div className="flex gap-4 mt-48 max-w-full text-xs leading-5 text-zinc-400 w-[696px] max-md:flex-wrap max-md:mt-10">
        <time className="grow">11:00 PM</time>
        <Image
          width={16}
          height={16}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45683086bafa6d3229ed9f55308b28027a7fd3d29acba97bba5f16cb8b212aa8?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
          alt=""
          className="grow shrink-0 my-auto border border-dashed basis-0 border-zinc-200 stroke-[1px] stroke-zinc-200 w-fit max-md:max-w-full"
        />
      </div>
      <div className="flex gap-3 mt-44 max-w-full text-xs leading-5 text-zinc-400 w-[696px] max-md:flex-wrap max-md:mt-10">
        <time className="grow">12:00 AM</time>
        <Image
          width={16}
          height={16}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45683086bafa6d3229ed9f55308b28027a7fd3d29acba97bba5f16cb8b212aa8?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
          alt=""
          className="grow shrink-0 my-auto border border-dashed basis-0 border-zinc-200 stroke-[1px] stroke-zinc-200 w-fit max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default Election;