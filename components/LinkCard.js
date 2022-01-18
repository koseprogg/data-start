import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const LinkCard = ({
  className = "",
  name,
  description,
  url,
  internal = false,
  closeColor = "black",
  onClose,
}) => {
  const content = (
    <div
      onClick={() => (window.location.href = url)}
      className={`${styles.card} ${className}`}
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        style={{ color: closeColor }}
      >
        &#x2715;
      </button>
    </div>
  );
  return internal ? <Link href="/work">{content}</Link> : content;
};

export default LinkCard;
