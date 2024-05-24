import Image from "next/image";
import StatCard from "./stats";
import CandidateRow from "./candidat";


const StatsComponent: React.FC = () => {
  const stats = [
    {
      title: 'Total inscris',
      value: 1000000,
      percentage: '5.39%',
      percentageColor: 'text-green-700',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e965aa3d5705b488c07e996d7b229dd57040e6ada4f58ed691a66ab0b8ad64f2?apiKey=9c066bb72ce5442ca7b521d698a43bb1&',
      bgColor: 'bg-violet-50',
      alt: 'Increase icon'
    },
    {
      title: 'Total votant',
      value: 6452,
      percentage: '4.39%',
      percentageColor: 'text-green-700',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e965aa3d5705b488c07e996d7b229dd57040e6ada4f58ed691a66ab0b8ad64f2?apiKey=9c066bb72ce5442ca7b521d698a43bb1&',
      bgColor: 'bg-violet-50',
      alt: 'Increase icon'
    },
    {
      title: 'Bulletin Null',
      value: 42502,
      percentage: '0.65%',
      percentageColor: 'text-red-500',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cfc0c7047139f6c8a5f3042eee804ab037153cf6320e4ebae8e8c41056c13c00?apiKey=9c066bb72ce5442ca7b521d698a43bb1&',
      bgColor: 'bg-blue-50',
      alt: 'Decrease icon'
    }
  ];

  const candidates = [
    {
      name: 'MOussa',
      votes: 300,
      productName: 'Product name',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9852b2fc51d98d8bb0158b053570adeaefd2feed2dc6580432a01ee96d21dbc3?apiKey=9c066bb72ce5442ca7b521d698a43bb1&',
      alt: 'MOussa icon'
    },
    {
      name: 'Product name',
      votes: 300,
      productName: 'Product name',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b9fd29905e50e8221701f198e1da109392e01945cea4bc31b5adcdf772f3e12c?apiKey=9c066bb72ce5442ca7b521d698a43bb1&',
      alt: 'Product name icon'
    },
    {
      name: 'Product name',
      votes: 500,
      productName: 'Product name',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b9eb1c424bef84ddfe3a7d0f523ddca7b747489f1b87f2a9dbc3e23eece6c9bc?apiKey=9c066bb72ce5442ca7b521d698a43bb1&',
      alt: 'Product name icon'
    }
  ];

  return (
    <div className="flex flex-col items-end px-16 pt-8 pb-20 bg-white shadow-sm max-md:px-5">
      <div className="flex flex-col mr-20 max-w-full w-[769px] max-md:mr-2.5">
        <h1 className="text-3xl leading-10 text-zinc-900 max-md:max-w-full">Statistique</h1>
        <section className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {stats.map((stat, index) => 
              <StatCard key={index} {...stat} />
            )}
          </div>
        </section>
        <h2 className="mt-14 text-lg font-bold leading-7 text-zinc-900 max-md:mt-10 max-md:max-w-full">Classement</h2>
        <section className="flex flex-col justify-center py-px mt-8 text-sm rounded border border-gray-50 border-solid bg-black bg-opacity-0 text-zinc-900 max-md:max-w-full">
          <header className="flex gap-0 justify-center pr-1.5 font-semibold text-gray-600 bg-black bg-opacity-0 max-md:flex-wrap max-md:max-w-full">
            <div className="justify-center items-start px-5 py-7 whitespace-nowrap bg-gray-50 border-t border-b border-gray-100 border-solid leading-[157%]">Candidat</div>
            <div className="justify-center px-5 py-5 leading-6 text-center bg-gray-50 border-t border-b border-gray-100 border-solid max-md:px-5">Nombre de Voix</div>
            <div className="shrink-0 bg-gray-50 border-t border-b border-gray-100 border-solid h-[69px] w-[154px]" />
            <div className="shrink-0 bg-gray-50 border-t border-b border-gray-100 border-solid h-[69px] w-[120px]" />
            <div className="shrink-0 bg-gray-50 border-t border-b border-gray-100 border-solid h-[69px] w-[140px]" />
            <div className="shrink-0 bg-gray-50 border-t border-b border-gray-100 border-solid h-[69px] w-[74px]" />
          </header>
          {candidates.map((candidate, index) => 
            <CandidateRow key={index} {...candidate} />
          )}
        </section>
      </div>
    </div>
  );
}

export default StatsComponent;