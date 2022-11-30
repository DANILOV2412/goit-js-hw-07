import { galleryItems } from './gallery-items.js';
// // Change code below this line
function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview,original,description}) => {
         return `<div class="gallerry__item">
            <a href=""${original}"" class="gallerry__link">
                <img src="${preview}"  data-source="${original}" alt="${description}" class="gallerry__image">
                </a>
        </div>`
    }).join('');
}
const onGallery = document.querySelector('.gallery');
onGallery.insertAdjacentHTML("beforeend",createGalleryMarkup(galleryItems));

onGallery.addEventListener('click',onGaleryClick)
function onGaleryClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const galerryEl = evt.target;
    // const modal = basicLightbox.create(`<img src="${onGallery.dataset.source}" width="800" height="600">`);
    // modal.show();
}
   