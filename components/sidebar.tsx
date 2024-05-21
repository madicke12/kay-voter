import * as React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import UserInfo from "./UserInfo";

const Sidebar: React.FC = () => {
  const menuItems = [
    {
      link: "ajouterElection",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/06bad53ea49609ec80b4454375d13521356db44396b8454504f5fe1efa7728d4?apiKey=9c066bb72ce5442ca7b521d698a43bb1&",
      text: "Ajoutez election",
      alt: "Add Election",
    },
    {
      link: "Partis",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eae64112f3f3ba6b80fdd1a2e59bc2aea29163a658de5a98d8938fc461abed59?apiKey=9c066bb72ce5442ca7b521d698a43bb1&",
      text: "Parties",
      alt: "Partis",
    },
    {
      link: "Statistics",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a55e61d1ac30d508f133881f398a777bdadbdcf4b09f93b156ce3d1cbd776e56?apiKey=9c066bb72ce5442ca7b521d698a43bb1&",
      text: "Statistiques",
      alt: "Statistics",
    },
    {
      link: "AjouterCandidat",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e562219fef80e23a1a12a19da86119a3385295e21540bb05993d8dd16c6c58e1?apiKey=9c066bb72ce5442ca7b521d698a43bb1&",
      text: "Ajoutez Candidat",
      alt: "Add Candidate",
    },
  ];

  return (
    <div className="flex flex-col h-fit justify-between px-4 py-6 bg-white shadow-sm max-w-[252px]">
     <div>
     <header className="flex gap-2 text-lg font-bold leading-7 whitespace-nowrap text-zinc-900">
        <Image
          width={50}
          height={50}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69db638aaa61f227dad8055f0c16c0bef91ddac9eb519e044300d30d292fb3f3?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
          alt="Kayvote logo"
          className="shrink-0 w-12 aspect-square"
        />
        <div className="flex-auto my-auto">Kayvote</div>
      </header>
      <nav className="flex flex-col justify-center mt-9 w-full text-sm leading-5 text-gray-600 bg-black bg-opacity-0">
        {menuItems.map(({ imgSrc, text, alt ,link}) => (
          <MenuItem key={text} imgSrc={imgSrc} text={text} alt={alt} href={link} />
        ))}
      </nav>
     </div>
      <UserInfo
        imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/10e290dd26edbfb5f751f1164e229ff19219f6714f8c7c0c5e208993f231500b?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
        name="Sergey Goldberg"
        email="company@example.com"
        alt="Sergey Goldberg"
      />
    </div>
  );
};

export default Sidebar;