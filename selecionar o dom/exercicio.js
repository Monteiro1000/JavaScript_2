// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);


// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="src/img/imagem"]');

// console.log(imagens)

// Selecione todos os links internos (onde o href começa com #)

// const linksInternos = document.querySelector('[href^="#"]');
// console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroanimal = document.querySelector('.animais-descricao h2')
console.log(primeiroanimal);

// Selecione o último p do site
const ultimop = document.querySelector('p: last-child');

console.log(ultimop)
