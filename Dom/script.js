// window.alert('Isso mesmo');

const href = window.location.href;

if (href === 'http://127.0.0.1:5500/Dom/index.html') {
    console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');

function callbackh1() {
    console.log('Clicou em', h1Selecionado.innerText)

}

h1Selecionado.addEventListener('click', callbackh1)