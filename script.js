const baseURL = `https://uselessfacts.jsph.pl/`;

const buttonEl = document.querySelector('button');
const pEl = document.querySelector('p');

buttonEl.addEventListener('click', getFact);

function getFact() {
  pEl.textContent = '';
  fetch(`${baseURL}/random.json?language=en`)
    .then((res) => res.json())
    .then((res) => {
      pEl.textContent = res.text;
    })
    .catch((err) => {
      console.error(`Something went wrong: `, err);
    })
    .finally(() => {
      return;
    });
}
