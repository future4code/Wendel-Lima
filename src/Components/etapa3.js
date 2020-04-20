import React from "react"
import Etapa2 from "./etapa2";

class Etapa3 extends React.Component {
    state = {
        infoGeraisEnsino: [
            {
                valorInputGraduacao: "",
    }
        ]
    }
onChangeInputGraduacao = event => {
    this.setState({ valorInputGraduacao: event.target.value})
}


render() {
    return(
        <div className="container-etapa3">
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input 
            value={this.state.valorInputGraduacao}
            onChange={this.onChangeInputGraduacao}
            placeholder=""
            />
         <p>8. Você fez algum curso complementar?</p>
         <form onSubmit={this.handleSubmit}>
           <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Nenhum</option>
            <option value="">Curso técnico </option>
            <option value="">Curso de inglês</option>
          </select>
        </form>
    </div>
    );
    }
}

export default Etapa3