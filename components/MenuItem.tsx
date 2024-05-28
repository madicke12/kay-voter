'use client';
import Image from 'next/image';
import Link from 'next/link';
import {clsx} from 'clsx';

import {
  Calendar,
  BarChart,
  Plus,
  Users,
} from 'lucide-react';
import { usePathname } from 'next/navigation';


interface MenuItemProps {
  imgSrc: string;
  text: string;
  alt: string;
  href: string;

}

const MenuItem: React.FC<MenuItemProps> = ({ imgSrc, text, alt, href }) => {
  const path = usePathname();
  console.log(path);
  console.log(href ,"href");
  return (
  <Link className={clsx("flex gap-2 justify-center px-4 py-2 whitespace-nowrap rounded ",
    path=== `/dashboard/${href}` ? "bg-kherer text-main":""
  ) } href={href}>
    {imgSrc === 'Calendar' && <Calendar size={24} />}
    {imgSrc === 'BarChart' && <BarChart size={24} />}
   
    {imgSrc === 'Users' && <Users size={24} />}
    <div className="flex-auto my-auto">{text}</div>
  </Link>)
}
;


export default MenuItem;