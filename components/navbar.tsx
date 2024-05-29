import * as React from 'react';
import Image from 'next/image';

interface NavItemProps {
  text: string;
  className: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, className }) => (
  <div
    className={`${className}  justify-center flex items-center px-16 py-5 w-fit max-md:px-5`}
    tabIndex={0}
    role='button'
  >
    {text}
  </div>
);

const Nav: React.FC = () => {
  return (
    <header className='flex gap-5 justify-between h-[76px] p-3 font-bold bg-violet-400 shadow-sm max-md:flex-wrap'>
      <div className='flex gap-4 my-auto text-3xl leading-10 text-white whitespace-nowrap'>
        <Image
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/f8b8322679362491bfe87bb9de3287bd5781db99fabdd5d400b33919daaeb4ff?apiKey=9c066bb72ce5442ca7b521d698a43bb1&'
          className='shrink-0 w-12 aspect-square'
          alt='Kayvote logo'
          width={48}
          height={48}
        />
        <div className='flex-auto my-auto'>Kayvote</div>
      </div>
      <nav className='flex gap-5 justify-between text-lg leading-7 max-md:flex-wrap max-md:max-w-full'>
        <div className='flex gap-0 justify-center bg-black bg-opacity-0 max-md:flex-wrap max-md:max-w-full'>
          <NavItem className='text-violet-500 bg-violet-50' text='Voter' />
          <NavItem className='text-white bg-black bg-opacity-0' text='Consulter Resultat' />
        </div>
      </nav>

        <Image
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/85be08c712196d0cff395ad67e386627a20a13ffcdde2c1dc6ec48c0234facba?apiKey=9c066bb72ce5442ca7b521d698a43bb1&'
          className='shrink-0 my-auto w-9 aspect-square'
          alt='User avatar'
          width={36}
          height={36}
        />
    </header>
  );
};

export default Nav;