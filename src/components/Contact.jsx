import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/paqxxmrb"
        className="flex flex-col max-w-[600px] w-full"
      >
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
          className="p-2 bg-[#dcdee0] text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#dcdee0] text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#dcdee0] text-black"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border-2 hover:bg-[#e34dfb] hover:border-[#e34dfb] px-4 py-3 my-8 mx-auto flex items-center  ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
