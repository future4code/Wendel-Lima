const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) //false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) //false

console.log("e. ", typeof resultado) //boolean



let array
    console.log('I. ', array)
    
    array = null
    console.log('II. ', array)
    
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('III. ', array.length) //11 numeros dentro da array
    
    let i = 0
    console.log('IV. ', array[i], " e ", array[i+1]) // 3 e 4
    
    array[i+1] = 19 //19
    const valor = array[i+6]
    console.log('V. ', array[i+1], " e ", valor) // 19 e 9
    
    i+=1 // 1
    array[i] = array[i-1] //3
    console.log('VI. ', array[i]) //3
    
    i = array.length - 1 //10
    array[i] = array[i-3] //10
    const resultadoC = array[i]%array[1] 
    console.log('VII. ', resultadoC) //1

//declarando uma array

var array_name = [item1, item2, ...]

//index de uma array é o index.js creio eu que seria a pergunta

//pelo numero de itens dentro dela, sempre começando pelo 0 até o numero de itens pré-definidos.



   
  
   




