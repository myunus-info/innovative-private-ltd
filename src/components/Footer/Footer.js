import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#0033b5",
        height: "3rem",
        color: "white",
        textAlign: "center",
        lineHeight: "3rem",
      }}
    >
      All rights reserved &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
