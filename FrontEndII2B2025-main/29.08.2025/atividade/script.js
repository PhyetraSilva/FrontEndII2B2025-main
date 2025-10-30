const arroz = document.querySelector('#arroz');
const p = document.querySelector('p');
const input = document.querySelector('input');
const adicionados = document.querySelector('#adicionados');
const itens = document.querySelectorAll('li');
const listaDeCompras = document.querySelector('#listaDeCompras');

// arroz.onclick = () => {
//     alert('Cliou no Arroz!');
// }

// arroz.addEventListener('click', () => {
//     alert('Clicou no arroz');
// })

input.addEventListener('input', () => {
    console.log('input alterado')
    p.textContent = input.value;
})

// document.body.addEventListener('mousemove', () => {
//     const r= Math.floor(Math.random()*255);
//     const g= Math.floor(Math.random()*255);
//     const b= Math.floor(Math.random()*255);
//     console.log(`rgb(${r}, ${g}, ${b})`);
//     const cor = `rgb(${r}, ${g}, ${b})`;
//     adicionados.style.backgroundColor = cor;
// })



// Crie um evento para, ao mover o mouse em qualquer lugar da tela,
// alterar a cor de fundo da lista "adicionados" para uma cor aleatória

// console.log(itens);
// percorra/itere a lista itens com o forEach

itens.forEach((item) => {
    // console.log(item)
    item.addEventListener('click', (ev) => {
        console.log(ev.target)
        const alvo = ev.target;
        const pai = alvo.parentElement;
        // criar um desvio condicional comparando se o pai é a lista da esquerda, se for,
        // adicionar o alvo na lista da direita, se não for, adicionar o alvo na lista da
        // direita
        if (pai === listaDeCompras) {
            adicionados.appendChild(alvo);
        } else {
            listaDeCompras.append(alvo);
        }
    })
})