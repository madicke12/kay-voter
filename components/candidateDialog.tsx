import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { getSession } from "../server/auth"

import ClientForm from "./clientform"

type propri = {
    electionId: string,
    candidatId: string,
    photoUrl : string,
    nom : string,
    prenom: string,
}


const CandidateDialog:React.FC<propri> = async ({electionId ,candidatId , photoUrl ,nom , prenom}) => {
    
    const session = await getSession() 
    console.log(session)
    return (
        <Dialog>
            <DialogTrigger asChild className="mt-3 " >

               
                <Image width={700} height={700} loading="lazy" src={photoUrl} alt="" className="shrink-0  aspect-square" />

            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <section className="flex flex-col items-center px-10 pb-2 bg-white rounded-lg  max-w-[682px] max-md:px-5">
                    <figure className="flex overflow-hidden relative flex-col items-center px-16 pt-20 w-full max-md:px-5 max-md:max-w-full">
                        <Image
                            loading="lazy"
                            src={photoUrl}
                            alt=""
                            className="object-cover absolute inset-0 size-full"
                            width={496}
                            height={500}
                        />
                        <Image
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d77560bcd6cd599b15239e719a14a12b214e188f5bf8984bbc62baaf95e38434?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
                            alt=""
                            className="mt-96 w-px border border-solid aspect-[0.03] border-zinc-200 stroke-[1px] stroke-zinc-200 max-md:mt-10"
                            width={496}
                            height={500}
                        />
                    </figure>
                    <h2 className="mt-9 text-xl font-bold leading-8 text-zinc-700">{prenom + " " + nom}</h2>
                    <p className="mt-5 text-sm leading-5 text-center text-zinc-900">Appuyer sur confirmer pour confirmer le vote</p>
                    <ClientForm electionId={electionId} candidatId={candidatId} session={session.isElecteur.id}/>
                </section>


            </DialogContent>
        </Dialog>
    )
}

export default CandidateDialog;