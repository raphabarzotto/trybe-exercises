const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// Copie esse arquivo e edite apenas ele;
// Crie uma função que adicione a classe 'tech' ao elemento selecionado;
//   1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function changeTech(event) {
  const elementTech = document.querySelector('.tech');
  elementTech.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}
firstLi.addEventListener('click', changeTech);
secondLi.addEventListener('click', changeTech);
thirdLi.addEventListener('click', changeTech);

// Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeTextInput(event) {
  const elementTech = document.querySelector('.tech');
  elementTech.innerText = event.target.value;
}
input.addEventListener('input', changeTextInput);

// Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
//   1. Que tal redirecionar para seu portifólio?
function redirecionaPortfolio() {
  window.location.replace('https://github.com/raphabarzotto/')
}
myWebpage.addEventListener('dblclick', redirecionaPortfolio);

//  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
function mouseoverTop3 (event) {
  event.target.style.color = '#2fc18c';
}

function mouseoutTop3 (event) {
  event.target.style.color = 'unset';
}

myWebpage.addEventListener('mouseover', mouseoverTop3);
myWebpage.addEventListener('mouseout', mouseoutTop3);
