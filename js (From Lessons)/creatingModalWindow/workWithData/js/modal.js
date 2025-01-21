'use strict';

const btns = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('[data-close]');
const modalTimerId = setTimeout(openModal, 5000)

window.addEventListener('scroll', showModalByScroll);

function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.
        documentElement.scrollHeight - 1) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll)
    }
}

function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

btns.forEach(item => {
    item.addEventListener('click', openModal);
});

closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});
