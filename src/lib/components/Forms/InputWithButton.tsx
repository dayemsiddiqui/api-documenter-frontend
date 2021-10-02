import { Label as InputButtonContainer } from "@windmill/react-ui";
import React from "react";
import { Button } from "../Buttons/Button";
import { TextInput } from "./TextInput";
import { Label } from "./Label";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  videoID: string;
};

export const InputWithButton: React.FC<{
  buttonLabel: string;
  inputLabel: string;
  placeholder: string;
  onSubmit: SubmitHandler<FormInputs>;
}> = ({ buttonLabel, placeholder, inputLabel, onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <InputButtonContainer className="mt-4">
      <Label label="Video URL" />
      <div className="relative text-gray-500 focus-within:text-purple-600">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            defaultValue={placeholder}
            {...register("videoID")}
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-brand-green border border-transparent rounded-r-md active:bg-brand-green-light hover:bg-brand-green-dark focus:outline-none focus:shadow-outline-green"
          >
            Analyse
          </button>
        </form>
      </div>
    </InputButtonContainer>
  );
};
