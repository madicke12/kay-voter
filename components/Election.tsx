/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from "next/image";
import { Calendrier } from "./calendrier";
import { Button } from "@/components/ui/button";
import Grip from "./grip";
import Event from "./event";
import axios from 'axios'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import useSWR from 'swr'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useEffect, useState } from 'react'
import { Calendar } from "@/components/ui/calendar"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Election: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const formattedDateFrench = date ? format(date, 'PPPP', { locale: fr }) : '';
  const { data, error } = useSWR('/api/election/getAll', fetcher)

  const formSchema = z.object({
    matricule: z.string().min(9, {
      message: "Le numero d'indentification national doit etre un entier.",
    }),
    tour: z.string().min(9, {
      message: "Le numero electeur doit contenir exactement 9 caractères."
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('http://localhost:3000/api/election/creer', { ...values, date: formattedDateFrench })
      console.log(response.data)
    } catch (error) {
      console.error("Failed to submit form:", error)
    }
  }

  return (
    <div className="flex flex-col items-start px-8 pt-8 pb-20 bg-white rounded max-md:px-5">
      <Form {...form}>
        <form className="flex flex-col justify-center text-sm leading-5 bg-black bg-opacity-0" onSubmit={form.handleSubmit(onSubmit)}>
          <section className="self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-2 max-md:max-w-full">
                  <div className="flex mb-5 gap-5 px-px w-full max-md:flex-wrap max-md:max-w-full">
                    <h1 className="flex-auto my-auto text-2xl font-bold leading-9 text-zinc-900">
                      Calendrier
                    </h1>
                    <Button className="flex gap-1.5 justify-center px-3 py-2.5 text-sm leading-5 text-white bg-cyan-500 rounded" type="submit">
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b373777c3f57a1c691a3f154a94866d34b97af969c8bf7355344783e7c4ea90?apiKey=9c066bb72ce5442ca7b521d698a43bb1&"
                        alt=""
                        width={20}
                        height={20}
                        className="shrink-0 w-4 aspect-square"
                      />
                      <span className="flex-auto">Ajouter Election</span>
                    </Button>
                  </div>
                </div>
                <div className=" p-4 w-[700px]">
                  {error && <div className="text-red-500">Failed to load elections</div>}
                  {!data && <div>Loading...</div>}
                  {data && data.map((election: any) => (
                    // 
                    <Event
                      key={election.id}
                      time={election.date}
                      titre={election.titre}
                      duration={"8h-18h"}
                      isImportant={true}/>
                  ))}
                </div>
              </div>
              <aside className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow"
                />
                <div className="flex flex-col grow max-md:mt-2">
                  <div className="mt-5">
                    <FormField
                      control={form.control}
                      name="matricule"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Matricule</FormLabel>
                          <FormControl>
                            <Input placeholder="Matricule" {...field} className="bg-white border border-solid border-cyan-500 items-start px-3 py-3 mt-2 whitespace-nowrap text-neutral-300 max-md:pr-5" />
                          </FormControl>
                          <FormDescription>
                            C'est La matricule de l'election
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="mt-5">
                    <FormField
                      control={form.control}
                      name="tour"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Intitulé</FormLabel>
                          <FormControl>
                            <Input placeholder="Intitulé" {...field} className="bg-white border border-solid border-cyan-500 items-start px-3 py-3 mt-2 whitespace-nowrap text-neutral-300 max-md:pr-5" />
                          </FormControl>
                          <FormDescription>
                            C'est L'intitule de l'election
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </form>
      </Form>
    </div>
  );
};

export default Election;
