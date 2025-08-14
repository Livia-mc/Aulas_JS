/*Variáveis em JS*/ 
var frase
frase = "Aqui temos uma String"
alert(frase)

/*Fazendo entrada de dados para uma variável*/
var nome 
nome = prompt("Digite o seu nome: ")
alert("Bem vindo "+nome)

var idade
alert("Vou adivinhar sua idade")
idade = prompt("Digite sua idade: ")
alert("Sua idade é de "+idade)

/*Operaçoes Aritiméticas com JS*/
var n1, n2, result
n1=14
n2=20

result = n1+n2
alert("O resultado da soma entre: "+ n1 +" + "+ n2 +" = "+ result)


/*Considere que os valores n1 e n2 sejam digitados pelo usuário*/
n1= parseInt(prompt("Digite o primeiro valor "))
n2= parseInt(prompt("Digite o segundo valor "))
result= n1+n2
alert("O resultado da soma entre: "+ n1 +" + "+ n2 +" = "+ result)