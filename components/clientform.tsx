'use client'
import { Button } from "@/components/ui/button"
import { FC } from "react"
import axios from "axios"
type propsType ={
    electionId : string,
    candidatId: string,
    session: any
}
const ClientForm : FC<propsType> =({electionId ,candidatId ,session})=>{
    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        // await axios.post('/api/vote',e.target.value)
    
    try {
        // Send the form data to the backend
        const response = await axios.post('/api/vote', {electionId ,candidatId ,session});
        
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};
    return(
        <form method="post" onSubmit={handleSubmit}>
                    <div className="flex gap-5 self-stretch mt-9 text-sm leading-5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                        <Button
                            type="submit"
                            className="grow justify-center items-center px-16 py-3.5 text-white bg-violet-500 rounded w-fit max-md:px-5"
                        >
                            Confirmer
                        </Button>
                    </div>
                    </form>
    )
}
export default ClientForm