import React, { useContext } from "react";
//import Switch from "react-switch";
//import { shade } from 'polished';
import { FormControlLabel, Switch } from "@mui/material";
import { ThemeContext } from 'styled-components';
import { Container, Nav, Title } from "./styles";

interface Props {
  toggleTheme(): void;
}

export const Header = ({ toggleTheme }: Props) => {
  const { name } = useContext(ThemeContext);
  
  return (
    <Container>
      <Nav>
        <Title>GamesSaan</Title>
        <FormControlLabel
          sx={{
            display: "block",
          }}
          control={
            <Switch
              checked={name === 'dark'}
              onChange={toggleTheme}
              name="loading"
              color="primary"
            />
          }
          label=""
        />
      </Nav>
    </Container>
  );
};
              //onChange={() => setLoading(!loading)}