/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack")

let cartasDoPC="Cartas - Maquina ", CartasDoUsuario= "Cartas - Jogador ", pontosDoPC=0, PontosDoUsuario=0;

if(confirm("Deseja jogar uma partida?")) {
    for(let i=0; i<2; i++){

    let carta = comprarCarta(); 
    
    cartasDoPC+=carta.texto+ " "; 
    pontosDoPC+=carta.valor;
    
    carta = comprarCarta();

    CartasDoUsuario+=carta.texto+ " "; 
    PontosDoUsuario+=carta.valor;

}    
    console.log(cartasDoPC+ " Pontuação "+pontosDoPC);
    

    console.log(CartasDoUsuario+" Pontuação "+PontosDoUsuario);
   
if((PontosDoUsuario > pontosDoPC) && PontosDoUsuario <= 21 || (pontosDoPC > 21 && PontosDoUsuario <=21)){
    console.log("O usuário venceu!")

}else if((pontosDoPC > PontosDoUsuario) && pontosDoPC <= 21 || (PontosDoUsuario > 21 && pontosDoPC<=21)){
    console.log("A máquina venceu!")

    }
    else{
        console.log("Empate")
    }

}
else{
    console.log("O jogo acabou!")

}

