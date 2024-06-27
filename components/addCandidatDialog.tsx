/* eslint-disable react/no-unescaped-entities */
'use client'
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
import {
    Form,

    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { type PutBlobResult } from '@vercel/blob'
import Image from "next/image"
import { useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { upload } from '@vercel/blob/client';
import axios  from 'axios';

export function AddCandidatDialog() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [blob, setBlob] = useState<PutBlobResult | null>(null);
    const formSchema = z.object({
        nom: z.string().min(3, {
            message: "Le nom doit au moins contenir 3 caracteres.",
        }),
        prenom: z.string().min(3, {
            message: "Le nom doit au moins contenir 3 caracteres."
        }),
        cni: z.string().min(9, {
            message: "Le numero d'indentification national doit etre un entier."
        }),
        matriculeParti: z.string().min(3, {
            message: "Le matricule doit au moins contenir 3 caracteres."
        }),
        matriculeElection: z.string().min(3, {
            message: "Le matricule doit au moins contenir 3 caracteres."
        }),
        photo: z.unknown()

    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const file = inputFileRef.current.files[0];
        const newBlob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/image/upload',
          });
          setBlob(newBlob);
        values.photo = newBlob.url ;
        const response = await axios.post('/api/candidat/creer',values ) ;
        console.log(response.data) ;
    }
    return (
        <Dialog>
            <DialogTrigger asChild className="mt-3">

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
                    <Form {...form}>
                        <form method="post" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="nom"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nom</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Entrer le nom du candidat" {...field} className=" bg-white border border-solid  border-cyan-500  items-start px-3 py-3 mt-2 whitespace-nowrap   text-neutral-300 max-md:pr-5" />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="prenom"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Prenom</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Entrer le prenom du candidat" {...field} className=" bg-white border border-solid  border-cyan-500  items-start px-3 py-3 mt-2 whitespace-nowrap   text-neutral-300 max-md:pr-5" />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="cni"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CNI</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Entrer le CNI du candidat" {...field} className=" bg-white border border-solid  border-cyan-500  items-start px-3 py-3 mt-2 whitespace-nowrap   text-neutral-300 max-md:pr-5" />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <div className="flex flex-col justify-center py-1 mt-2.5 text-xs leading-5 bg-black bg-opacity-0">
                                <FormField
                                    control={form.control}
                                    name="matriculeElection"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Election</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Entrer le matricule de l'election associe a la candidature" {...field} className=" bg-white border border-solid  border-cyan-500  items-start px-3 py-3 mt-2 whitespace-nowrap   text-neutral-300 max-md:pr-5" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex flex-col justify-center py-1 mt-2.5 text-xs leading-5 bg-black bg-opacity-0">
                                <FormField
                                    control={form.control}
                                    name="matriculeParti"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Parti</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Entrer le matricule du parti politique du candidat" {...field} className=" bg-white border border-solid  border-cyan-500  items-start px-3 py-3 mt-2 whitespace-nowrap   text-neutral-300 max-md:pr-5" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="photo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Photo du candidat</FormLabel>
                                            <FormControl>
                                                <Input id="picture" ref={inputFileRef}  type="file"  />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>




                            <DialogFooter>
                                <div className="flex gap-4 self-end mt-12 whitespace-nowrap">
                                    <button type="button" className="justify-center px-3 py-3.5 rounded bg-slate-200 text-zinc-400">annuler</button>
                                    <button type="submit" className="justify-center p-2 text-white bg-cyan-500 rounded">Enregistrer</button>
                                </div>
                            </DialogFooter>
                        </form>
                    </Form>
                </div>

            </DialogContent>
        </Dialog>
    )
}
