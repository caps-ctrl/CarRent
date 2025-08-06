import React from "react";

const LokingForUs = () => {
  return (
    <div>
      {" "}
      <div className="flex-1 ">
        <iframe
          className="rounded-2xl"
          title="Mapa Gorzów Wielkopolski"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.2698780603174!2d15.228948215757324!3d52.73682017987686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47012070a516dc49%3A0x8d0baf229d40bb1a!2sGorz%C3%B3w%20Wielkopolski!5e0!3m2!1spl!2spl!4v1691220308576!5m2!1spl!2spl"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LokingForUs;
