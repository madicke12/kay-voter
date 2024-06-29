import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { Button } from "@/components/ui/button"
import { FC } from 'react';


const formSchema = z.object({
    email: z.string().min(9, {
      message: "email incorrecte.",
    }),
    password: z.string().min(9, {
      message: "mot de passe incorrecte."
    })
  })
 
 async function onSubmit(values: z.infer<typeof formSchema>) {
   const response = await axios.post('http://localhost:3000/api/login',values)
   window.location.href = response.data.redirectUrl
  }
export function  page (){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    
      })
    return(
        <Form {...form}>
        <form method='post' onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNI</FormLabel>
                <FormControl>
                  <Input placeholder="CNI" {...field} className="justify-center items-start px-3 py-3 mt-2 whitespace-nowrap bg-gray-100 rounded-3xl text-neutral-300 max-md:pr-5" />
                </FormControl>
                <FormDescription>
                  C'est votre numero d'indentification nationale
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNI</FormLabel>
                <FormControl>
                  <Input placeholder="Numero Electeur" {...field} className="justify-center items-start px-3 py-3 mt-2 whitespace-nowrap bg-gray-100 rounded-3xl text-neutral-300 max-md:pr-5"   />
                </FormControl>
                <FormDescription>
                  C'est votre numero Electeur
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Valider</Button>
        </form>
      </Form>
    )
}

export default page