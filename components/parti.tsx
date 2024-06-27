import Image from "next/image";

type PartyProps = {
    nom: string;
    dateCreation: string;
  };
  
   const iconSrc ='https://cdn.builder.io/api/v1/image/assets/TEMP/f8ed98abb243c607b6195f9272542f89eb7b4f3b31279cb19408e6963b88d944?apiKey=9c066bb72ce5442ca7b521d698a43bb1&'
  const logoSrc = 'https://cdn.builder.io/api/v1/image/assets/TEMP/b4c333d3be07fa25d009b4ccfc73b9658c6db0624655f3d8b5a0e8a47ae0f3f2?apiKey=9c066bb72ce5442ca7b521d698a43bb1&'
  const Party: React.FC<PartyProps> = ({ nom, dateCreation, }) => (
    <div className="flex gap-0 items-center justify-between px-5 w-full bg-black bg-opacity-0 max-md:flex-wrap border border-t-1 max-md:max-w-full">
      <div className="justify-center items-start px-5 py-7 font-bold text-zinc-900">
        {nom}
      </div>
      <div className="flex gap-1">
      <div className="flex gap-1 justify-center    text-zinc-400">
        <Image width={100} height={100} loading="lazy" src={iconSrc} alt={''} className="shrink-0 w-4 aspect-square" />
        <div className="flex-auto my-auto">{dateCreation}</div>
      </div>
      <Image width={100} height={100} loading="lazy" src={logoSrc} alt=""/>
      </div>
    </div>
  );

  export default Party;