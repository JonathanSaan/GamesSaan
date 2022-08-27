import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
  padding: 1em 0;
  
  @media(max-width: 768px) {
    display: block;
  }
`;

export const News = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DivOneNews = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  margin: 1em 0;
  padding: 2em;
  min-height: 35em;
  max-height: 45em;
  width: 40em;
  max-width: 50em;
  
  @media(max-width: 768px) {
    padding: 2em 1em;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1em;
  color: ${(props) => props.theme.colors.textColor};
`;

export const Image = styled.img`
  margin: 2em 0;
  height: 20em;
  width: 100%;
  
  @media(max-width: 768px) {
    height: 15em;
  }
`;

export const Paragraph  = styled.p`
  color: ${(props) => props.theme.colors.textColor};
`;