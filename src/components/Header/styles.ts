import styled from "styled-components";

export const Container = styled.div`
  height: 4em;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0 0 0 1em;
    height: 4em;
`;

export const Title = styled.h1`
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.textColor};
`;