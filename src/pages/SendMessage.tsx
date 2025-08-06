import React from "react";
import { useState } from "react";

const SendMessage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Dziękujemy, ${formData.name}! Twoja wiadomość została wysłana.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {" "}
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col gap-4 text-white h-[300px]"
      >
        <input
          type="text"
          name="name"
          placeholder="Imię"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-4 py-2 bg-neutral-800 "
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-4 py-2  bg-neutral-800"
        />
        <textarea
          name="message"
          placeholder="Wiadomość"
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-4 py-2 h-32 resize-none   bg-neutral-800"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition "
        >
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
