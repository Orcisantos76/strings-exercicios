// # Exercício 1

// Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
const nomeUsuario = prompt('Insira seu nome: ')
const comida1 = prompt('Qual sua comida favorita?')
const comida2 = prompt('Qual sua segunda comida favorita?')
const comida3 = prompt('Qual sua terceira comida favorita?')

console.log(`As comidas favoritas de ${nomeUsuario} são: \n-${comida1}\n-${comida2}\n-${comida3}`)

console.log("As comidas favoritas de " + nomeUsuario + " são:" + "\n" + comida1 + "\n" +comida2 + "\n" + comida3)
