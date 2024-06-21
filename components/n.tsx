

interface InputBlockProps {
  label: string;
  placeholder: string;
  name: string
}

const InputBlock: React.FC<InputBlockProps> = ({ placeholder ,name}) => (
  
    <div className="flex flex-col justify-center bg-white rounded border border-cyan-500 border-solid text-neutral-300">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="justify-center items-start p-2 rounded border-solid bg-black bg-opacity-0 border-[5px] border-cyan-500 border-opacity-20"
      />
    </div>
);


export default InputBlock ;