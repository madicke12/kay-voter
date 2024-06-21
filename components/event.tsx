import { Dropdown } from "./drop";

type EventProps = {
  time: string;
  titre?: string;
  duration?: string;
  isImportant?: boolean;
};
const Event: React.FC<EventProps> = ({
  time,
  titre,
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
    {titre && (
      <div className="flex gap-5 justify-between self-center px-5 py-6 mt-1.5 max-w-full bg-gray-50 rounded-lg w-[632px] max-md:flex-wrap">
        <div className="flex">
          <div className=" flex flex-col ">
            <div className="text-sm font-bold leading-5 text-zinc-900">{titre}</div>
            <div className="flex gap-1 mt-2 text-xs leading-5 text-gray-500">
              {/* <div class="absolute top-[213px] left-[103px] w-[624px] h-0 border border-primary-500 transform rotate-0"></div> */}

              <div className="flex-auto my-auto">{duration}</div>
            </div>
          </div>
         
        </div>
        {/* <div class="absolute top-[213px] left-[103px] w-[624px] h-0 border border-primary-500 transform rotate-0"></div> */}
        <Dropdown/>
      </div>
    )}
  </>
);
export default Event ;