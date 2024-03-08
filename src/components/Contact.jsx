import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", text);

    console.log(formData);
    fetch("https://getform.io/f/paqxxmrb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    setName("");
    setEmail("");
    setText("");
  };
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#e34dfb]">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or shoot me an email -
            shirin.aziz@outlook.com
          </p>
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 bg-[#dcdee0] text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-4 p-2 bg-[#dcdee0] text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 bg-[#dcdee0] text-black"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="border-2 hover:bg-[#e34dfb] hover:border-[#e34dfb] px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
