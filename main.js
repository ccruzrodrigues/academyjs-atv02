const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

/* Declaring the alternative text for each image file */
const altImgTexts = {
    "img1.jpg" : "Planetas menores em realação a Terra",
    "img2.jpg" : "Planetas em realação a Jupiter",
    "img3.jpg" : "Planetas em realação ao Sol",
    "img4.jpg" : "Estrelas em relação a VV Cephei",
    "img5.jpg" : "Video comparativo de tamanho das Estrelas"
  }

/* Looping through images */
for (const img of imgs) {
  const Image = document.createElement('img');
  Image.setAttribute('src', `img/${img}`);
  Image.setAttribute('alt', altImgTexts[img]);
  thumbBar.appendChild(Image);
  Image.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});