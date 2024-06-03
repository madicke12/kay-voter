import React from "react";
import { CarouselSize } from "../../../../components/slide";
import { getSession } from "../../../../server/auth";
import { cookies } from "next/headers";





const page: React.FC = async() => {

const session = cookies().get("session")
console.log(session)

    return (
        <main className="flex justify-center items-center px-16 py-20 bg-gray-50 max-md:px-5">
            <section className="flex flex-col items-center mt-16 w-full max-w-[1044px] max-md:mt-10 max-md:max-w-full">
               <CarouselSize/>
            </section>
        </main>
    );
};

export default page;