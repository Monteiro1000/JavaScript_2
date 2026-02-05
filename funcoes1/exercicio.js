// Crie uma função para verificar se um valor é Truthy

var masculino = true;
var feminino = false;

function teste (masculino) {

    if (' ') {
        
        console.log (' É do sexo masculino');
    } else {
    console.log ('É do sexo feminino');
}

}
console.log(teste(masculino));

// Crie uma função matemática que retorne o perímetro de um quadrado
function ladoQuadrado () {
    return 10;
}

var perimetro = ladoQuadrado() * 4;
console.log(perimetro);
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
function nomeCompleto() {
    var nome = 'Júlio';
    var sobrenome = 'Monteiro'
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto())

// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

function numimpar () {
    var num1 = 4

    if (num1 % 2 == 0 ) {
        console.log('PAR');
    }else{
        console.log('ÍMPAR');
    }
    
}

console.log(numimpar())

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);
