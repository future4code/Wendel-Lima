import React from 'react'
import styled from 'styled-components'
import axios from 'axios'



const Options = styled.option `
background-color: red;
color: white;
`

const FormContainer = styled.form `
    display: grid;
    gap: 8px;
    justify-content: center;
    margin-bottom: 32px;
        
`

export class Home extends React.Component {
    state = {
        pokedex: [],
        pokeImg: ''
    }

    componentDidMount = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=200').then(response =>{
            this.setState({pokedex: response.data.results})
        }).catch(erro => {
            console.log(erro)
        })
    }

    capturarPokemon = (event) => {
        const nomePokemon = event.target.value
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`).then(response => {
            console.log(response)
            this.setState({pokeImg: response.data.sprites.front_default})
        }).catch(erro => {
            console.log(erro)
        })
    }

    render () {
        return (
        
            <FormContainer>
                <h1>Pokedex</h1>
              <select onChange={this.capturarPokemon} >
                  <Options value={""}>Selecione um Pokemon</Options>
                  {this.state.pokedex.map(pokemon => {
                      return (
                      <Options
                      key={pokemon.name}
                      value={pokemon.name}>
                          {pokemon.name}
                          </Options>
                 )
                  }
                  )
                }
              </select>
              <div>
              
                  <img src={this.state.pokeImg}  />
                  
              </div>
            </FormContainer>
        )
    }

}