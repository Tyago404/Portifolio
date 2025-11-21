"use client";

import clsx from "clsx";
import { Paragraph } from "../Paragraph";
import { useState } from "react";
import { toast } from "react-toastify";

type FormResendProps = {
  onClose: () => void;
};

export function FormResend({ onClose }: FormResendProps) {
  const initialFormData = {
    name: "",
    celular: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "celular") {
      let celular = e.target.value.replace(/\D/g, "").slice(0, 11);
      celular = celular.replace(/^(\d{2})(\d)/g, "($1) $2");
      celular = celular.replace(/(\d)(\d{4})$/, "$1-$2");
      setFormData({ ...formData, celular });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Mensagem enviada com sucesso!");
      setFormData(initialFormData);
    } else {
      console.log("Erro ao enviar email");
    }
  };

  const commonClasses = "flex flex-col";
  const commonInputClasses =
    "border border-white/40 w-full p-2 placeholder:text-sm";
  const commonButtonClasses =
    "border p-2 w-30 cursor-pointer bg-white/5 hover:bg-white/15";

  return (
    <div className="flex justify-center mt-18 w-full">
      <form
      
        onSubmit={handleSubmit}
        className={clsx(
          "flex flex-col justify-center",
          "border rounded-sm",
          "px-5 py-4 md:px-5 md:py-4 gap-6 w-full",
          "bg-black/90",
          "backdrop-blur-3xl"
        )}
      >
        <div>
          <legend className="text-3xl">Solicite contato</legend>
          <Paragraph
            text="Tiago receberá sua mensagem e entrará em contato"
            className="text-(--color-secoundary)"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <label htmlFor="name" className={commonClasses}>
            Nome
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Seu nome / Nome da empresa"
              className={commonInputClasses}
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="celular" className={commonClasses}>
            Tel/Cel
            <input
              type="text"
              name="celular"
              id="celular"
              placeholder="(11) 99999-8888"
              className={commonInputClasses}
              value={formData.celular}
              onChange={handleChange}
            />
          </label>
        </div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="seuemail@exemplo.com"
            className={commonInputClasses}
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="message">
          Mensagem
          <textarea
            name="message"
            id="message"
            placeholder="Olá Tiago, estou entrando em contato..."
            className={clsx(commonInputClasses)}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            type="button"
            className={commonButtonClasses}
          >
            Voltar
          </button>
          <button className={commonButtonClasses}>Enviar</button>
        </div>
      </form>
    </div>
  );
}
