import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  height: 5em;
`;