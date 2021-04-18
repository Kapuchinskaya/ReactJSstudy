import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320513.1439457553!2d16.71168578074838!3d51.126743182413364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2z0JLRgNC-0YHQu9Cw0LI!5e0!3m2!1sru!2spl!4v1616013349353!5m2!1sru!2spl"
        width="100%"
        height="500px"
        // style="border:0;"
        allowFullScreen
        loading="lazy"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
