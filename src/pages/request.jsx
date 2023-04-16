import React, { useState } from 'react';
import Navbar from "../components/Navbar";
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to server or do something else with it
    console.log({ name, email, message });
  };

  return (
    <div>
        <Navbar/>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <label className="block mb-2 font-bold text-lg" htmlFor="name">
        Event Name:
      </label>
      <input
        className="block w-full p-2 border rounded-md"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="block my-2 font-bold text-lg" htmlFor="email">
        Email:
      </label>
      <input
        className="block w-full p-2 border rounded-md"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="block my-2 font-bold text-lg" htmlFor="message">
        Event Purpose:
      </label>
      <textarea
        className="block w-full p-2 border rounded-md"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#0c18c7] text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
    </div>
  );
}

export default ContactForm;
