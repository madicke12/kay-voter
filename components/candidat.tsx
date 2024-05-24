import Image from "next/image";


type CandidateRowProps = {
  name: string;
  votes: string | number;
  productName: string;
  imageSrc: string;
  alt: string;
};

const CandidateRow: React.FC<CandidateRowProps> = ({ name, votes, productName, imageSrc, alt }) => {
  return (
    <div className="flex gap-0 justify-center pr-1.5 bg-black bg-opacity-0 leading-[157%] max-md:flex-wrap max-md:max-w-full">
      <div className="justify-center items-start px-5 py-6 font-bold bg-white border-0 border-gray-100 border-solid">{name}</div>
      <div className="justify-center px-12 py-6 text-center whitespace-nowrap bg-white border-0 border-gray-100 border-solid max-md:px-5">{votes}</div>
      <div className="shrink-0 bg-white border-0 border-gray-100 border-solid h-[60px] w-[154px]" />
      <div className="shrink-0 bg-white border-0 border-gray-100 border-solid h-[60px] w-[120px]" />
      <div className="shrink-0 bg-white border-0 border-gray-100 border-solid h-[60px] w-[140px]" />
      <Image width={50} height={50} loading="lazy" src={imageSrc} alt={alt} className="shrink-0 aspect-[1.23] w-[74px]" />
    </div>
  );
};

export default CandidateRow
