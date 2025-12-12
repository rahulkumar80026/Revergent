import React from "react";
import Logo from "./../assets/images/icon.png";

const RLogo = ({ className = "w-8 h-8" }) => (
  <img className={className} src={Logo} alt="company_logo" />
);
export default RLogo;
