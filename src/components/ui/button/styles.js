import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  padding: 0 24px;
  height: 60px;
  border: none;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 58px;
  min-width: 260px;
  max-width: 700px;
  min-height: 60px;
  cursor: pointer;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: 0px 4px 0px 0px #00000024 inset;
  }

  &active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
