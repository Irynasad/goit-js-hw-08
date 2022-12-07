// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const containerGallery = document.querySelector('.gallery');

const listOfGallery = createGallery(galleryItems);

containerGallery.insertAdjacentHTML('beforeend', listOfGallery);

function createGallery(items) {
  return items
    .map(({ description, original, preview }) => {
      return `<li>
                <a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
                </a>
                </li>`;
    })
    .join(' ');
}

const galleryToShow = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionPosition: 'top',
  captionDelay: 250,
  widthRatio: 0.8,
  heightRatio: 0.8,
});

console.log(galleryItems);
