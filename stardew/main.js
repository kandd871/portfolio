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
const imgs = document.querySelectorAll('.scroll img');

// Attach the observer to each image
imgs.forEach(image => {
    observer.observe(image);
});

    const text = document.getElementById('text');
    const tester = document.querySelector('.tester');
    const slider = document.getElementById('slider');
    const slider2 = document.getElementById('slider2');
    const colorPicker = document.getElementById('head');
    const colorPicker2 = document.getElementById('stroke');
    const colorPicker3 = document.getElementById('gradient');

    let weight = 50;
    let width = 50;

    // Set initial font variation settings
    text.style.fontVariationSettings = `'wdth' ${width}, 'wght' ${weight}`;

    // Set initial text stroke color and variable
    text.style.color = colorPicker.value;
    text.style.WebkitTextStrokeColor = colorPicker2.value;
    document.documentElement.style.setProperty('--stroke', colorPicker2.value);
    document.documentElement.style.setProperty('--stroke-rgb', hexToRgb(colorPicker2.value));

    // Event listeners for color pickers
    colorPicker.addEventListener("input", function(event) {
        text.style.color = event.target.value;
    });

    colorPicker2.addEventListener("input", function(event) {
        text.style.WebkitTextStrokeColor = event.target.value;
        document.documentElement.style.setProperty('--stroke', event.target.value);
        document.documentElement.style.setProperty('--stroke-rgb', hexToRgb(event.target.value));
    });


    colorPicker3.addEventListener("input", watchColorPicker3, false);

    function watchColorPicker3(event) {
    tester.style.background = `${event.target.value}`;
    // slider.style.boxShadow = `0px 0px 5px 4px rgba(${hexToRgb(event.target.value)}, .5)`;

    }


    // Event listeners for sliders
    slider.addEventListener('input', function (e) {
        width = e.target.value;
        text.style.fontVariationSettings = `'wdth' ${width}, 'wght' ${weight}`;
    });

    slider2.addEventListener('input', function (e) {
        weight = e.target.value;
        text.style.fontVariationSettings = `'wdth' ${width}, 'wght' ${weight}`;
    });

    const placeholderText = 'try me!';

    text.addEventListener('focus', function () {
        if (text.innerText.trim() === placeholderText) {
            text.innerText = '';
        }
    });

    text.addEventListener('blur', function () {
        if (text.innerText.trim() === '') {
            text.innerText = placeholderText;
        }
    });

    // Set initial check
    if (text.innerText.trim() === '') {
        text.innerText = placeholderText;
    }

    // Function to convert hex color code to RGB
    function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return r + ',' + g + ',' + b;
    }
});


