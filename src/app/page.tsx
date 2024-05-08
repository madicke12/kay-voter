import Image from "next/image";
import l from '../../assets/Image2560.png'
import i from '../../assets/Image 9.png'
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main className=" w-full yamba h-screen p-16 text-white">
      <nav className="flex mr-3  text-4xl "> <Image className="mr-3 " height={20} alt="" width={25} src={l} />KayVoter</nav>
      <div className="flex  mt-10">
        <div className="flex items-center  justify-center">
          <div className="mr-52">
            <span className=" text-[45px]  mt-10 ">
              Bienvenu sur votre <br />platforme en ligne<br />
              Simple ,Rapide et Efficace
            </span>
            <div className="mt-8">
            <span className=" font-mono font-bold text-xl">
              Ceci est un dispositif de vote en ligne qui vous permet <br/>de voter en toute sécurité 
              et en toute transparence
            </span>
            </div>
            
            <Button className="mt-10 bg-main hover:bg-cyan-400 w-[250px]" asChild ><Link href={'/login'}> Commencer</Link></Button>
          </div>
          <Image src={i} alt="" height={400} width={400} />
        </div>
      </div>
    </main>
  );
}
