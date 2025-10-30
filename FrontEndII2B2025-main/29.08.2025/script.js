// alert('Página aberta!');
let titulo = document.querySelector('h1');
let paragrafos = document.querySelectorAll('p');
let link = document.querySelector('a');
let btn = document.querySelector('button');
const body = document.querySelector('body');
const novoP = document.createElement('p');
novoP.textContent = 'Meu novo parágrafo criado via JS.';
body.prepend(novoP)
console.log(paragrafos.length);
paragrafos.forEach((par) => {
    console.log(par.textContent);
});
// let paragrafo = document.getElementById('p');
let paragrafo = document.querySelector('#p')
console.log(titulo.textContent)
titulo.textContent = '2B Info';
paragrafo.style.backgroundColor = 'red';
console.log(link.getAttribute('href'));
link.setAttribute('target', '_blank');
link.setAttribute('href', 'https://www.ifro.edu.br')

btn.innerText = 'Clique ali!';

btn.addEventListener('click', (ev) => {
    ev.target.style.backgroundColor = 'yellow';
});

titulo.remove();

console.log('Elemento pai da ancora:', link.parentElement);