import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const LinkCard = ({
  className = "",
  name,
  description,
  url,
  internal = false,
  closeColor,
  darkMode,
  onClose,
}) => {
  const [moved, setMoved] = useState(false);
  const [touched, setTouched] = useState(false);
  const styleContent = {};
  if (darkMode) {
    styleContent = { boxShadow: "none", border: "1px solid white" };
    if (!className) {
      styleContent = { ...styleContent, color: "#FFFFFF" };
    }
  }
  const content = (
    <div
      onClick={() => {
        if (!internal) {
          window.location.href = url;
        }
      }}
      onTouchStart={() => {
        setMoved(false);
        setTouched(true);
      }}
      onTouchMove={() => setMoved(true)}
      onTouchEnd={(e) => {
        e.preventDefault();
        if (!moved && !internal) {
          window.location.href = url;
        }
        setTouched(false);
      }}
      className={`${styles.card} ${className} ${
        moved ? styles.cardTouched : ""
      }`}
      style={styleContent}
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <button
        onTouchEnd={(e) => {
          e.stopPropagation();
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        style={{ color: closeColor ?? (darkMode ? "white" : "black") }}
      >
        &#x2715;
      </button>
    </div>
  );
  return internal ? <Link href={`/work`}>{content}</Link> : content;
};

export default LinkCard;
