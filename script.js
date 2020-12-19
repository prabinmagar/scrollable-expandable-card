

const reviewsToggleBtn = document.querySelectorAll('.toggle-btn');


reviewsToggleBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentElement.nextElementSibling.classList.toggle('content-reviews-show');
    });
});