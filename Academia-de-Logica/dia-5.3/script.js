const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]
const h2 = document.querySelector('h2');

function jogar(evento) {
  const alvo = evento.target;
  const jogador = document.getElementById('player');
  const jogador2 = document.createElement('h2');
  jogador2.id = 'player2';
  jogador2.innerHTML = 'Vez do jogador O';
  h2.appendChild(jogador2);

  if (jogador.id === 'player') {
    jogador.innerText = 'Vez do jogador X';   
  } else if (jogador.id === 'player2'){
    jogador.innerText = 'Vez do jogador O';
  }
}

function criarDiv() {
  const divGrid = document.querySelector('.grid');
  for (let i = 0; i < 9; i += 1) {
    const div = document.createElement('div');
    div.classList.add('celula');
    div.id = i;
    divGrid.appendChild(div);
    div.addEventListener('click', jogar);
  }
}

criarDiv();

