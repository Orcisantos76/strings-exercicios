// # Exercício 3

// A partir da frase a seguir, faça o que se pede.

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

// c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.

// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”
//Crie a const para a frase aqui
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
console.log(frase)
const novaFrase = frase.replace('verde','rosa').replace('azul','laranja')
console.log(novaFrase)
console.log('-=--')
//extra
console.log(novaFrase.slice(76,101))
const trecho = novaFrase.slice(76,101).toUpperCase()
console.log(trecho)
console.log("-=-")

const novaFraseTrecho = novaFrase.replace("mas não deixe o gato sair",trecho)
console.log(novaFraseTrecho)
//const trecho = frase.slice("mas não deixe o gato sair")
const nome='Orci alberto barros dos santos'
console.log(`O nome ${nome} possui ${nome.length} caracteres`)
console.log(`${nome.slice(24,30)}`)
const sobreNome = nome.slice(24,30)
console.log(sobreNome, "Aqui impresso depois de usar slice")
const trocaSobrenome = nome.replace(sobreNome,'lacerda')
console.log(trocaSobrenome)

