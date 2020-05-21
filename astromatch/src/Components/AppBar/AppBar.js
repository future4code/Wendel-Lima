import React from 'react';
import styled from 'styled-components'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


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
    background: -webkit-linear-gradient(left, #ffc107 45%, #ff1744 0%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 40px;

`;

const AppBarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items:center;
    padding: 10px;
`


function AppBar(props) {
    return (
        <MuiThemeProvider theme={MyTheme}>
        <AppBarContainer>
            <button onClick={props.goToChooseProfilePage}>Escolher</button>
            <PalavraAstro>astromatch</PalavraAstro>
            <button onClick={props.goToMatchListPage} >Lista</button>
        </AppBarContainer>
        </MuiThemeProvider>
    )
}



export default AppBar;