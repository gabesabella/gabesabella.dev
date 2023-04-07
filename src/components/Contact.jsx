import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-center uppercase text-skin-base">contact</h2>
      <div className="flex justify-center w-screen">
        <div className="max-w-[900px] w-[90%]">
          <form
            action="mailto:gabe.sabella.dev@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="flex flex-col space-y-3 text-skin-base">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="rounded bg-skin-fill text-skin-base"
                placeholder="your@email.com"
              />
              <label htmlFor="message">Message</label>
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
