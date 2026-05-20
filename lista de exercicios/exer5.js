/*Escreva um algoritmo que receba 2 (duas) notas, de 0.0 a 10.0.
// calcule a média aritmética das notas e verifique e exiba a 
// informação se o aluno está: Aprovado (média maior ou igual à 6.0)
//  Recuperação (média maior ou igual à 4.0 e menor que 6.0)
// Reprovado (média menor do que 4.0)
*/

let nota1
let nota2
let media

alert("Vamos calcular a sua media e seu estado de aprovação")
nota1=prompt("Insira nota de 0.0 a 10.0")
nota2=prompt("Insira nota de 0.0 a 10.0")

nota1 = Number(nota1)
nota2 = Number(nota2)

media = (nota1 + nota2) / 2


if(media >= 6){
    alert("Voce esta aprovado com a nota " + media )
} else{
    alert("Voce esta na recuperção com a nota " + media )
} if(media < 4){
    alert("Voce esta reprovado com a nota " + media )
}



