/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Image = (props) => {
  return (
    <>
      <img {...props} src={`${props.src}`} />
    </>
  );
};

export default Image;
