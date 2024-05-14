interface VerificationCodeInputProps {
    className?: string;
  }
  
  const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({ className }) => {
    return (
      <div className={`shrink-0 bg-white rounded border border-solid border-zinc-400 h-[45px] w-[59px] ${className}`} ></div>
    );
  };
