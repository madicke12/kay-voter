import Image from "next/image";
import Party from "./parti";
import AddPartiDialog from "./addPartiDialog";
import { getParties } from "../server/action";


const AddPartiComponent: React.FC = async () => {
  const parties = await getParties() ;

  return (
    <section className="flex flex-col max-w-[817px]">
      <header className="flex gap-5 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <h1 className="flex-auto my-auto text-2xl font-bold leading-9 text-zinc-900">Parties Politiques</h1>
        <AddPartiDialog/>
      </header>
      <div className="flex gap-2 justify-center self-end px-3 py-2.5 mt-20 mr-32 text-sm leading-5 text-gray-600 whitespace-nowrap bg-gray-200 rounded-lg max-md:mt-10 max-md:mr-2.5">
        <span className="my-auto">Filtrer</span>
        <Image width={50} height={50} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ed45ff9ff46eafdf68f31024ba940363e55c04360eefd314fea92da5a3a3c1e?apiKey=9c066bb72ce5442ca7b521d698a43bb1&" alt="" className="shrink-0 w-4 aspect-square" />
      </div>
      <section className="flex flex-col justify-center mt-5 w-full text-sm leading-5 whitespace-nowrap rounded-lg border border-solid bg-black bg-opacity-0 border-zinc-200 max-md:max-w-full">
        {parties.map((party) => (
          <Party key={party.id} nom={party.nom} dateCreation={party.dateCreation}  />
        ))}
      </section>
    </section>
  );
};

export default AddPartiComponent;