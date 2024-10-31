import React, { SetStateAction, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface inputText {
  value: string;
  setValue?: React.Dispatch<SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void;
  id: string;
  className?: string;
}

const InputPassword = ({ value, onChange, id, className }: inputText) => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const passWordHandle = () => {
    if (passwordShow) {
      return "text";
    } else {
      return "password";
    }
  };

  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={passWordHandle()}
        placeholder="Name"
        className={`border border-gray-400 text-lg p-4 ${className}`}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="absolute right-4 top-5"
        onClick={() => setPasswordShow(!passwordShow)}
      >
        {passwordShow ? (
          <FaRegEye className="text-[20px]" />
        ) : (
          <FaRegEyeSlash className="text-[20px]" />
        )}
      </button>
    </div>
  );
};

export default InputPassword;
