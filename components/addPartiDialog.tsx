'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
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

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id }) => (
  <div className="flex flex-col justify-center py-4  max-md:max-w-full">
    <label htmlFor={id} className="font-bold text-gray-700 max-md:max-w-full">{label}</label>
    <div className="flex flex-col pt-3 pb-px pl-3 text-neutral-700 max-md:max-w-full">
      <textarea id={id} className="max-md:max-w-full justify-center items-start p-2 rounded border-solid bg-black bg-opacity-0 border-[5px] border-cyan-500 border-opacity-20" placeholder='Decrivez le parti ....' />
    </div>
  </div>
);
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
    dob: z.date({
      required_error: "A date of birth is required.",
    }),


  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
  const onSubmit = async(values: z.infer<typeof formSchema>)=>{
    const response = await axios.post('http://localhost:3000/api/creerParti' ,values)
    console.log(response)
    console.log("dkakb")
  }
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
                    <Input placeholder="Entrer la description du parti" {...field} className=" bg-white border border-solid  border-cyan-500  items-start px-3 py-3 mt-2 whitespace-nowrap   text-neutral-300 max-md:pr-5" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
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