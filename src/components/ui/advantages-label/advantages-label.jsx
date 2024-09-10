import React from "react";
import { StyledLabel } from "./styles";

export const WhereLabel = {
  FERM: "ferm",
  MARKET: "market",
};

function AdvantagesLabel({ label }) {
  let options;

  switch (label) {
    case WhereLabel.FERM:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D",
      };
      break;
    case WhereLabel.MARKET:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531",
      };
      break;
  }

  return options.text ? (
    <StyledLabel style={{ backgroundColor: options.bgColor }}>
      {options.text}
    </StyledLabel>
  ) : null;
}

export default AdvantagesLabel;
