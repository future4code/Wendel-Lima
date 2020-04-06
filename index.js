// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }


// console.log(minhaFuncao(2)) 

//minhaFuncao(2) = [] 
// //minhaFuncao(6) [0, 1, 0, 1, 2, 3] 
// //minhaFuncao(8)(12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]


// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));
// /* respota A : // 0 que é o "Darvas" no array, 2 que é o "João", Undefined representando que "Paula" 
// não esta na array e sim "Paulinha"
// lista.length no final de tudo : resulta na quantitade de strings na array = 5*/

// /* Resposta B : para a lista ser alterada de (nome) para números teriamos que mudar para o código (Number) a lista
// alterando de string para nome*/

// function metodo(array) {        //array somaEmultiplicacao
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];
  
//     for (let x of array) {
//       resultadoA += x;
//       resultadoB *= x;
//     }
  
//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
//   }

//  //soma o valor do resultadoA e depois multiplica o resultadoB na próxima função ela adiciona os resultadoA e resultadoB na arrayFinal

