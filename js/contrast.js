document.addEventListener('input', (event) => {
      
  if (event.target.dataset.slider === 'brightness') {
      const parent = event.target.closest('.main_content');
      const img = parent.querySelector('.img');
      img.style.filter = "brightness(" + event.target.value + "%)";
  }

  if (event.target.dataset.slider === 'contrast') {
      const parent = event.target.closest('.main_content');
      const img = parent.querySelector('.img');
      img.style.filter = "contrast(" + event.target.value + "%)";
  }
})