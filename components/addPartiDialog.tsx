'use client'
import React from 'react'
import { Button  } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import Image from 'next/image';
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import {
  Form,

  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import axios from 'axios'

interface TextAreaFieldProps {
  label: string;
  id: string;
}

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
function AddPartiDialog() {
  const formSchema = z.object({
    nom: z.string().min(3, {
      message: "Le nom doit au moins contenir 3 caracteres.",
    }),
    matriculeParti: z.string().min(3, {
      message: "Le matricule doit au moins contenir 3 caracteres."
    }),
    description: z.string().min(1, {
      message: "Ce champs est requis"
    }),



  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
  const onSubmit = async(values: z.infer<typeof formSchema>)=>{
    const date = new Date()
    const dateCreation = format(date, 'dd/MM/yyyy');
    const response = await axios.post('http://localhost:3000/api/creerParti' ,{...values , dateCreation})
    console.log(response)
    // console.log("dkakb")
  }
  return (
    <Dialog >
      <DialogTrigger asChild>

        <Button className="flex gap-1.5 justify-center px-3 py-2.5 text-sm leading-5 text-white bg-cyan-500 rounded">
          <Image width={50} height={50} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b373777c3f57a1c691a3f154a94866d34b97af969c8bf7355344783e7c4ea90?apiKey=9c066bb72ce5442ca7b521d698a43bb1&" alt="" className="shrink-0 w-4 aspect-square" />

          Ajouter Parti
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[800px]">
        <DialogHeader>
          <DialogTitle>Ajoutez Parti</DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire pour ajouter un Parti
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form method='post' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrer le nom du Parti" {...field} className=" bg-white border border-solid  border-cyan-500  items-start px-3 py-3 mt-2 whitespace-nowrap   text-neutral-300 max-md:pr-5" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="matriculeParti"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Matricule</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrer le matricule du parti " {...field} className=" bg-white border border-solid  border-cyan-500  items-start px-3 py-3 mt-2 whitespace-nowrap   text-neutral-300 max-md:pr-5" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          
            <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description du parti politique"
                  className="resize-none  bg-white border border-solid  border-cyan-500  items-start px-3 py-3 mt-2 whitespace-nowrap   text-neutral-300 max-md:pr-5"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Descrivez en quelques mots le parti politique
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
            {/* <TextAreaField label='description' id='description' /> */}

        <DialogFooter>
          <div className="flex gap-4 self-end mt-10 whitespace-nowrap">

            <button type="submit" className="justify-center px-3 py-3 text-white bg-cyan-500 rounded">
              Enregistrer
            </button>
          </div>
        </DialogFooter>
        </form>

        </Form>



      </DialogContent>
    </Dialog>
  );
}

export default AddPartiDialog;