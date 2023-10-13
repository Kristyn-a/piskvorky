import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

//jsou vybrané všechny tlačítka na hrací ploše
const tlacitka = document.querySelectorAll('.buttonCube');

const hrajKosticku = (udalost) => {
  const button = udalost.target;

  // Přepínání mezi 'circle' a 'cross'
  if (currentPlayer === 'circle') {
    if (!button.classList.contains('board__field--circle')) {
      button.classList.add('board__field--circle');
      currentPlayer = 'cross';
      udalost.target.disabled = true;
      document.body.querySelector('.infoLista__hrajeKolecko').src =
        'circle.svg';
    }
  } else {
    if (!button.classList.contains('board__field--cross')) {
      button.classList.add('board__field--cross');
      currentPlayer = 'circle';
      udalost.target.disabled = true;
      document.body.querySelector('.infoLista__hrajeKolecko').src = 'cross.svg';
    }
  }

  const tlacitkaZnovu = Array.from(document.querySelectorAll('.buttonCube'));

  const herniPole = tlacitkaZnovu.map((kosticka) => {
    if (kosticka.classList.contains('board__field--circle')) {
      return 'o';
    }
    if (kosticka.classList.contains('board__field--cross')) {
      return 'x';
    }
    return `_`;
  });

  const vitez = findWinner(herniPole);
  if (vitez === 'o' || vitez === 'x') {
    const zpozdiAlert = () => {
      alert(`Vyhrál hráč se symbolem ${vitez}.`);
      location.reload();
    };
    setTimeout(zpozdiAlert, 100);
  }
};

//všechny tlačítka se projdou a na každé tlačítko se přidá addEventListener na click se stane to, že hraje hráč
tlacitka.forEach((tlacitko) => {
  tlacitko.addEventListener('click', hrajKosticku);
});
