import React from "react";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title";
import { StyledSection, StyledContainer, StyledText } from "./styles";

function About() {
  return (
    <StyledSection>
      <StyledContainer>
        <Title size={TitleSize.BIG} level={TitleLevel.H1}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <StyledText>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </StyledText>
      </StyledContainer>
    </StyledSection>
  );
}

export default About;
