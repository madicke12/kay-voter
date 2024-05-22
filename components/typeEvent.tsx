import Image from "next/image";
type EventProps = {
    time: string;
    title: string;
    iconSrc: string;
    details?: string;
  };
  
  
  
const Events: React.FC<EventProps> = ({ time, title, iconSrc, details }) => (
    <div className="flex gap-5 justify-between self-center px-5 py-6 mt-1.5 max-w-full bg-gray-50 rounded-lg w-[632px] max-md:flex-wrap">
      <div className="flex flex-col">
        <div className="text-sm font-bold leading-5 text-zinc-900">{title}</div>
        {details && (
          <div className="flex gap-1 mt-2 text-xs leading-5 text-gray-500">
            <Image
            width={50}
            height={50}
              loading="lazy"
              src={iconSrc}
              alt=""
              className="shrink-0 w-4 aspect-square"
            />
            <div className="flex-auto my-auto">{details}</div>
          </div>
        )}
      </div>
      <Image
        width={50}
        height={50}
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce73f766ae99e3f8681ab03a42894f9b99ab59a87853a77472a702dc5e50424d?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
        alt=""
        className="shrink-0 my-auto w-6 aspect-square"
      />
    </div>
  );

export default Events;