

interface InputBlockProps {
  label: string;
  placeholder: string;
  name: string
}

const InputBlock: React.FC<InputBlockProps> = ({ label, placeholder ,name}) => (
  <div className="flex flex-col justify-center pt-1.5 bg-black bg-opacity-0">
    <label className="font-bold text-gray-700">{label}</label>
    <div className="flex flex-col justify-center bg-white rounded border border-cyan-500 border-solid text-neutral-300">
      <input
        type="text"
        placeholder={placeholder}
        aria-label={label}
        name={name}
        className="justify-center items-start p-2 rounded border-solid bg-black bg-opacity-0 border-[5px] border-cyan-500 border-opacity-20"
      />
    </div>
  </div>
);


export default InputBlock ;