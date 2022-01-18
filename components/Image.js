/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
const basePath = process.env.NODE_ENV === "production" ? "/data-start/" : "";

const Image = (props) => {
  return (
    <>
      <img {...props} src={`${basePath}${props.src}`} />
    </>
  );
};

export default Image;
