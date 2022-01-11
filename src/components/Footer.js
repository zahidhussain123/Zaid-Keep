import React from "react";

function Footer() {
  let footer = new Date().getFullYear();
  return (
    <div style={{ marginTop: "10%", marginLeft: "45%" }}>
      <em>Copywrite@ {footer}</em>
    </div>
  );
}

export default Footer;
