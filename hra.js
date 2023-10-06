let currentPlayer = 'circle';

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
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', hrajKosticku);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', hrajKosticku);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', hrajKosticku);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', hrajKosticku);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', hrajKosticku);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', hrajKosticku);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', hrajKosticku);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', hrajKosticku);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', hrajKosticku);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', hrajKosticku);
