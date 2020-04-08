// const cachorro = {
//     nome: "Bolinha",
//     raca: "vira-lata",
//     peso: 50,
//     vacinas: ["covid19", "v10", "raiva"]
// }

// const novoCachorro = {
//     ...cachorro,
//     nome: "Rex",
//     car: "Marrom",
//     latir: function() {console.log("AU AU")}
//  }
//  novoCachorro.latir();
// console.log(novoCachorro)
// console.log(cachorro)


// // const filme = {
//     nome: "O Poderoso Chefão",
//     diretor: "Francis Ford Copolla",
//     atores: ["Al Pacino", "James Caan", "Marlon Brando",
//      "Robert Duvall"],
//     ano: 1972,
//     foiVisto: true
// }
//  console.log(filme)


// function escreveNoHTML() {
//     const meuTexto = document.getElementById("meu-input");
//     if(
//     (meuTexto.nodeValue.includes(".jpeg")) ||
//     (meuTexto.nodeValue.includes(".jpg")) ||
//     (meuTexto.nodeValue.includes(".png"))
//     ){
        
//     }
// }


// function rastreiaEvento(evento){
//     console.log(evento.target)
// }

// let somaDasLetras = ""

// function rastreiaTecla(evento) {
// somaDasLetras+=evento.key
//     let mostraDigitado = document.getElementById("mostra-resultado");
//     mostraDigitado.innerHTML = "<p>"+somaDasLetras+"</p>";
// // console.log(somaDasLetras)

// }



function clicouNoBotao(ev){
    
    console.log("oi")
    const meuTexto = document.getElementById("meu-input");
    const mostraDigitado = document.getElementById("mostra-digitado");
    mostraDigitado.innerHTML+="<p>"+meuTexto.value+"<p>"
    meuTexto.value = "";
}

function apertouEnter(ev){
    if(ev.key === "Enter"){
    console.log("Oi, você apertou a tecla "+ev.key);
    }else{
        console.log("Você não apertou Enter");
    

}

}