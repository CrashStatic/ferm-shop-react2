import React from "react";
import Title, { TitleSize, TitleLevel } from "../title/title";
import AdvantagesLabel from "../advantages-label/advantages-label";

import { StyledCard, StyledCardTitle, StyledCardDescription } from "./styles";

function AdvantagesCard({ title, description, label, image, background }) {
  return (
    <StyledCard style={{ backgroundColor: background }}>
      <StyledCardTitle>
        <img src={image} width={56} height={56} alt="иконка" />
        <div>
          <AdvantagesLabel className="advantages-card__text" label={label} />
          <Title as="h3" size={TitleSize.EXTRA_SMALL} level={TitleLevel.H3}>
            {title}
          </Title>
        </div>
      </StyledCardTitle>
      <StyledCardDescription
        dangerouslySetInnerHTML={{ __html: description }}
      ></StyledCardDescription>
    </StyledCard>
  );
}

export default AdvantagesCard;
