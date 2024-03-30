// Menu Funcionando 
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menuItems = document.getElementById('menuItems');
  
  
    menuButton.addEventListener('click', () => {
      menuItems.classList.toggle("show");
      menuItems.classList.toggle("hide");
    });
    
  });

  // Galeria de Fotos
  let currentIndex = 0;
  const images = document.querySelectorAll('#imagens img');
  const totalImages = images.length;
  
  function openLightbox(event) {
      if (event.target.tagName === 'IMG') {
          const clickedIndex = Array.from(images).indexOf(event.target);
          currentIndex = clickedIndex;
          updateLightboxImage();
          document.getElementById('lightbox').style.display = 'flex';
      }
  }
  
  function closeLightbox() {
      document.getElementById('lightbox').style.display = 'none';
  }
  
  function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex >= totalImages) {
          currentIndex = 0;
      } else if (currentIndex < 0) {
          currentIndex = totalImages - 1;
      }
      updateLightboxImage();
  }
  
  function updateLightboxImage() {
      const lightboxImg = document.getElementById('lightbox-img');
      const thumbnailContainer = document.getElementById('thumbnail-container');
  
      lightboxImg.src = images[currentIndex].src;
      thumbnailContainer.innerHTML = '';
  
      images.forEach((image, index) => {
          const thumbnail = document.createElement('img');
          thumbnail.src = image.src;
          thumbnail.alt = `Thumbnail ${index + 1}`;
          thumbnail.classList.add('thumbnail');
          thumbnail.addEventListener('click', () => updateMainImage(index));
          thumbnailContainer.appendChild(thumbnail);
      });
  
      const thumbnails = document.querySelectorAll('.thumbnail');
      thumbnails[currentIndex].classList.add('active-thumbnail');
  }
  
  function updateMainImage(index) {
      currentIndex = index;
      updateLightboxImage();
  }
  
  updateLightboxImage();
  
  document.addEventListener('keydown', (e) => {
      if (document.getElementById('lightbox').style.display === 'flex') {
          if (e.key === 'ArrowLeft') {
              changeImage(-1);
          } else if (e.key === 'ArrowRight') {
              changeImage(1);
          }
      }
  });

  // Botão de Salvar
  document.addEventListener('DOMContentLoaded', () => {
    const botaoSalvar = document.getElementById('botaoSalvar');
    const iconeSalvar = document.getElementById('iconeSalvar');
  
    botaoSalvar.addEventListener('click', () => {  
      const salvar = localStorage.getItem('salvar');  
      if (salvar) {
        localStorage.removeItem('salvar');
        iconeSalvar.style.stroke = 'currentColor';
      } else {
        localStorage.setItem('salvar', 'Sitio Califórnia! Maravilhoso e pertinho da cidade');
        iconeSalvar.style.stroke = 'red';
      }
    });
  });

// Adicionar um event listener para o clique no botão
// Verificar se o botão está preenchido ou não e salvar o estado no Local Storage
