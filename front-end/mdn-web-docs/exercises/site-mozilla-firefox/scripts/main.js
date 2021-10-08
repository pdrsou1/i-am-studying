// const meuCabecalho = document.querySelector('h1');
//     meuCabecalho.textContent = 'Olá mundo!';
// document.querySelector('html').onclick = function() {
//   alert('Ai! Pare de me cutucar!');
// }

//Adicionando um modificador de imagem
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/Firefox_logo,_2019.svg.png') {
      minhaImagem.setAttribute ('src','images/Mozilla_Firefox_Logo.png');
    } else {
      minhaImagem.setAttribute ('src','images/Firefox_logo,_2019.svg.png');
    }
}

// Adicionando uma mensagem personalizada de boas vindas
let meuBotao = document.querySelector("button");
let meuCabecalho = document.querySelector("h1");

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
}
if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}
// botão para mudar o usuário
meuBotao.onclick = function() { defineNomeUsuario();
}
function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
  }
}