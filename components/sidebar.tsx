import Image from "next/image";

interface MenuItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive = false }) => (
  <div className={`flex gap-2 justify-center px-4 py-2 mt-2.5 whitespace-nowrap rounded ${isActive ? 'font-bold text-cyan-500 bg-cyan-50' : 'bg-black bg-opacity-0'}`}>
    <Image src={icon} width={40} height={40} alt="" className="shrink-0 w-6 aspect-square" />
    <div className="flex-auto my-auto">{label}</div>
  </div>
);

const menuItems: MenuItemProps[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9caf161091675594a98667a563e944440037256f6e5de17b4eae3daf6acdbe9c?apiKey=9c066bb72ce5442ca7b521d698a43bb1&", label: "Ajoutez election", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea0980a835af11d681429b803dfaa17704dd30128791ba987c01c86b97f18fe5?apiKey=9c066bb72ce5442ca7b521d698a43bb1&", label: "Parties" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d483e6fbc94331426fc773a6aad28ed2793be9bff7a75012e649e061981e345?apiKey=9c066bb72ce5442ca7b521d698a43bb1&", label: "Statistiques" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7e02a0123217885e643b316168e9f5113e8fc1682b75cbf57f926574a45bb45?apiKey=9c066bb72ce5442ca7b521d698a43bb1&", label: "Ajoutez Candidat" },
];

function Sidebar() {
  return (
    <div className="flex flex-col grow px-4 py-6 mx-auto w-full bg-white shadow-sm max-md:mt-8">
      <header className="flex gap-2 text-lg font-bold leading-7 whitespace-nowrap text-zinc-900">
        <Image width={40} height={40} src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c6b0fd87f2dead6374b2087baa1c131c23afcba76a53d91b79bca691a561818?apiKey=9c066bb72ce5442ca7b521d698a43bb1&" alt="Kayvote logo" className="shrink-0 w-12 aspect-square" />
        <div className="flex-auto my-auto">Kayvote</div>
      </header>
      <nav className="flex flex-col justify-center mt-9 w-full text-sm leading-5 text-gray-600 bg-black bg-opacity-0">
        {menuItems.map((item, index) => (
          <MenuItem key={index} icon={item.icon} label={item.label} isActive={item.isActive} />
        ))}
      </nav>
      <footer className="flex gap-3 mt-[742px] max-md:mt-10">
        <Image width={40} height={40} src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f9b525127059dd9a7d5b87e66b1a618b545763f314cdac12100f51891911eb8?apiKey=9c066bb72ce5442ca7b521d698a43bb1&" alt="User avatar" className="shrink-0 w-9 aspect-square" />
        <div className="flex flex-col my-auto">
          <div className="text-sm font-medium leading-5 text-zinc-900">Sergey Goldberg</div>
          <div className="mt-2 text-xs leading-5 text-zinc-400">company@example.com</div>
        </div>
      </footer>
    </div>
  );
}

export default Sidebar;