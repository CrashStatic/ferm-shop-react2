import React from "react";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvantagesCard from "../../ui/advantages-card/advantages-card";
import {
  StyledAdvantages,
  StyledAdvantagesList,
  StyledAdvantagesItem,
} from "./styles";
import { AppRoute } from "../../../const";

function Advantages({ advantages }) {
  return advantages && advantages.length ? (
    <StyledAdvantages>
      <Title as="h2" size={TitleSize.MEDIUM} level={TitleLevel.H2}>
        Почему фермерские продукты лучше?
      </Title>
      <StyledAdvantagesList>
        {advantages.map((advantage) => (
          <StyledAdvantagesItem key={advantage.id}>
            <AdvantagesCard {...advantage} />
          </StyledAdvantagesItem>
        ))}
      </StyledAdvantagesList>
      <Button minWidth={260} link={AppRoute.BUY}>
        Купить
      </Button>
    </StyledAdvantages>
  ) : null;
}

export default Advantages;
