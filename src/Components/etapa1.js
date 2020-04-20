import React from "react";
import Etapa2 from "./etapa2";


class Etapa1 extends React.Component {
  
    state = {
       dadosGerais: [
           {
            valorInputNome: "",
            valorInputIdade: "",
            valorInputEmail:"" 
                                    }
                    ]
       
            };

 onChangeInputNome = event => {
     this.setState({valorInputNome: event.target.value}); 
 };
 
 onChangeInputIdade = event => {
     this.setState({valorInputIdade: event.target.value});
 };

 onChangeInputEmail = event => {
     this.setState({valorInputEmail:event.target.value});
 };

    render() {
      return(
  
        <div className="container-etapa1">
          <h2>DADOS GERAIS</h2> 
           <p>1. Qual o seu nome?</p>
                 <input 
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder=""
            />
            <p>2. Qual sua idade?</p>
                 <input 
             value={this.state.valorInputIdade}
             onChange={this.onChangeInputIdade}
             placeholder= ""  
            />
            
            <p>3. Qual seu email?</p>
                <input 
            value={this.state.valorInputEmail}
            onChange={this.state.valorInputEmail}
            placeholder=""
            />
            <p>4. Qual a sua escolaridade ?</p>
            <form onSubmit={this.handleSubmit}>
           <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Ensino médio incompleto</option>
            <option value="">Ensino médio completo</option>
            <option value="">Ensino superior incompleto</option>
            <option value="">Ensino superior completo</option>
          </select>
        </form>
           

           
        </div>

        );
    };
}


    export default Etapa1;