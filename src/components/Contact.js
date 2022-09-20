import axios from "axios";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Contact() {
  const [inputs, setInputs] = useState({});
  const [messageStatus, setMessageStatus] = useState({
    reqSent: false,
    response: "",
  });

  const data = {
    service_id: "service_nuom66y",
    template_id: "template_nlhivt7",
    user_id: "-DtVuch8yNESRcMkA",
    template_params: inputs,
  };

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const sendEmail = (payload) =>
    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", payload)
      .then((res) => setMessageStatus({ reqSent: true, response: res.data }))
      .catch((error) => setMessageStatus({ reqSent: true, response: error }));

  const handleSubmit = (event, apiData) => {
    event.preventDefault();
    sendEmail(apiData);
    event.target.reset();
  };

  return (
    <div className="container py-16 md:py-20" id="contact">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Let's connect
      </h2>
      <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Have Any Questions?
      </h4>
      <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
        <p className="font-body text-grey-10">
          I would welcome a opportunity to discuss how my skills and experience
          can add value to your company
        </p>
      </div>
      <form
        className="mx-auto w-full pt-10 sm:w-3/4"
        onSubmit={(event) => handleSubmit(event, data)}
      >
        <div className="flex flex-col md:flex-row">
          <input
            className="mr-3 w-full rounded border border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
            placeholder="Name"
            onChange={handleChange}
            id="from_name"
            type="text"
            required
          />
          <input
            className="mt-6 w-full rounded border border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
            placeholder="Email"
            onChange={handleChange}
            id="reply_to"
            type="email"
            required
          />
        </div>
        <textarea
          className="mt-6 w-full rounded border border-grey-50 px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message"
          onChange={handleChange}
          id="message"
          required
          cols="30"
          rows="10"
        ></textarea>
        <button
          className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
          type="submit"
        >
          Send
          <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
        </button>
      </form>
      {messageStatus.reqSent ? (
        <ContactModal
          messageStatus={messageStatus}
          setMessageStatus={setMessageStatus}
        />
      ) : (
        ""
      )}
    </div>
  );
}
