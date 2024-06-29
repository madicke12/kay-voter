
import { countVote } from "../server/action";

type CandidateRowProps = {
  id: string,
  nom: string;
  prenom: string,

};

const CandidateRow: React.FC<CandidateRowProps> =async ({id, nom,prenom }) => {
  const votes = await countVote(id)
  return (
    <div className="flex gap-0 justify-between bg-black bg-opacity-0 leading-[157%] max-md:flex-wrap max-md:max-w-full">
      <div className="flex px-5"><div className="justify-center items-start  py-6 font-bold bg-white border-0 border-gray-100 border-solid">{prenom +" "+ nom}</div>
      <div className="justify-center px-12 py-6 text-center whitespace-nowrap bg-white border-0 border-gray-100 border-solid max-md:px-5">{votes}</div></div>
        <div>
      {/* <Image width={50} height={50} loading="lazy" src={imageSrc} alt={alt} className="shrink-0 aspect-[1.23] w-[74px]" /> */}
     
        </div>
    </div>
  );
};

export default CandidateRow
