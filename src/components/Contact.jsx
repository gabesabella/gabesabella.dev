import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Contact() {
  const form = useRef();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          toastifySuccess();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contactForm bg-skin-fill" id="contact">
      <h2 className="pb-5 font-bold text-center uppercase text-skin-base">
        contact
      </h2>
      <div className="flex justify-center w-screen">
        <div className="max-w-[800px] w-[90%]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col space-y-3 text-skin-base">
              <label htmlFor="name" className="font-bold">
                Email
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="rounded bg-skin-fill text-skin-base"
                placeholder="your@email.com"
              />
              <label htmlFor="message" className="font-bold">
                Message
              </label>
              <textarea
                className="font-mono rounded bg-skin-fill text-skin-base"
                name="message"
                placeholder="Hi..."
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <button
                type="submit"
                className="py-3 rounded bg-skin-inverted text-skin-inverted"
              >
                Send
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
}
