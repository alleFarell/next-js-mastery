import React, { SetStateAction } from "react";

interface inputText {
  value: string;
  setValue?: React.Dispatch<SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void;
  id: string;
  className?: string;
}

const InputText = ({ value, onChange, id, className }: inputText) => {
  return (
    <div>
      <input
        id={id}
        name={id}
        type="text"
        placeholder="Name"
        className={`border border-gray-400 text-lg p-4 ${className}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
