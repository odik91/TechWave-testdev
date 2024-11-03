import { Input } from "@/components/ui/input";
import InputErrorMessage from "../inputErrorMessage";
import { ChangeEvent } from "react";

type InputProps = {
  type: string;
  name: string;
  value: string | number;
  placeHolder: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  errors: boolean;
  errorMessage?: string;
};

const InputContact = ({
  type,
  name,
  value,
  placeHolder,
  handleChange,
  errors,
  errorMessage,
}: InputProps) => {
  return (
    <>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
      />
      {errors && (
        <InputErrorMessage message={errorMessage ? errorMessage : ""} />
      )}
    </>
  );
};
export default InputContact;
