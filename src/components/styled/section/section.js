import styled from "styled-components";

const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  padding: 100px 0;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  position: relative;
`;

export default Section;
