document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const ratingContainer = document.getElementById('ratingContainer');
    const redirectButton = document.getElementById('redirectButton');

    stars.forEach(star => {
        star.addEventListener('mouseover', function () {
            resetStars();
            highlightStars(this);
        });

        star.addEventListener('mouseout', resetStars);

        star.addEventListener('click', function () {
            const rating = this.getAttribute('data-rating');
            if (rating <= 3) {
                window.location.href = 'review.html';
            } else {
                window.location.href = 'reviews.html';
            }
        });
    });

    function resetStars() {
        stars.forEach(star => star.classList.remove('active'));
    }

    function highlightStars(selectedStar) {
        const selectedRating = selectedStar.getAttribute('data-rating');
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            if (star.getAttribute('data-rating') <= selectedRating) {
                star.classList.add('active');
            }
        }
    }
});
