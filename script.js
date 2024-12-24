//your JS code here. If required.
// Get DOM elements
const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentActive = 1;

// Add click event for next button
nextBtn.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;
        updateUI();
    }
});

// Add click event for prev button
prevBtn.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
        updateUI();
    }
});

function updateUI() {
    // Update circles
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Update connecting lines
    lines.forEach((line, idx) => {
        if (idx < currentActive - 1) {
            line.classList.add('active');
        } else {
            line.classList.remove('active');
        }
    });

    // Update button states
    prevBtn.disabled = currentActive === 1;
    nextBtn.disabled = currentActive === circles.length;
}

// Initial setup
updateUI();