// script.js
const book = document.querySelector('.book');
const frontCover = document.querySelector('.front-cover');
const backCover = document.querySelector('.back-cover');
const pages = document.querySelectorAll('.page');

let isOpen = false;

book.addEventListener('click', () => {
    if (!isOpen) {
        openBook();
    } else {
        closeBook();
    }
});

function openBook() {
    isOpen = true;
    frontCover.classList.add('open');
    backCover.classList.add('open');
    pages.forEach((page, index) => {
        page.style.transform = `translateZ(${10 + index * 2}px) rotateY(${index * 10}deg)`;
    });
}

function closeBook() {
    isOpen = false;
    frontCover.classList.remove('open');
    backCover.classList.remove('open');
    pages.forEach((page, index) => {
        page.style.transform = `translateZ(10px) rotateY(0deg)`;
    });
}