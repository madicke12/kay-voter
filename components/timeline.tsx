import Image from "next/image";

interface TimelineItemProps {
    time: string;
  }
  
  const TimelineItem: React.FC<TimelineItemProps> = ({ time }) => {
    return (
      <div className="flex gap-2.5 mt-11 text-xs leading-5 text-zinc-400 max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="grow">{time}</div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e39ef50324c1df82e1e296cd0c15dbfad7d345072bf734db14805b3eaa839fc?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
          alt=""
          className="grow shrink-0 my-auto border border-dashed basis-0 border-zinc-200 stroke-[1px] stroke-zinc-200 w-fit max-md:max-w-full"
        />
      </div>
    );
  };
export default TimelineItem
  