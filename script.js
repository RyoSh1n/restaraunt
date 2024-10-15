function scrollMenu(direction) {
    const menu = document.querySelector('.menu');
    const scrollAmount = 300; // Количество пикселей для прокрутки
    menu.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}