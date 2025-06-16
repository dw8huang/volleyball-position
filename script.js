const unitImages = {
    1: 'images/block-line_twoBlocks_noGap.png',
    2: 'images/block-line_twoBlocks_hasGap.png',
    3: 'images/block-line_oneBlock.png',
    4: 'images/block-cross_twoBlocks_noGap.png',
    5: 'images/block-cross_twoBlocks_hasGap.png',
    6: 'images/block-cross_oneBlock.png'
  };
  
  const previewImg = document.getElementById('preview-img');
  const intro = document.getElementById('intro');
  
  document.querySelectorAll('td[data-unit]').forEach(cell => {
    const unit = cell.dataset.unit;
  
    cell.addEventListener('mouseenter', () => {
      document.querySelectorAll(`td[data-unit="${unit}"]`)
        .forEach(c => c.classList.add('highlight'));
    });
    cell.addEventListener('mouseleave', () => {
      document.querySelectorAll(`td[data-unit="${unit}"]`)
        .forEach(c => c.classList.remove('highlight'));
    });
  
    cell.addEventListener('click', () => {
      // hide intro on first click
      if (intro) intro.style.display = 'none';
  
      // show corresponding image
      const src = unitImages[unit];
      if (!src) return;
      previewImg.src = src;
      previewImg.classList.add('visible');
    });
  });
  
  // Hide preview when clicking outside any data-unit cell
  document.body.addEventListener('click', e => {
    if (!e.target.matches('td[data-unit]')) {
      previewImg.classList.remove('visible');
    }
  });