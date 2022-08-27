import styled from "styled-components";

export const TheRecentNews = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  margin: 1em 2em;
  padding: 2em;
  height: auto;
  max-height: 25em;
  width: 35vw;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1em 0 0 0;
  }
`;

export const Title = styled.h1`
  font-size: 1em;
  color: ${(props) => props.theme.colors.textColor};
  font-weight: 400;
  margin: 0 0 1em 0;
`;

export const TitleNews = styled.li`
  font-size: .8em;
  list-style: none;
  margin: 1em 0;
  
  a {
    text-decoration: none;
  }
`;