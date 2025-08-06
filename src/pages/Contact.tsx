import React from "react";
import LokingForUs from "./LokingForUs";
import SendMessage from "./SendMessage";

const Contact = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-center md:justify-evenly items-center text-center  gap-y-5  bg-neutral-950 text-white min-h-screen">
        <div className="p-4 bg-neutral-900 rounded-2xl ">
          <h2 className="font-bold text-2xl">
            Masz pytanie? Jesteśmy tu dla Ciebie
          </h2>
          <div className="pt-5">
            <SendMessage />
          </div>
        </div>
        <div className="p-4 mb-5 bg-neutral-900 rounded-2xl ">
          <h2 className="font-bold text-2xl ">
            Nie wiesz gdzie nas szukac znajdz nas
          </h2>
          <div className="p-5 ">
            {" "}
            <LokingForUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
