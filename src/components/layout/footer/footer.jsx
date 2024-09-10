import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter className="footer">
      <Logo />
      <span>Создано в 2021</span>
    </StyledFooter>
  );
}

export default Footer;
