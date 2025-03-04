import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <main>
      <div className="container">
        <div className="grid">
          <div className="space-y-7">
            <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
              - Contact
            </p>
            <h1 className="text-2xl lg:text-3xl">
              Any Type of Query & Discussion.
            </h1>
            <p className="text-sm leading-6 opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              repudiandae possimus ex unde ducimus qui facilis veniam minima
              autem.
            </p>
            <button className="text-amber-300 border-b-2 border-amber-300 font-bold p-1 flex items-center gap-4 group">
              My Story{" "}
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition duration-200" />
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
