import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyled = css`
  display: flex;
  height: 44px;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  ${logoStyled};
  text-decoration: none;
`;

export const StyledLogoText = styled.span`
  margin-left: 24px;
  color: ${(props) => props.theme.colorBlackForText};
  font-weight: 700;
  font-size: 28px;
  line-height: 32.2px;
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyled}
`;
