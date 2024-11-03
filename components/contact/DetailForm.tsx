"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { messageSchema } from "@/utils/validationSchema";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";
import InputErrorMessage from "../inputErrorMessage";
import InputContact from "./InputContact";

type FormErrors = Partial<Record<keyof z.infer<typeof messageSchema>, string[]>>;

const DetailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  type FormField = keyof typeof formData;

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target as { name: FormField; value: string };
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    const fieldValidation = messageSchema.shape[name]?.safeParse(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldValidation?.success
        ? undefined
        : fieldValidation?.error?.errors.map((err: { message: unknown; }) => err.message),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const validation = messageSchema.safeParse(formData);
    if (!validation.success) {
      const errorMessage = validation.error.flatten().fieldErrors;
      setErrors(errorMessage);
      return;
    } else {
      setErrors({});
      console.log("Data valid:", validation.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <InputContact
            type="text"
            name="name"
            value={formData.name}
            placeHolder="Nama"
            handleChange={handleChange}
            errors={errors.name ? true : false}
            errorMessage={errors.name ? errors.name[0] : ""}
          />
        </div>
        <div>
          <InputContact
            type="tel"
            name="phone"
            value={formData.phone}
            placeHolder="No Telepon/HP"
            handleChange={handleChange}
            errors={errors.phone ? true : false}
            errorMessage={errors.phone ? errors.phone[0] : ""}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <InputContact
            type="email"
            name="email"
            value={formData.email}
            placeHolder="Email"
            handleChange={handleChange}
            errors={errors.email ? true : false}
            errorMessage={errors.email ? errors.email[0] : ""}
          />
        </div>
        <div>
          <InputContact
            type="text"
            name="subject"
            value={formData.subject}
            placeHolder="Subjek"
            handleChange={handleChange}
            errors={errors.subject ? true : false}
            errorMessage={errors.subject ? errors.subject[0] : ""}
          />
        </div>
      </div>
      <div className="mb-6">
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Isi pesan anda di sini."
          maxLength={500}
        />
        {errors.message && <InputErrorMessage message={errors.message[0]} />}
      </div>
      <Button
        type="submit"
        className="w-full bg-purple-400 hover:bg-purple-600 hover:shadow-md"
      >
        Kirim
      </Button>
    </form>
  );
};
export default DetailForm;
