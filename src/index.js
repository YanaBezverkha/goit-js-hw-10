import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const refs = {
  selector: document.querySelector('.breed-select'),
  container: document.querySelector('div'),
  loader: document.querySelector('.loader'),
};
refs.selector.addEventListener('input', onShowInfo);

refs.selector.classList.add('is-hidden');

fetchBreeds()
  .then(data => {
    data.map(breed => {
      const markup = `<option value='${breed.id}'>${breed.name}</option>`;
      refs.selector.insertAdjacentHTML('beforeend', markup);
      changeVisibility(refs.selector, refs.loader);
    });
  })
  .catch(() => {
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  });

function onShowInfo(event) {

  changeVisibility(refs.loader, refs.container);
  const breedId = event.target.value;
  
  fetchCatByBreed(breedId)
    .then(breed => {
      const markup = `<h1>${breed[0].breeds[0].name}</h1><img src=${breed[0].url} width='400'/><p></p>${breed[0].breeds[0].description}</p><p><b>Temperament: </b>${breed[0].breeds[0].temperament}</p>`;
      refs.container.innerHTML = markup;
      setTimeout(changeVisibility(refs.container, refs.loader), 300);
    })
    .catch(() => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}

function changeVisibility(visible, invisible) {
  visible.classList.remove('is-hidden');
  invisible.classList.add('is-hidden');
}
