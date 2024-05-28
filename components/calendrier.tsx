"use client"
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';





import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function Calendrier() {
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
    <input type="text" className="hidden" value={formattedDateFrench} name='date' />
    </>
  )
}
