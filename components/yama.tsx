import Image from "next/image";
import Party from "./parti";


const AddPartiComponent: React.FC = () => {
  const parties = [
    { name: 'PDS', date: '13/04/2020', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8ed98abb243c607b6195f9272542f89eb7b4f3b31279cb19408e6963b88d944?apiKey=9c066bb72ce5442ca7b521d698a43bb1&', logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b4c333d3be07fa25d009b4ccfc73b9658c6db0624655f3d8b5a0e8a47ae0f3f2?apiKey=9c066bb72ce5442ca7b521d698a43bb1&', altText: 'Party Icon PDS' },
    { name: 'Pastef', date: '25/09/2020', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8ed98abb243c607b6195f9272542f89eb7b4f3b31279cb19408e6963b88d944?apiKey=9c066bb72ce5442ca7b521d698a43bb1&', logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b4c333d3be07fa25d009b4ccfc73b9658c6db0624655f3d8b5a0e8a47ae0f3f2?apiKey=9c066bb72ce5442ca7b521d698a43bb1&', altText: 'Party Icon Pastef' },
    { name: 'beno', date: '30/11/2021', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8ed98abb243c607b6195f9272542f89eb7b4f3b31279cb19408e6963b88d944?apiKey=9c066bb72ce5442ca7b521d698a43bb1&', logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/505b956adaac5f5f7ade102ea10bea22abcb948842e90e66e7649769a886c20d?apiKey=9c066bb72ce5442ca7b521d698a43bb1&', altText: 'Party Icon beno' },
    { name: 'Awaler', date: '21/03/2020', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8ed98abb243c607b6195f9272542f89eb7b4f3b31279cb19408e6963b88d944?apiKey=9c066bb72ce5442ca7b521d698a43bb1&', logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/505b956adaac5f5f7ade102ea10bea22abcb948842e90e66e7649769a886c20d?apiKey=9c066bb72ce5442ca7b521d698a43bb1&', altText: 'Party Icon Awaler' },
  ];

  return (
    <section className="flex flex-col max-w-[817px]">
      <header className="flex gap-5 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <h1 className="flex-auto my-auto text-2xl font-bold leading-9 text-zinc-900">Parties Politiques</h1>
        <button className="flex gap-1.5 justify-center px-3 py-2.5 text-sm leading-5 text-white bg-cyan-500 rounded" tabIndex={0}>
          <Image width={50} height={50} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b373777c3f57a1c691a3f154a94866d34b97af969c8bf7355344783e7c4ea90?apiKey=9c066bb72ce5442ca7b521d698a43bb1&" alt="" className="shrink-0 w-4 aspect-square" />
          <span>Ajouter Partie</span>
        </button>
      </header>
      <div className="flex gap-2 justify-center self-end px-3 py-2.5 mt-20 mr-32 text-sm leading-5 text-gray-600 whitespace-nowrap bg-gray-200 rounded-lg max-md:mt-10 max-md:mr-2.5">
        <span className="my-auto">Filtrer</span>
        <Image width={50} height={50} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ed45ff9ff46eafdf68f31024ba940363e55c04360eefd314fea92da5a3a3c1e?apiKey=9c066bb72ce5442ca7b521d698a43bb1&" alt="" className="shrink-0 w-4 aspect-square" />
      </div>
      <section className="flex flex-col justify-center mt-5 w-full text-sm leading-5 whitespace-nowrap rounded-lg border border-solid bg-black bg-opacity-0 border-zinc-200 max-md:max-w-full">
        {parties.map((party) => (
          <Party key={party.name} {...party} />
        ))}
      </section>
    </section>
  );
};

export default AddPartiComponent;