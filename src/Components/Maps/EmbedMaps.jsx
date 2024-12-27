import React from "react";

const EmbedMaps = ({ linkMaps }) => {
  return (
    <div className="w-full flex justify-end bg-darkYellow mt-12">
      <iframe
        src={linkMaps}
        width="95%"
        className="md:h-[400px] lg:h-[450px] h-[200px] "
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default EmbedMaps;
