document.addEventListener("DOMContentLoaded", () => {
    const click2 = document.querySelector('#click2');
    const about = document.querySelector('#about');
    const header = document.querySelector('.header');
    const projects = document.querySelector('#projects');

    const skills = ['graphic designer', 'creative coder', 'multidisciplinary artist', 'product designer', 'problem solver'];
    const skillSpans = document.querySelectorAll('.skills');
    const skillTexts = document.querySelectorAll('.skill-text');
    let index = 0;

    function changeSkill() {
        skillTexts.forEach(skillText => {
            // Remove blur
            setTimeout(() => {
                skillText.classList.remove('blur');
            }, 10);

            // Set new skill text and add blur
            skillText.textContent = skills[index];
            setTimeout(() => {
                skillText.classList.add('blur');
            }, 1000);
        });

        // Update index for next skill
        index = (index + 1) % skills.length; // Loop back to the beginning when reaching the end
    }

    // Initial call to set the first skill
    changeSkill();

    // Set interval to change skill every 1.5 seconds (adjust as needed)
    setInterval(changeSkill, 1500);

    
    const headerOffset = header.offsetTop;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > headerOffset) {
            header.classList.add('fixed');
            projects.style.paddingTop = "7vw";
        } else {
            header.classList.remove('fixed');
            projects.style.paddingTop = "3vw";
        }
    });
    
    click2.addEventListener('click', function(event) {
        // Prevent event propagation to the home click event listener
        event.stopPropagation();

        about.style.display = "block";
        about.style.position = "fixed";
        setTimeout(function() {
            about.style.opacity = "1";
        }, 0); // Adjust this timeout as needed
        projects.style.filter = "blur(10px)";
        header.style.filter = "blur(10px)";
        projects.style.pointerEvents = 'none';
    });

    document.body.addEventListener('click', function(event) {
        // Check if click target is not inside the about box
        if (!about.contains(event.target) && about.style.display === "block") {
            about.style.opacity = "0";
            about.style.filter = "blur(7px)";
            setTimeout(function() {
                about.style.display = "none";
                about.style.filter = "blur(0px)";
            }, 500); // Adjust this timeout to match transition duration
            projects.style.filter = "blur(0px)"; 
            header.style.filter = "blur(0px)";  
            projects.style.pointerEvents = 'auto';
        }
    });


let mouseMoveCounter = 0;
const maxPoints = 5; // Maximum number of projpoints to keep

// Function to create projpoint divs
function createProjPoint(x, y) {
    const mousepoints = document.createElement('div');
    mousepoints.classList.add('projpoints');
    mousepoints.style.position = 'absolute';
    mousepoints.style.left = `${x}px`;
    mousepoints.style.top = `${y}px`;
    mousepoints.style.zIndex = `-2000`;
    projects.appendChild(mousepoints);

    // Set a timeout to remove the point after 1 second
    setTimeout(() => {
        mousepoints.style.transition = '.3s'; // Add transition for opacity fade-out
        mousepoints.style.backgroundColor = 'var(--black)';
        mousepoints.style.filter = 'blur(6px)';

        setTimeout(() => {
            if (mousepoints.parentNode) {
                projects.removeChild(mousepoints); // Remove the projpoint after fade-out
            }
        }, 500); // Adjust timing to match transition duration
    }, 2000); // Remove point after 1 second

    // Remove old projpoints if exceeding maxPoints
    const points = projects.querySelectorAll('.projpoints');
    if (points.length > maxPoints) {
        const oldestPoint = points[0];
        oldestPoint.style.backgroundColor = 'var(--black)';
        oldestPoint.style.transition = '.3s';
        oldestPoint.style.filter = 'blur(6px)';

        setTimeout(() => {
            if (oldestPoint.parentNode) {
                projects.removeChild(oldestPoint); // Remove the oldest projpoint after fade-out
            }
        }, 500); // Adjust timing to match transition duration
    }
}

// Event listener for mousemove to draw projpoints
projects.addEventListener('mousemove', (event) => {
    mouseMoveCounter++;

    // Draw projpoint every 8th mousemove
    if (mouseMoveCounter % 8 === 0) {
        const rect = projects.getBoundingClientRect();
        const mouseX = event.clientX + projects.scrollLeft - rect.left; // Adjust mouseX for horizontal scroll
        const mouseY = event.clientY - rect.top; // Calculate mouseY relative to #allprojects

        createProjPoint(mouseX, mouseY);
    }
});

});