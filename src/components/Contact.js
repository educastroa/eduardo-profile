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

    <div class="container py-16 md:py-20" id="contact">
  <h2
    class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    Here's a contact form
  </h2>
  <h4
    class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    Have Any Questions?
  </h4>
  <div class="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
    <p class="font-body text-grey-10">
      Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
      condimentum turpis nisl sem, viverra habitasse urna ante lobortis
      fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
      accumsan.
    </p>
  </div>
  <form class="mx-auto w-full pt-10 sm:w-3/4">
    <div class="flex flex-col md:flex-row">
      <input
        class="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
        placeholder="Name"
        type="text"
        id="name"
      />
      <input
        class="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
        placeholder="Email"
        type="text"
        id="email"
      />
    </div>
    <textarea
      class="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
      placeholder="Message"
      id="message"
      cols="30"
      rows="10"
    ></textarea>
    <button
      class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
    >
      Send
      <i class="bx bx-chevron-right relative -right-2 text-3xl"></i>
    </button>
  </form>
  <div class="flex flex-col pt-16 lg:flex-row">
    <div
      class="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
    >
      <div class="flex items-center">
        <i class="bx bx-phone text-2xl text-grey-40"></i>
        <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Phone
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        (+881) 111 222 333
      </p>
    </div>
    <div
      class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
    >
      <div class="flex items-center">
        <i class="bx bx-envelope text-2xl text-grey-40"></i>
        <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Email
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        name@mydomain.com
      </p>
    </div>
    <div
      class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
    >
      <div class="flex items-center">
        <i class="bx bx-map text-2xl text-grey-40"></i>
        <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Address
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        123 New York D Block 1100, 2011 USA
      </p>
    </div>
  </div>
</div>
    
    // <div id='contact' className="flex flex-col items-center p-10">
    //   <h1 className="text-2xl p-10">Contact</h1>
    //   <div className="flex justify-center bg-blue-200 shadow-lg shadow-blue-300 rounded-lg p-5 w-full">
    //     <form className="w-full max-w-lg" onSubmit={(event) => handleSubmit(event, data)}>
    //       <div className="flex flex-wrap -mx-3 mb-6">
    //         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    //           <label
    //             className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //             htmlFor="grid-first-name"
    //           >
    //             First Name
    //           </label>
    //           <input
    //             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    //             onChange={handleChange}
    //             id="from_first_name"
    //             type="text"
    //             required
    //           />
    //         </div>
    //         <div className="w-full md:w-1/2 px-3">
    //           <label
    //             className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //             htmlFor="grid-last-name"
    //           >
    //             Last Name
    //           </label>
    //           <input
    //             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    //             onChange={handleChange}
    //             id="from_last_name"
    //             type="text"
    //             required
    //           />
    //         </div>
    //       </div>
    //       <div className="flex flex-wrap -mx-3 mb-6">
    //         <div className="w-full px-3">
    //           <label
    //             className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //             htmlFor="grid-password"
    //           >
    //             E-mail
    //           </label>
    //           <input
    //             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    //             onChange={handleChange}
    //             id="reply_to"
    //             type="email"
    //             required
    //           />
    //         </div>
    //       </div>
    //       <div className="flex flex-wrap -mx-3 mb-6">
    //         <div className="w-full px-3">
    //           <label
    //             className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //             htmlFor="grid-password"
    //           >
    //             Message
    //           </label>
    //           <textarea
    //             className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
    //             onChange={handleChange}
    //             id="message"
    //             required
    //           ></textarea>
    //         </div>
    //       </div>
    //       <div className="md:flex md:items-center">
    //         <div className="md:w-1/3">
    //           <button
    //             className="shadow bg-blue-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
    //             type="submit"
    //           >
    //             Send
    //           </button>
    //         </div>
    //         <div className="md:w-2/3"></div>
    //       </div>
    //     </form>
    //   </div>
    //   {messageStatus.reqSent ? 
    //   <ContactModal
    //   messageStatus={messageStatus}
    //   /> : ""}
    // </div>
  );
}
