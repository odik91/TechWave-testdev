"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { messageSchema } from "@/utils/validationSchema";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";
import InputErrorMessage from "../inputErrorMessage";
import InputContact from "./InputContact";
import Swal from "sweetalert2"

type FormErrors = Partial<
  Record<keyof z.infer<typeof messageSchema>, string[]>
>;

const DetailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        : fieldValidation?.error?.errors.map(
            (err: { message: unknown }) => err.message
          ),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const validation = messageSchema.safeParse(formData);
    if (!validation.success) {
      const errorMessage = validation.error.flatten().fieldErrors;
      setErrors(errorMessage);
      return;
    } else {
      setIsLoading(true);
      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setFormData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });
          setErrors({});
          Swal.fire({
            title: "Berhasil",
            text: "Pesan telah dikirim",
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "Gagal",
            text: "Pesan gagal dikirim!",
            icon: "error"
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading && (
        <>
          <div className="fixed w-full h-full top-0 left-0">
            <div className="absolute w-full h-full top-0 left-0 z-10" style={{
              background: "radial-gradient(circle, rgba(2, 0, 36, 0.404) 0%, rgba(52,9,121,0.551708055579144) 35%, rgba(81,43,106,1) 100%)",
            }}></div>
            <div className="absolute w-full h-full top-0 left-0 z-20">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="fancy-spinner">
                  <div className="ring"></div>
                  <div className="ring"></div>
                  <div className="dot"></div>
                </div>
                <h1 className="text-2xl font-semibold text-white">Loading...</h1>
              </div>
            </div>
          </div>
        </>
      )}
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
          disabled={isLoading}
        >
          {isLoading ? "Menirim pesan..." : "Kirim"}
        </Button>
      </form>
    </>
  );
};
export default DetailForm;
