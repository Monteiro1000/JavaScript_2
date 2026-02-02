// Verifique se a sua idade é maior do que a de algum parente

 var idadeJulio = 18;
 var idadeTio = 52;

 if(idadeJulio > idadeTio) {
    console.log('A idade de Júlio é maior do que a de seu Pai');
 }else{
     console.log(' A idade do tio de júlio é maior do que a dele');
 }

// // Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

 if(idadeJulio > idadeTio) {
     console.log('A idade de Júlio é maior do que a de seu Pai');
 }else if (idadeJulio === idadeTio){
     console.log(' A idade do tio de júlio é igual a dele');
 }else {
     console.log('A idade do tio de Júlio é maior do que a dele')
 }

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //Retorna o último verdadeiro ou o último falso.
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
 var nome = 'Andre'; //truthy
 var idade = 28; //truthy
 var possuiDoutorado = false; //falsy
 var empregoFuturo; //falsy
 var dinheiroNaConta = 0; //falsy

 console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// // Compare o total de habitantes do Brasil com China (valor em milhões)
 var brasil = 207;
 var china = 1340;
 
 if (brasil > china) {
    console.log('Brasil possui mais habitantes')
 } else {
    console.log('China possui mais habitantes');
 }

// // O que irá aparecer no console?
 if(('Gato' === 'gato') && (5 > 2)) {
   console.log('Verdadeiro');
 } else {
   console.log('Falso');
 }

// // O que irá aparecer no console?
 if(('Gato' === 'gato') || (5 > 2)) {
   console.log('Gato' && 'Cão');
 } else {
   console.log('Falso');
 }