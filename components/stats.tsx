import Image from "next/image";
type StatCardProps = {
  title: string;
  value: string | number;
  percentage: string;
  percentageColor: string;
  iconSrc: string;
  bgColor: string;
  alt: string;
};

const StatCard: React.FC<StatCardProps> = ({ title, value, percentage, percentageColor, iconSrc, bgColor, alt }) => {
  return (
    <div className={`flex flex-col grow items-start py-5 pr-20 pl-4 mx-auto w-full ${bgColor} rounded-md text-zinc-700 max-md:pr-5 max-md:mt-4`}>
      <div className="text-base leading-7">{title}</div>
      <div className="mt-6 text-3xl font-semibold leading-10">{value}</div>
      <div className={`flex gap-1 mt-4 text-sm font-bold leading-5 ${percentageColor} whitespace-nowrap`}>
        <Image loading="lazy" src={iconSrc} alt={alt} className="shrink-0 w-3 aspect-square" />
        <div>{percentage}</div>
      </div>
    </div>
  );
};

export default StatCard;