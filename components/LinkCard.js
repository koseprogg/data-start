import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const basePath = process.env.NODE_ENV === "production" ? "/data-start" : "";

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
  const styleContent = {};
  if (darkMode) {
    styleContent = { boxShadow: "none", border: "1px solid white" };
    if (!className) {
      styleContent = { ...styleContent, color: "#FFFFFF" };
    }
  }
  const content = (
    <div
      onClick={() => (window.location.href = url)}
      onTouchEnd={(e) => {
        e.preventDefault();
        window.location.href = url;
      }}
      className={`${styles.card} ${className}`}
      style={styleContent}
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <button
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
  return internal ? <Link href={`${basePath}/work`}>{content}</Link> : content;
};

export default LinkCard;
