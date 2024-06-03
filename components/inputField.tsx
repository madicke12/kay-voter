
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
import { login } from "../server/auth"

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })



//   return (
//     
//   )
// }


interface InputFieldProps {
  label: string;
  placeholder: string;
}



const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {

  return (
    <div className="flex flex-col justify-center pt-2 pb-px mt-5 bg-black bg-opacity-0">
      {/* <label htmlFor={label} className="font-bold text-gray-700">
          {label}
        </label>
        <input
          type="text"
          id={label}
          className="justify-center items-start px-3 py-3 mt-2 whitespace-nowrap bg-gray-100 rounded-3xl text-neutral-300 max-md:pr-5"
          placeholder={placeholder}
          name={name}
        /> */}
        <form className="space-y-8" action={async(formdata)=>{
          'use server'
          login(formdata) ;
        }} > 
                  <Input placeholder={placeholder} className="justify-center items-start px-3 py-3 mt-2 whitespace-nowrap bg-gray-100 rounded-3xl text-neutral-300 max-md:pr-5" />
          <Button type="submit">Submit</Button>
        </form>
    </div>
  );
};

export default InputField