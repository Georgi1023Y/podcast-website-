import React from "react";
import { Icon } from "@iconify/react";
import { supabaseClient } from "./client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabaseClient.from("feedback").insert([
      {
        name: name,
        email: email,
        message: message,
      },
    ]);
    if (error) {
      toast("Нещо се обърка, опитайте отново!");
    } else {
      toast("Съобщението е изпратено успешно!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="container mx-auto p-6">
      <ToastContainer />
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">
        Контакти
      </h2>
      <form className="max-w-lg mx-auto space-y-4">
        <label className="input w-full">
          <Icon icon="solar:user-linear" width="20" height="20" />
          <input
            type="text"
            placeholder="Твоето Име"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input w-full">
          <Icon icon="mdi-light:email" width="23" height="23" />
          <input
            type="text"
            placeholder="Твоят Имейл"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <textarea
          placeholder="Твоето Съобщение"
          className="textarea textarea-bordered w-full"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary w-full"
          onClick={handleSubmit}
        >
          Изпрати Съобщение
        </button>
      </form>
    </section>
  );
};

export default Contact;
