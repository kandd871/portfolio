document.addEventListener("DOMContentLoaded", () => {
        const anchor = document.querySelector('.anchor');
        const circle1 = document.querySelector('.circle');

        const randomDegree = Math.random() * 3 - 1.5; // Random degree between -2 and 2
        anchor.style.transform = `rotate(${randomDegree}deg)`;

        // Add hover event listener to reset rotation
        anchor.addEventListener('mouseenter', () => {
            anchor.style.transform = 'rotate(0deg)'; // Reset rotation on hover
        });

        anchor.addEventListener('mouseleave', () => {
            anchor.style.transform = `rotate(${randomDegree}deg)`; // Restore random rotation
        });
    
        // const randomDegree2 = Math.random() * 3 - 1.5; // Random degree between -2 and 2
        // circle1.style.transform = `rotate(${randomDegree2}deg)`;

        // // Add hover event listener to reset rotation
        // circle1.addEventListener('mouseenter', () => {
        //     circle1.style.transform = 'rotate(0deg)'; // Reset rotation on hover
        // });

        // circle1.addEventListener('mouseleave', () => {
        //     circle1.style.transform = `rotate(${randomDegree2}deg)`; // Restore random rotation
        // });
    

        // const circle = document.querySelector('.circle');
        // const text = circle.querySelector('.title');
        
        // function adjustCircleWidth() {
        //     const textWidth = text.scrollWidth; // Get the width of the text content
        //     circle.style.width = `${textWidth}px`; // Set the circle width based on text
        //     text.style.opacity = '1'; // Make sure the text is visible
        // }
        
        // // Initial adjustment after a delay
        // setTimeout(adjustCircleWidth, 800);
        
        // // Recalculate the width on window resize
        // window.addEventListener('resize', adjustCircleWidth);
        
        
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


// Create an IntersectionObserver instance to track when images enter the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class when the image is in view
            entry.target.classList.add('visible');
            // Stop observing the image once it has appeared
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Adjust this value to decide when the image should start appearing
});

// Select all images within the scroll section
const images = document.querySelectorAll('.scroll img');

// Attach the observer to each image
images.forEach(image => {
    observer.observe(image);
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


