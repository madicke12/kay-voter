'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Grip from "./grip"
  
export function Dropdown() {

  return (
    <DropdownMenu>
  <DropdownMenuTrigger><Grip/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Election</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Parametrer Second tour</DropdownMenuItem>
    <DropdownMenuItem>Terminer</DropdownMenuItem>
    <DropdownMenuItem>Archiver</DropdownMenuItem>
  
  </DropdownMenuContent>
</DropdownMenu>

  )
}