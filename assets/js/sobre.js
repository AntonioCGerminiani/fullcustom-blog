document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.gallery-control.prev');
    const nextBtn = document.querySelector('.gallery-control.next');

    const totalItems = galleryItems.length;
   
    let currentIndex = Math.floor(totalItems / 2);

    function updateGallery() {
        galleryItems.forEach((item, index) => {
         
            item.classList.remove('active', 'prev-1', 'prev-2', 'next-1', 'next-2', 'hidden');

            let diff = (index - currentIndex + totalItems) % totalItems;
         
            if (diff > totalItems / 2) {
                diff -= totalItems;
            }

            if (diff === 0) {
                item.classList.add('active');
            } else if (diff === -1) {
                item.classList.add('prev-1');
            } else if (diff === -2) {
                item.classList.add('prev-2');
            } else if (diff === 1) {
                item.classList.add('next-1');
            } else if (diff === 2) {
                item.classList.add('next-2');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
      
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateGallery();
    });

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
     
        currentIndex = (currentIndex + 1) % totalItems;
        updateGallery();
    });

    updateGallery();
});