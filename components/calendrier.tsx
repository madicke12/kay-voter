/* eslint-disable react/no-unescaped-entities */
"use client"
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function Calendrier(props : any) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const formattedDateFrench = date ? format(date, 'PPPP', { locale: fr }) : '';
  return (
    <>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow" 
    />
    <FormField
          control={props.form.control}
          name="date"
          render={({ field }) => (
            <FormItem className='hidden'>
              <FormLabel>CNI</FormLabel>
              <FormControl>
                <Input  type="text"  {...field}   className="   hidden" />
              </FormControl>
              <FormDescription>
                C'est votre numero d'indentification nationale
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
    </>
  )
}
