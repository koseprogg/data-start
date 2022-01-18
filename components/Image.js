import React from "react";
import NextImage from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "/data-start" : "";

const Image = (props) => {
  return (
    <>
      <NextImage src={`${basePath}${props.src}`} {...props} />
    </>
  );
};

export default Image;
