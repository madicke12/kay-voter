import Image from "next/image";

type PartyProps = {
    name: string;
    date: string;
    iconSrc: string;
    logoSrc: string;
    altText: string;
  };
  
  const Party: React.FC<PartyProps> = ({ name, date, iconSrc, logoSrc, altText }) => (
    <div className="flex gap-0 items-center justify-between px-5 w-full bg-black bg-opacity-0 max-md:flex-wrap border border-t-1 max-md:max-w-full">
      <div className="justify-center items-start px-5 py-7 font-bold text-zinc-900">
        {name}
      </div>
      <div className="flex gap-1">
      <div className="flex gap-1 justify-center    text-zinc-400">
        <Image width={100} height={100} loading="lazy" src={iconSrc} alt={altText} className="shrink-0 w-4 aspect-square" />
        <div className="flex-auto my-auto">{date}</div>
      </div>
      <Image width={100} height={100} loading="lazy" src={logoSrc} alt=""/>
      </div>
    </div>
  );

  export default Party;