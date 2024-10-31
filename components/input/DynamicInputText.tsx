import React, { SetStateAction } from "react";

interface InputTextProps {
  id?: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  type?: string; // Make input type dynamic, default to "text"
  placeholder?: string; // Allow a customizable placeholder
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void;
}

const DynamicInputText = ({
  id,
  value,
  type = "text", // Default to "text"
  placeholder = "Enter text", // Default placeholder
  onChange,
}: InputTextProps) => {
  return (
    <div>
      <input
        id={id}
        name={id}
        type={type} // Dynamic input type
        placeholder={placeholder} // Custom placeholder
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DynamicInputText;
