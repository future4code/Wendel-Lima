import React, { Component, useState } from "react";
import styled from "styled-components";
// import BotaoX from "@material-ui/icons/Clear";
// import BotaoCoracao from "@material-ui/icons/FavoriteBorder";
// import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { Botoes } from './Components/Botoes.js';
import axios from "axios";


const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#43a047",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const PalavraAstro = styled.span`
  color: #ffc107;
  font-size: 40px;
`;
const PalavraMatch = styled.span`
  color: #5d4037;
  font-size: 40px;
`;
// const Container = styled.div`
// width: 400px;
// height: 500px;
// background-color: #bdbdbd ;
// display:flex;
// justify-content: center`;


const ContainerPrincipal = styled.div`
  position: absolute;
  left: 30%;
  right: 30%;
  border: 2px solid black;
  width: 450px;
  height: 500px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  box-shadow: 1px 2px 5px 0px rgba(50, 50, 50, 0.75);
`;


function App() {
  const [listaUsuarios, setListaUsuarios] = useState([])
  
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"

  getProfile = () => {
    axios
        .get(baseUrl)
        .then(response => {
          setListaUsuarios({listaUsuarios: response.data.profile})
        })
        .catch(err => {
          console.log(err)
        })
  }


  return (
    <MuiThemeProvider theme={MyTheme}>
        <ContainerPrincipal>
        {/* <Container> */}
           <PalavraAstro>astro</PalavraAstro>
           <PalavraMatch>match</PalavraMatch>
           <Botoes />
        {/* </Container> */}
       </ContainerPrincipal>
    </MuiThemeProvider>
  );
}

export default App;
