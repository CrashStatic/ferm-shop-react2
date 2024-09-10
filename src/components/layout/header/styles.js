import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledHeader = styled(Section)`
  display: flex;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.headerHeight};
  padding: 0;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 1px 0px #0000000a, 0px 2px 6px 0px #0000000a,
    0px 10px 20px 0px #0000000a;
`;
