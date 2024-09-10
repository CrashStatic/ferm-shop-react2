import styled from "styled-components";
import { Section } from "/src/components/styled";
// import aboutImage from "/src/assets/about.svg";
import { ReactComponent } from "/src/assets/about.svg";

export const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.colorForLightBackground};
  display: flex;
  position: relative;
  padding: 183px 553px 183px 90px;

  &::before {
    content: "";
    display: block;
    width: 446px;
    height: 447px;
    border-radius: 50%;
    position: absolute;
    background-color: #c4e2ff;
    top: 76px;
    right: 90px;
    z-index: 1;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${ReactComponent});
    width: 273px;
    height: 563px;
    background-position: 0 0;
    background-repeat: no-repeat;
    z-index: 2;
    top: 37px;
    right: 177px;
  }
`;

export const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  min-width: 637px;
`;

export const StyledText = styled.p`
  margin: 0;
  margin-top: 24px;
  max-width: 538px;
`;
