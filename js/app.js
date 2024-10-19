const swiper = new Swiper('.swiper', {
	mousewheel: true,
	direction: 'vertical',
	speed: 1700, 
	parallax: true
})

document.querySelectorAll('.header-content h1').forEach(e => {
    e.innerHTML = e.textContent.replace(/\S/g, '<span class="letter">$&</span>');
    e.querySelectorAll('.letter').forEach(function(l, i) {
        l.setAttribute('style', `z-index: -${i}; transition-duration: ${i / 5 + 1}s`); // Виправлено
    });
});

// Додаємо обробник події для зміни слайдів
swiper.on('slideChange', function() {
    document.querySelectorAll('.header-content__slide').forEach(function(e, i) {
        if (swiper.activeIndex === i) {
            e.classList.add('active'); // Додаємо клас активному слайду
            e.querySelector('h1').classList.add('animate'); // Додаємо клас анімації до заголовка
        } else {
            e.classList.remove('active'); // Видаляємо клас з неактивних слайдів
            e.querySelector('h1').classList.remove('animate'); // Видаляємо клас анімації з неактивних заголовків
        }
    });
});