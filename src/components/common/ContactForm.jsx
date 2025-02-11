import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { ConfettiButton } from "../ui/ConfettiComponent";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pjsjl0m", "template_ico0aor", form.current, {
        publicKey: "UhawM4bubvojMbn0d",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error("Error", error);
        }
      );
  };
  return (
    <div className="rounded-xl p-8 lg:col-span-3 lg:p-12 w-full">
      <form className="space-y-4" ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="name">
              {"NAME"}
            </label>
            <input
              className="w-full border-2 border-dark rounded-3xl p-3 text-sm focus:outline-none"
              placeholder={"NAME"}
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="email">
              {"EMAIL"}
            </label>
            <input
              className="w-full border-2 border-dark rounded-3xl p-3 text-sm focus:outline-none"
              placeholder={"EMAIL"}
              type="email"
              id="email"
              name="email"
            />
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            {"MESSAGE"}
          </label>

          <textarea
            className="w-full border-2 border-dark rounded-3xl p-3 text-sm focus:outline-none"
            placeholder={"MESSAGE"}
            rows="8"
            id="message"
            name="message"
          ></textarea>
        </div>

        <div className="mt-4 w-full">
          <button type="submit" className="w-full">
            <ConfettiButton>SEND MESSAGE</ConfettiButton>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
