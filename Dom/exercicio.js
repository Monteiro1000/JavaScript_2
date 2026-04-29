// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href
console.log(hrefPagina);
// Seleciona o primeiro elemento da página que
const ElementoAtivo = document.querySelector('.ativo');

// possua a classe ativo

// Retorne a linguagem do navegador
// Resposta: window.navigator

const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela 
const largura = window.innerWidth;
console.log(largura);