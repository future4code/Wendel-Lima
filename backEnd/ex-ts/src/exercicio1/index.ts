// const meuTexto: string | number = 18 ;

// const meusNumeros: number | string = "11"

enum CoresDoArcoIris {
    LARANJA = "Laranja",
    VERDE = "Verde",
    VERMELHO = "Vermelho",
    AMARELO =  "Amarelo"
};

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
};

const primeiroPerfil: pessoa = {
    nome: "Wendel",
    idade: 26,
    corFavorita: CoresDoArcoIris.LARANJA
};

const segundoPerfil: pessoa = {
    nome: "Marcelo",
    idade: 50,
    corFavorita: CoresDoArcoIris.VERDE
};

const terceiroPerfil: pessoa = {
    nome: "Ana Maria",
    idade: 44,
    corFavorita: CoresDoArcoIris.VERMELHO
};

const quartoPerfil: pessoa = {
    nome: "Theo",
    idade: 3,
    corFavorita: CoresDoArcoIris.AMARELO
};

