import Events from "./typeEvent";
import CalendarDay from "./calendar";
import Image from "next/image";


const Election: React.FC = () => {
  const events = [
    {
      time: "08:00 AM",
      title: "Election Presidentielle 2022",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddc744285942b083ab2fc018cfb2872aec3af8984998e6ad7cb96cfe923a9fbf?apiKey=9c066bb72ce5442ca7b521d698a43bb1&",
      details: "08:00 - 09:00 AM",
    },
  ];

  const days = [
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: true },
    { day: 1, isCurrentMonth: true, isHighlighted: true },
    { day: 2, isCurrentMonth: true, isHighlighted: true },
    { day: 3, isCurrentMonth: true, isHighlighted: true },
    { day: 4, isCurrentMonth: true, isHighlighted: true },
    { day: 5, isCurrentMonth: true, isHighlighted: true, hasEvent: true },
    { day: 6, isCurrentMonth: true, isHighlighted: true, hasEvent: true },
    { day: 7, isCurrentMonth: true, isHighlighted: true },
    { day: 8, isCurrentMonth: true, isHighlighted: true },
    { day: 9, isCurrentMonth: true, isHighlighted: true, hasEvent: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
  ];

  return (
    <div className="flex flex-col items-start px-8 pt-8 pb-20 bg-white rounded shadow-sm max-md:px-5">
      <header className=" max-md:max-w-full">
        
      </header>
     
   
     
    </div>
  );
};

export default Election;