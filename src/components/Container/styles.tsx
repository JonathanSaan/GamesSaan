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
  min-height: 38em;
  height: auto;
  max-height: 50em;
  width: 40em;
  max-width: 50em;
  
  a {
    text-decoration: none;
  }
  
  @media(max-width: 768px) {
    padding: 2em 1em;
    width: 100%;
  }
`;

export const Title = styled.a`
  font-size: 1.3em;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColor};
`;

export const Image = styled.img`
  display: block;
  border: 0;
  margin: 2em 0;
  height: 30vw;
  width: 100%;
  
  @media(max-width: 768px) {
    height: 50vw;
  }
`;

export const Paragraph  = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  
  a {
    margin: 0 0 0 .2em;
  }
`;