import CandidateRow from "../../../../components/candidat";


const page =()=>{
    const candidates = [
        {
          name: 'Moussa',
          votes: 300,
          productName: 'Product name',
          imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9852b2fc51d98d8bb0158b053570adeaefd2feed2dc6580432a01ee96d21dbc3?apiKey=9c066bb72ce5442ca7b521d698a43bb1&',
          alt: 'MOussa icon'
        },
        {
          name: 'Samba',
          votes: 300,
          productName: 'Product name',
          imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b9fd29905e50e8221701f198e1da109392e01945cea4bc31b5adcdf772f3e12c?apiKey=9c066bb72ce5442ca7b521d698a43bb1&',
          alt: 'Product name icon'
        },
        {
          name: 'Diarra',
          votes: 500,
          productName: 'Product name',
          imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b9eb1c424bef84ddfe3a7d0f523ddca7b747489f1b87f2a9dbc3e23eece6c9bc?apiKey=9c066bb72ce5442ca7b521d698a43bb1&',
          alt: 'Product name icon'
        }
      ];
    return (
        <div className="p-6">
             <h2 className="mt-14 text-lg font-bold leading-7 text-zinc-900 max-md:mt-10 max-md:max-w-full">Classement</h2>
        <section className="flex flex-col justify-center py-px mt-8 text-sm rounded border border-gray-50 border-solid bg-black bg-opacity-0 text-zinc-900 max-md:max-w-full">
          <header className="flex  bg-gray-50 gap-0 justify-between items-center pr-1.5 font-semibold text-gray-600 ">
            <div className="flex gap-12 px-5 py-5 ">
            <div>Candidat</div>
            <div >Nombre de Voix</div>
            </div>
            <div></div>
          </header>
          {candidates.map((candidate, index) => 
            <CandidateRow key={index} {...candidate} />
          )}
        </section>
        </div>
    )
}

export default page