 
//A variavél não pode ser acessada fora da função
 function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
 }

 mostrarCarro(); //Fusca no console
console.log(carro);//erro, carro is not defined

Variável Global (erro)


function mostrarCarro2() {
    carro2 = 'fusca';
    console.log(carro2);

}

mostrarCarro2();
console.log(carro2);
'use strict' impede isso.

Escopo de Função (Pai)

var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca

//permite acessar a variável pois ela está fora da função, ou seja, no escopo pai

//Escopo de bloco

if(true) {
    var mes = 'Dezembro';
    console.log(carro);
}
console.log(carro); //Carro
//Percebe-se que o var vaza o bloco mesmo se for false a única diferença é que no false retorna 'undefined'.

if(true) {
    const esporte = 'volei';
    console.log(esporte);
}

console.log(esporte);
//let e const não permitem esse vazamento

Chaves criam um escopo de bloco, não confudir com a criação de objetos.
{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined

//o var vaza o bloco, já o const não


for loop -> No loop, caso for usado var, o valor da variável utilizada irá vazar.
var i = 50;
for (var i = 1; i < 10; i++) {
    console.log(`Número ${i}`);
}

console.log(i * 10);

//Por isso o ideal é utilizar let ou const


//Const: Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

// const semana = 'sexta';
// semana = 'quinta';
// console.log(semana);

const dados = {
    nome: 'Júlio',
    idade: 18,
    data: 'Dezembro',
};

dados.idade = 19; // Muda
dados = 'isso'; // --> não muda, dá erro


let Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável


