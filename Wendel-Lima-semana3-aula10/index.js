// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) { //aqui ele testa os multiplos de 2 ou numeros pares
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.") //todos números impares 
// }


// let fruta = prompt("Escolha uma fruta")
//     let preco
//     switch (fruta) {
//       case "Laranja":
//         preco = 3.5
//         break;
//       case "Maçã":
//         preco = 2.25
//         break;
//       case "Uva":
//         preco = 0.30
//         break;
//       case "Pêra":
//         preco = 5.5
//         break; // BREAK PARA O ITEM d.
//         default:
//         preco = 5
//         break;
//     }
//     console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


/*Repostas
a: Para chegar o valor das frutas apenas digitando o nomê da mesma.

b: O preço da fruta  Maçã  é  R$  2.25

c: 24,55 ps: as bananas saem a 5 por não estarem na lista vai pro valor do default

d : O preço da fruta  Pêra  é  R$  5

*/ 


// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }

// console.log(mensagem) //mensagem is not defined at // o comando está fora do escopo


// const primeiroNumero = Number(prompt("Digite o primeiro número"))
// const segundoNumero = Number(prompt("Digite o segundo número"))
// const terceiroNumero = Number(prompt("Digite o terceiro número"))

// let comparacao = primeiroNumero < segundoNumero < terceiroNumero 

// if(primeiroNumero > 0 && segundoNumero > 0) {
    
// }   if else (segundoNumero > 0 && terceiroNumero > 0) {

// } else (primeiroNumero > 0 && terceiroNumero > 0) {

//         console.log("")
// }   não terminado 


// let animais = prompt("Quais as classificação do animal ?").toLowerCase();

// switch(animais) { 
//     case "leão":
//         console.log("Mamifero")
//         console.log("Vertebrado")
//         break;
//     case "baleia":
//         console.log("Mamifero")
//         console.log("Vertebrado")
        
//         break;
//     case "beija-flor":
//         console.log("Ave")
//         console.log("Vertebrado")
//         break;
//     case "sapo":
//         console.log("Anfíbios")
//         console.log("Invertebrado")
//         break;
//     case "jacaré":
//         console.log("Réptil")
//         console.log("Vertebrados")
//         break;
//     case "aranha":
//         console.log("Aracnídeo")
//         console.log("invertebrados")
//         break;
   
//         default:
//         console.log("Raça indefinida")
//         break;
// }

// https://drive.google.com/drive/folders/1n7OzOeIMs5WY8SPnpcyBUnMkAn4Iijru?usp=sharing 


const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!" //condição não definida
  
    console.log(mensagem)  //o console.log está fora do bloco por isso
                           //ele não executa e da erro.
}
}


    




