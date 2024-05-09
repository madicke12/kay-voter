interface CalendarDayProps {
    day: number;
    className?: string;
  }
  
  const CalendarDay: React.FC<CalendarDayProps> = ({ day, className }) => {
    return (
      <div className={`justify-center items-center px-4 w-9 h-9 text-center bg-white rounded-2xl ${className}`}>
        {day}
      </div>
    );
  };
export  default CalendarDay  