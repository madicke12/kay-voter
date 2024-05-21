
import Image from 'next/image';
import Link from 'next/link';


interface MenuItemProps {
  imgSrc: string;
  text: string;
  alt: string;
  href: string;

}
const MenuItem: React.FC<MenuItemProps> = ({ imgSrc, text, alt ,href }) => (
  <Link className="flex gap-2 justify-center px-4 py-2 whitespace-nowrap rounded bg-black bg-opacity-0" href={href}>
    <Image  width={50} height={50} loading="lazy" src={imgSrc} alt={alt} className="shrink-0 w-6 aspect-square" />
    <div className="flex-auto my-auto">{text}</div>
  </Link>
);


export default MenuItem;