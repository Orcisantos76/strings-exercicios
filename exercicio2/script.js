// # Exercício 2

// Observe a string abaixo:

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) **Remova** o excesso de espaços no final da string;

// b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

// c) **Substitua** os traços `________` por “sticioso”.


const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringA = minhaString.trim()
console.log(minhaString)//aqui ainda tem espaços
console.log(minhaStringA)//aqui ja sem espaços
console.log(minhaString.length)//contando caracteres
console.log(minhaStringA.length)
console.log(minhaString.replace("________","sticioso"))// substituindo texto
console.log(minhaString)
const minhaStringC = minhaString.replace("________","sticioso")
console.log(minhaStringC)