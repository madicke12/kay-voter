import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import InputBlock from './n';

interface TextAreaFieldProps {
  label: string;
  id: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id }) => (
  <div className="flex flex-col justify-center py-4  max-md:max-w-full">
    <label htmlFor={id} className="font-bold text-gray-700 max-md:max-w-full">{label}</label>
    <div className="flex flex-col pt-3 pb-px pl-3 text-neutral-700 max-md:max-w-full">
      <textarea id={id} className="max-md:max-w-full justify-center items-start p-2 rounded border-solid bg-black bg-opacity-0 border-[5px] border-cyan-500 border-opacity-20"  placeholder='Decrivez le parti ....'/>
    </div>
  </div>
);

function AddPartiDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>

        <Button className="flex gap-1.5 justify-center px-3 py-2.5 text-sm leading-5 text-white bg-cyan-500 rounded">
          <Image width={50} height={50} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b373777c3f57a1c691a3f154a94866d34b97af969c8bf7355344783e7c4ea90?apiKey=9c066bb72ce5442ca7b521d698a43bb1&" alt="" className="shrink-0 w-4 aspect-square" />

          Ajouter Parti
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajoutez Parti</DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire pour ajouter un Parti
          </DialogDescription>
        </DialogHeader>

        <form>
        <InputBlock label="Nom" placeholder="Entrer le nom du Parti" name={"nom"} />
        <InputBlock label="Matricule" placeholder="Entrer la matricule du parti" name={"nom"} />
         <TextAreaField label='description' id='description' />

        </form>
        <DialogFooter>
          <div className="flex gap-4 self-end mt-10 whitespace-nowrap">

            <button type="submit" className="justify-center px-3 py-3 text-white bg-cyan-500 rounded">
              Enregistrer
            </button>
          </div>
        </DialogFooter>



      </DialogContent>
    </Dialog>
  );
}

export default AddPartiDialog;