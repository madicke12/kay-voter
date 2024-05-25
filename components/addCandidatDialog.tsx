import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import InputBlock from "./n"
import Image from "next/image"

export function AddCandidatDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>

                <Button className="flex gap-1.5 justify-center px-3 py-2.5 text-sm leading-5 text-white bg-cyan-500 rounded">
                    <Image width={50} height={50} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b373777c3f57a1c691a3f154a94866d34b97af969c8bf7355344783e7c4ea90?apiKey=9c066bb72ce5442ca7b521d698a43bb1&" alt="" className="shrink-0 w-4 aspect-square" />

                    Ajouter Candidat
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Ajoutez Candidat</DialogTitle>
                    <DialogDescription>
                       Remplissez ce formulaire pour ajouter un Candidat
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <form>
                        <InputBlock label="Nom" placeholder="Entrer le nom du candidat" name={"nom"} />
                        <InputBlock label="Prenom" placeholder="Entrer le Prenom du candidat" name={"prenom"} />
                        <InputBlock label="CNI" placeholder="Entrer le CNI du candidat" name={"CNI"} />

                        <div className="flex flex-col justify-center py-1 mt-2.5 text-xs leading-5 bg-black bg-opacity-0">
                            <label className="font-bold text-gray-700">Election</label>
                            <div className="flex flex-col justify-center bg-white rounded border border-cyan-500 border-solid text-neutral-300">
                                <input
                                    type="text"
                                    placeholder="Entrer le matricule de l'election associe a la candidature"
                                    aria-label="Election"name="matriculeElection"
                                    className="justify-center items-start p-2 rounded border-solid bg-black bg-opacity-0 border-[5px] border-cyan-500 border-opacity-20"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center py-1 mt-2.5 text-xs leading-5 bg-black bg-opacity-0">
                            <label className="font-bold text-gray-700">Parti</label>
                            <div className="flex flex-col justify-center bg-white rounded border border-cyan-500 border-solid text-neutral-300">
                                <input
                                    type="text"
                                    placeholder="Entrer le matricule du parti politique du candidat"
                                    aria-label="Parti"name="matriculeParti"
                                    className="justify-center items-start p-2 rounded border-solid bg-black bg-opacity-0 border-[5px] border-cyan-500 border-opacity-20"
                                />
                            </div>
                        </div>

                        
                        <DialogFooter>
                        <div className="flex gap-4 self-end mt-12 whitespace-nowrap">
                            <button type="button" className="justify-center px-3 py-3.5 rounded bg-slate-200 text-zinc-400">annuler</button>
                            <button type="submit" className="justify-center p-2 text-white bg-cyan-500 rounded">Enregistrer</button>
                        </div>
                </DialogFooter>
                    </form>
                </div>
               
            </DialogContent>
        </Dialog>
    )
}
