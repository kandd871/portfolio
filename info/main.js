document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll('.grid-item');

    if (window.innerWidth >= 600) {
    gridItems.forEach(item => {
        const randomDegree = Math.random() * 2 - 1; // Random degree between -2 and 2
        item.style.transform = `rotate(${randomDegree}deg)`;

        // Add hover event listener to reset rotation
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'rotate(0deg)'; // Reset rotation on hover
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = `rotate(${randomDegree}deg)`; // Restore random rotation
        });
    });
    }
    
    
    let mouseMoveCounter = 0;
    const maxPoints = 5; // Maximum number of projpoints to keep

// Function to create projpoint divs
function createProjPoint(x, y) {
    const mousepoints = document.createElement('div');
    mousepoints.classList.add('projpoints');
    mousepoints.style.position = 'absolute';
    mousepoints.style.left = `${x}px`;
    mousepoints.style.top = `${y}px`;
    mousepoints.style.zIndex = `-100`;
    document.body.appendChild(mousepoints);

    // Set a timeout to apply styles for fade-out
    setTimeout(() => {
        mousepoints.style.transition = 'opacity 0.5s, filter 0.5s'; // Transition for fade-out
        mousepoints.style.opacity = '0'; // Fade-out opacity
        mousepoints.style.filter = 'blur(6px)';

        // Remove the projpoint after the fade-out
        setTimeout(() => {
            if (mousepoints.parentNode) {
                document.body.removeChild(mousepoints);
            }
        }, 300); // Match this timeout to transition duration
    }, 1300); // Adjust to keep the point visible for a brief time before fade-out

    // Remove old projpoints if exceeding maxPoints
    const points = document.body.querySelectorAll('.projpoints');
    if (points.length > maxPoints) {
        const oldestPoint = points[0];
        oldestPoint.style.transition = 'opacity 0.5s, filter 0.5s';
        oldestPoint.style.opacity = '0'; // Fade-out oldest point
        oldestPoint.style.filter = 'blur(6px)';

        setTimeout(() => {
            if (oldestPoint.parentNode) {
                document.body.removeChild(oldestPoint);
            }
        }, 300); // Ensure it matches the fade-out timing
    }
}

// Event listener for mousemove to draw projpoints
document.body.addEventListener('mousemove', (event) => {
    mouseMoveCounter++;

    // Draw projpoint every 15th mousemove
    if (mouseMoveCounter % 15 === 0) {
        const mouseX = event.clientX + window.scrollX; // Adjust for horizontal scroll
        const mouseY = event.clientY + window.scrollY; // Adjust for vertical scroll

        createProjPoint(mouseX, mouseY);
    }
});


document.addEventListener('scroll', function () {
    const gridContainer = document.querySelector('.grid-container');
    const topHeader = document.getElementById('top-header');
    
    // Check if the viewport width is 490px or less
    if (window.innerWidth <= 490) {
        // Get the distance of the gridContainer from the top of the page
        const gridTop = gridContainer.getBoundingClientRect().top;

        if (gridTop <= 0) {
            // If grid-container reaches the top of the viewport
            topHeader.style.opacity = '1';
        } else {
            // Otherwise, reset opacity
            topHeader.style.opacity = '0';
        }
    } else {
        // Reset opacity if width is greater than 490px
        topHeader.style.opacity = '0';
    }
});


});


