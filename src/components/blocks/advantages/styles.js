import styled from "styled-components";
import { Section, Ul, Li } from "/src/components/styled";

export const StyledAdvantages = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  flex-direction: column;
  align-items: center;
`;

export const StyledAdvantagesList = styled(Ul)`
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 64px 0;
  padding: 0;
  align-self: start;
`;

export const StyledAdvantagesItem = styled(Li)`
  min-height: 197px;
`;
