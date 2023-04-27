import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const markup = galleryItems.map(({ preview, original, description }) => { return `<li class="gallery__item"><a class="gallery__link" href='${original}'><img class="gallery__image" src='${preview}' data-source='${original}' alt='${description}'/></a></li>` }).join('');

console.log(markup)

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener('click', handleGetImg);

function handleGetImg (e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const imgUrl = e.target.dataset.source;
  console.log(imgUrl)
  const modal = basicLightbox.create(`<img src="${imgUrl}" width="800" height="600">`);

  modal.show();
}

