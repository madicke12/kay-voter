type CalendarDayProps = {
    day: number;
    isCurrentMonth: boolean;
    isHighlighted?: boolean;
    hasEvent?: boolean;
  };

const CalendarDay: React.FC<CalendarDayProps> = ({
    day,
    isCurrentMonth,
    isHighlighted,
    hasEvent,
  }) => (
    <div
      className={`justify-center items-start px-${
        isHighlighted ? 3.5 : 4
      } py-3.5 rounded-2xl ${
        !isCurrentMonth ? "text-zinc-400" : "text-zinc-900"
      } ${isHighlighted ? "bg-cyan-100 text-teal-700" : "bg-black bg-opacity-0"} ${
        !isCurrentMonth && !isHighlighted ? "bg-opacity-0" : ""
      }
      ${hasEvent ? "text-white bg-cyan-500" : ""}
      `}
    >
      {day}
    </div>
  );