import Image from "next/image";
import l from '../../assets/Image2560.png' 
import i from '../../assets/Image 9.png'
export default function Home() {
  return (
    <main className=" w-full bg-yamba h-full p-10">
      <nav className="flex mr-3 mt-10 text-4xl"> <Image className="mr-3 "  height={20}  alt="" width={25} src={l}/>KayVoter</nav>
      <div className="flex item">
        <div className="flex items-center  justify-center">
        <div >
          <span className=" text-[45px] w-24 mt-10 mr-10">
            Bienvenu sur votre platforme en ligne
          </span>
        </div>
        <Image src={i}  alt="" height={400} width={400}/>
        </div>
      </div>
    </main>
  );
}
