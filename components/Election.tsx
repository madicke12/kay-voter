import * as React from "react";
import Image from "next/image";
import { Calendrier } from "./calendrier";
type EventProps = {
  time: string;
  title?: string;
  duration?: string;
  isImportant?: boolean;
};
const Event: React.FC<EventProps> = ({
  time,
  title,
  duration,
  isImportant,
}) => (
  <>
    <div
      className={`flex gap-2.5 mt-1.5 text-xs leading-5 text-${isImportant ? "cyan" : "zinc"
        }-500 max-md:flex-wrap`}
    >
      <div>{time}</div>
      <div className=" w-[624px] h-0 border border-primary-500 transform rotate-0"></div>

    </div>
    {title && (
      <div className="flex gap-5 justify-between self-center px-5 py-6 mt-1.5 max-w-full bg-gray-50 rounded-lg w-[632px] max-md:flex-wrap">
        <div className="flex flex-col">
          <div className="text-sm font-bold leading-5 text-zinc-900">{title}</div>
          <div className="flex gap-1 mt-2 text-xs leading-5 text-gray-500">
            {/* <div class="absolute top-[213px] left-[103px] w-[624px] h-0 border border-primary-500 transform rotate-0"></div> */}

            <div className="flex-auto my-auto">{duration}</div>
          </div>
        </div>
        {/* <div class="absolute top-[213px] left-[103px] w-[624px] h-0 border border-primary-500 transform rotate-0"></div> */}

      </div>
    )}
  </>
);


const Election: React.FC = () => {
  return (
    <div className="flex flex-col items-start px-8 pt-8 pb-20 bg-white rounded  max-md:px-5">
      <section className="self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-2 max-md:max-w-full">
              <div className="flex mb-5 gap-5 px-px w-full max-md:flex-wrap max-md:max-w-full">
                <h1 className="flex-auto my-auto text-2xl font-bold leading-9 text-zinc-900">
                  Calendrier
                </h1>
                <button className="flex gap-1.5 justify-center px-3 py-2.5 text-sm leading-5 text-white bg-cyan-500 rounded">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b373777c3f57a1c691a3f154a94866d34b97af969c8bf7355344783e7c4ea90?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0 w-4 aspect-square"
                  />
                  <span className="flex-auto">Ajouter Election</span>
                </button>
              </div>
              <Event
                time="08:00 AM"
                title="Election Presidentielle 2022"
                duration="08:00 - 09:00 AM"
              />
              {/* <Event time="08:30 AM" isImportant={true} /> */}
            </div>
          </div>
          <aside className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <Calendrier/>
            <div className="flex flex-col grow max-md:mt-2">
              <form className="flex flex-col justify-center py-1 mt-14 text-sm leading-5 bg-black bg-opacity-0 max-md:mt-10">
                <label htmlFor="matricule" className="font-bold text-gray-700">
                  Matricule
                </label>
                <div className="flex flex-col justify-center bg-white rounded border border-cyan-500 border-solid text-neutral-300">
                  <input
                    id="matricule"
                    type="text"
                    placeholder="Entrer le Matricule de l'election"
                    aria-label="Entrer le Matricule de l'election"
                    className="justify-center items-start px-4 py-4 rounded border-solid bg-black bg-opacity-0 border-[5px] border-cyan-500 border-opacity-20 max-md:pr-5"
                  />
                </div>
              </form>
            </div>
          </aside>
        </div>
      </section>

    </div>
  );
};
export default Election;