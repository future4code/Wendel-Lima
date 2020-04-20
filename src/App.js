import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from './Components/etapa1.js'
import Etapa2 from './Components/etapa2.js'
import Etapa3 from './Components/etapa3.js'
import Final from './Components/final.js'


class App extends React.Component {

    state = {
      etapa: 1,
    };
    
      rendenizarEtapa = () => {
        switch (this.state.etapa) {
          case 1:
            return <Etapa1 />;
          case 2:
            return <Etapa2 />;
          case 3:
            return <Etapa3 />;
          case 4:
            return <Final />;
           
            default:  
        }
      }
  proximaEtapa = () => {
    const paginaAtual = this.state.etapa;
    const proxPagina = paginaAtual + 1 

      this.setState({etapa: proxPagina})
  }  
  render()
     {  
  return (
    <div>
    {this.rendenizarEtapa()}
    <button className="botao" onClick={this.proximaEtapa} >Próxima Etapa</button>
    </div>
  );
    }
}

export default App;
