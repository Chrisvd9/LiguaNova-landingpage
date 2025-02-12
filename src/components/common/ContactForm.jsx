import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { ConfettiButton } from "../ui/ConfettiComponent";

const ContactForm = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const formData = new FormData(form.current);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();
    setIsFormValid(name && email && message);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Todos los campos son obligatorios.");
      return;
    }

    emailjs
      .sendForm("service_pjsjl0m", "template_ico0aor", form.current, {
        publicKey: "UhawM4bubvojMbn0d",
      })
      .then(
        () => {
          toast.success("¡Email enviado con éxito!");
          form.current.reset();
          setIsFormValid(false);
        },
        (error) => {
          toast.error("Error al enviar el email", error);
        }
      );
  };

  return (
    <div className="rounded-xl p-8 lg:col-span-3 lg:p-12 w-full">
      <form
        className="space-y-4"
        ref={form}
        onSubmit={sendEmail}
        onChange={validateForm}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="name">
              NOMBRE
            </label>
            <input
              className="w-full border-2 border-dark rounded-3xl p-3 text-sm focus:outline-none"
              placeholder="NOMBRE *"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="email">
              EMAIL
            </label>
            <input
              className="w-full border-2 border-dark rounded-3xl p-3 text-sm focus:outline-none"
              placeholder="EMAIL *"
              type="email"
              id="email"
              name="email"
            />
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            MENSAJE
          </label>
          <textarea
            className="w-full border-2 border-dark rounded-3xl p-3 text-sm focus:outline-none"
            placeholder="MENSAJE *"
            rows="8"
            id="message"
            name="message"
          ></textarea>
        </div>

        <div className="mt-4 w-full">
          <button type="submit" className="w-full" disabled={!isFormValid}>
            <ConfettiButton>ENVIAR MENSAJE</ConfettiButton>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
