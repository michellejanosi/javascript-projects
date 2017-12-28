/*
  - basic div should show and hide
    - show button and hide button
  - should cover screen and properly hide
  - should hide when clicked outside of box
*/

let lightbox = document.getElementById('lightbox');

function showLightbox() {
  lightbox.style.display = 'block';
}

function hideLightbox() {
  lightbox.style.display = 'none';
}

document.getElementById('show').onclick = showLightbox;
document.getElementById('hide').onclick = hideLightbox;
