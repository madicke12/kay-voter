"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
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


export function UserForm() {
  // ...
  const formSchema = z.object({
    username: z.string().min(9, {
      message: "Le numero d'indentification national doit contenir au moins 9 caractères.",
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CNI</FormLabel>
              <FormControl>
                <Input placeholder="CNI" {...field} className="justify-center items-start px-3 py-3 mt-2 whitespace-nowrap bg-gray-100 rounded-3xl text-neutral-300 max-md:pr-5"/>
              </FormControl>
              <FormDescription>
                C'est votre numero d'indentification nationale
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
