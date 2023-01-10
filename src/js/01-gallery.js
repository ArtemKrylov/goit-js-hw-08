import { galleryItems } from './gallery-items';
//importing js and css from simplelightbox package
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

//creating html string with gallery elements
const galleryItemsHTMLString = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
 				 	<img class="gallery__image" src="${preview}" alt="${description}" />
			 	</a>`
  )
  .join('');
galleryEl.insertAdjacentHTML('beforeend', galleryItemsHTMLString);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
