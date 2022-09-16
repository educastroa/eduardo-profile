import axios from "axios";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Contact() {
  const [inputs, setInputs] = useState({})
  const [messageStatus, setMessageStatus] = useState({
    reqSent: false,
    response: ''
  })

  const data = {
    service_id: 'service_nuom66y',
    template_id: 'template_nlhivt7',
    user_id: '-DtVuch8yNESRcMkA',
    template_params: inputs
  }



  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs((values) => ({ ...values,  [name] : value }));
  };
  
  const sendEmail = (payload) => 
  axios.post('https://api.emailjs.com/api/v1.0/email/send', payload)
  .then(res => setMessageStatus({reqSent: true, response: res.data}))
  .catch(error => setMessageStatus({reqSent: true, response: error}))


  const handleSubmit = (event, apiData) => {
    event.preventDefault();
    sendEmail(apiData)
    setInputs({})
  };
    

  return (
    <div id='contact' className="flex flex-col items-center p-10">
      <h1 className="text-2xl p-10">Contact</h1>
      <div className="flex justify-center bg-blue-200 shadow-lg shadow-blue-300 rounded-lg p-5 w-full">
        <form className="w-full max-w-lg" onSubmit={(event) => handleSubmit(event, data)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleChange}
                id="from_first_name"
                type="text"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleChange}
                id="from_last_name"
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleChange}
                id="reply_to"
                type="email"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                onChange={handleChange}
                id="message"
                required
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-blue-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
      {messageStatus.reqSent ? 
      <ContactModal
      messageStatus={messageStatus}
      /> : ""}
    </div>
  );
}
