import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  margin-bottom: ${(props) => props.theme.indent};
  background-color: ${(props) => props.theme.backgroundCatalog};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;

  ::placeholder {
    color: ${(props) => props.theme.colorBlackForText};
`;
