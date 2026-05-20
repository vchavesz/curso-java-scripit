//* Escreva um algoritmo que recebe do usuário quantos gatos 
// e quantos cachorros a pessoa possui. Exiba uma mensagem
//  dizendo quantos gatos e quantos cachorros a pessoa tem, 
// e se ela tem mais gatos ou cachorros. */

let gatos
let cachorros
let total

gatos = prompt("Quantos gatos voce possui? ")
cachorros = prompt ("Quantos cachorros voce tem? ")

gatos = Number(gatos)
cachorros = Number(cachorros)

total = gatos + cachorros

alert("Voce possui ao todo " + total + " animais entre cachorros e gatos")

if(gatos > cachorros){
    alert("Voce tem mais gatos que cachorros")
}else{
    alert("Voce tem mais cachorros do que gatos")
}



