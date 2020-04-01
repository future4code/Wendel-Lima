// let sum = 0         // ex 01 .
// for(let i = 0; i < 15; i++){  // 0 menor que 15 + i++ somando com sum = sum + 1
//     sum += i
// }

// console.log(sum) // no console sum = 105


// const lista = [ 10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30] // [10, 15, 25, 30]
// const novaLista = []
// const numero = 4 // pelo valor de 3 inserido [12, 15, 18, 21, 27, 30] // se tiver o valor de 4 apenas [12]
// for(const item of lista){
//     if(item%numero === 0){
//        novaLista.push(item) //adiciona elementos a cont nova lista
//     }
// }
// console.log(novaLista)





const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] // Resposta B

let novaArray = []

for(const item of arrayOriginal){
    let divisao
     divisao = item/10
    novaArray.push(divisao)
}
console.log(novaArray)