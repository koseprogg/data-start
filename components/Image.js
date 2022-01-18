import React from "react";
import NextImage from "next/image";

const Image = (props) => {
  return (
    <>
      <NextImage src={`${props.src.src.trim("/data-start")}`} {...props} />
    </>
  );
};

export default Image;
