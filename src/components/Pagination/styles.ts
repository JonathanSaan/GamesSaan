import styled from "styled-components";

export const ThePagination = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  margin: 0 !important;
  padding: 0 1em;
  height: 4em;
  align-items: center;
  
  button, div {
    color: ${(props) => props.theme.colors.textColor};
  }
`;