const section = document.querySelector('[data-js="section"]');
const playerLivesCount = document.querySelector(
  '[data-js="player-lives-count"]',
);
const playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
  { imgSrc: './images/gustavo-fring.jpeg', name: 'Gustavo Fring' },
  { imgSrc: './images/hank-schrader.webp', name: 'Hank Schrader' },
  { imgSrc: './images/jane-margolis.webp', name: 'Jane Margolis' },
  { imgSrc: './images/jesse-pinkman.webp', name: 'Jesse Pinkman' },
  { imgSrc: './images/mike-ehrmantraut.webp', name: 'Mike Ehrmantraut' },
  { imgSrc: './images/saul-goodman.webp', name: 'Saul Goodman' },
  { imgSrc: './images/skylar-white.webp', name: 'Skylar White' },
  { imgSrc: './images/tuco-salamanca.webp', name: 'Tuco Salamanca' },
  { imgSrc: './images/walter-white-jr.webp', name: 'Walter White Jr' },
  { imgSrc: './images/walter-white.webp', name: 'Walter White' },
];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomize();

  cardData.forEach((item) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');

    card.classList = 'card';
    face.classList = 'card-face';
    back.classList = 'card-back';

    face.src = item.imgSrc;
    face.alt = item.name;

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
  })


};

cardGenerator();