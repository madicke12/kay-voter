interface InputFieldProps {
    label: string;
    placeholder: string;
  }
  
  const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
    return (
      <div className="flex flex-col justify-center pt-2 pb-px mt-5 bg-black bg-opacity-0">
        <label htmlFor={label} className="font-bold text-gray-700">
          {label}
        </label>
        <input
          type="text"
          id={label}
          className="justify-center items-start px-3 py-3 mt-2 whitespace-nowrap bg-gray-100 rounded-3xl text-neutral-300 max-md:pr-5"
          placeholder={placeholder}
        />
      </div>
    );
  };

  export default InputField