function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
    return 3.14;
}

var total = 5 * pi();

console.log(total);

function imc(peso, altura) {
    var imc = peso /(altura * altura);
    return imc
}

console.log(imc(80, 1.8))

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Você gosta do céu'
    } else if (cor === 'verde') {
        return 'Você gosta de mato'
    } else {
        return 'Você não gosta de nada'
    }
}
console.log(corFavorita());


addEventListener ('click', function() {
    console.log('Clicou'); 
});

function imc2 (peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc);
}

imc2(20, 1.8);

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Por favor preencha um número'
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
    
}

console.log(terceiraIdade('oi'))

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;

    return `Falta visitar ${totalPaises - paisesVisitados} países`

}

var profissao = 'Designer';

function dados() {
    var nome = 'Júlio';
    var idade = '18';
    function outrosDados() {
        var endereco = 'Sergipe';
        var idade = 19;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados()
}

console.log(dados())