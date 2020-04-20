import React from "react"

class Etapa2 extends React.Component {
    state = {
        infoEnsino: [
            {
                valorInputCurso: "",
                valorInputEnsino: ""
            }

                     ]
            }
onChangeInputCurso = event => {
    this.setState({ valorInputCurso: event.target.value});
};

onChangeInputEnsino = event => {
    this.setState({ valorInputEnsino: event.target.value});
};

render() {
    return(
        <div className="container-etapa2">
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <p>5. Qual curso?</p>
            <input 
            value={this.state.valorInputCurso}
            onChange={this.onChangeInputCurso}
            placeholder=""
            />
            <p>6. Qual a unidade de ensino?</p>
            <input 
            value={this.state.valorInputEnsino}
            onChenge={this.onChangeInputEnsino}
            placeholder=""
            />

        </div>
    )
}




}

export default Etapa2;