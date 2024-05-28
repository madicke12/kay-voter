import * as React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import UserInfo from "./UserInfo";
import { AddCandidatDialog } from "./addCandidatDialog";



const Sidebar: React.FC = () => {
  const menuItems = [
    {
      link: "index",
      imgSrc:"Calendar",
      text: "Ajoutez election",
      alt: "Add Election",
    },
    {
      link: "Partis",
      imgSrc:"Users",
      text: "Parties",
      alt: "Partis",
    },
    {
      link: "Statistics",
      imgSrc: "BarChart",
      text: "Statistiques",
      alt: "Statistics",
    },
    
  ];

  return (
    <div className="flex flex-col h-full justify-between px-4 py-6 bg-white shadow-sm max-w-[252px]">
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
        <AddCandidatDialog />
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