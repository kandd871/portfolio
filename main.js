document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById('graph');

    // Create the 52x96 grid
    for (let row = 0; row < 52; row++) {
        for (let col = 0; col < 96; col++) {
            const cell = document.createElement('div');
            cell.className = 'grid-line';
            cell.dataset.row = row;
            cell.dataset.col = col;
            gridContainer.appendChild(cell);

            // Draw points at specific positions with custom text and unique IDs
            if (col === 89 && row === 1) {
                drawPoint(row, col, gridContainer, '(BLUMENHAUS LOGO (RE)DESIGN)', 'pointA', '#blumenhaus');
            }

            if (col === 84 && row === 4) {
                drawPoint(row, col, gridContainer, '(CHAMBERLAIN COFFEE DATA-DRIVEN PACKAGING)', 'pointB', '#chamberlain');
            }

            if (col === 80 && row === 8) {
                drawPoint(row, col, gridContainer, '(THE MET COMMUNITY DRIVEN DESIGN)', 'pointC', '#weaving');
            }

            if (col === 9 && row === 18) {
                drawPoint(row, col, gridContainer, '(MUTATED ODYSSEY)', 'pointD', '#mutated-odyssey');
            }

            if (col === 2 && row === 22) {
                drawPoint(row, col, gridContainer, '(AIGA’S FIRST THINGS FIRST MANIFESTO)', 'pointE', '#first-things-first');
            }

            if (col === 24 && row === 36) {
                drawPoint(row, col, gridContainer, '(EXPLORING ESCAPISM PT. 1)', 'pointF', '#macbook');
            }

            if (col === 72 && row === 36) {
                drawPoint(row, col, gridContainer, '(EXPLORING ESCAPISM PT. 2)', 'pointG', '#touch-some-grass');
            }

            if (col === 6 && row === 49) {
                drawPoint(row, col, gridContainer, '(HOME BOOK)', 'pointH', '#home-book');
            }

            if (col === 92 && row === 47) {
                drawPoint(row, col, gridContainer, '(STARDEW TYPEFACE)', 'pointI', '#stardew');
            }
        }
    }


    let currentIndex = 0;
            const images = document.querySelectorAll('.carousel img');
            const totalImages = images.length;

            // Ensure the first image is active on load
            images[currentIndex].classList.add('active');

            function showImage(index) {
                images.forEach((img, i) => {
                    img.classList.toggle('active', i === index);
                });
            }

            document.querySelector('.carousel').addEventListener('click', function(event) {
                const carouselWidth = this.offsetWidth;
                const clickX = event.clientX;

                if (clickX < carouselWidth / 2) {
                    // Left side clicked
                    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
                } else {
                    // Right side clicked
                    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
                }

                showImage(currentIndex);
            });

});

function drawPoint(row, col, container, text, id, url) {
    // Create the anchor tag
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.style.position = 'absolute';
    anchor.style.left = `${col * 0.8 + 0.2}vw`; // Adjusting based on the provided code
    anchor.style.top = `${row * 0.8 + 0.2}vw`; // Adjusting based on the provided code

    anchor.addEventListener('click', (event) => {
        document.body.style.overflow = "scroll";
        document.body.style.height = "auto";
        allprojects.style.filter = "blur(7px)";
        home.style.filter = "blur(7px)";
        setTimeout(function() {
            allprojects.style.filter = "blur(0px)";
        }, 500);
        // home.style.display = "none";
    });
    // Create the point
    const point = document.createElement('div');
    point.className = 'point';
    point.id = `${id}-point`;
    point.style.zIndex = '2';
    anchor.appendChild(point);

    // Create the text below the point
    const pointText = document.createElement('div');
    pointText.className = 'point-text';
    pointText.id = `${id}-text`;
    pointText.innerText = text;
    pointText.style.top = '1.0vw'; // Slightly adjusted to ensure the text appears below the point
    pointText.style.zIndex = '1';
    anchor.appendChild(pointText);

    container.appendChild(anchor);

    // Add hover event to make text visible permanently
    point.addEventListener('mouseover', () => {
        pointText.style.visibility = 'visible';
        pointText.style.opacity = '1';
        point.style.filter = 'blur(2px)';
    });
}

const about = document.getElementById('about');
const about2 = document.getElementById('about2');
const home = document.getElementById('home');
const projectsSection = document.getElementById('projects-section');
const projects = document.getElementById('projects');
const click1 = document.getElementById('click1');
const nav = document.getElementById('nav');
const allnav = document.getElementById('allnav');
const graph = document.getElementById('graph');
const header = document.getElementById('headertwo');
var allprojects = document.getElementById('allprojects');

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

click1.addEventListener('click', function(event) {
        // Prevent event propagation to the home click event listener
        event.stopPropagation();

        about.style.display = "block";
        about.style.position = "fixed";
        setTimeout(function() {
            about.style.opacity = "1";
        }, 50); // Adjust this timeout as needed
        home.style.filter = "blur(7px)";
        allprojects.style.filter = "blur(7px)";
        header.style.filter = "blur(7px)";
    });


click2.addEventListener('click', function(event) {
    // Prevent event propagation to the home click event listener
    event.stopPropagation();

    about2.style.display = "block";
    about2.style.position = "fixed";
    setTimeout(function() {
        about2.style.opacity = "1";
    }, 0); // Adjust this timeout as needed
    allprojects.style.filter = "blur(7px)";
    header.style.filter = "blur(7px)";
    home.style.filter = "blur(7px)";
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
        home.style.filter = "blur(0px)";
        allprojects.style.filter = "blur(0px)"; 
        header.style.filter = "blur(0px)";  
    }
});

document.body.addEventListener('click', function(event) {
    // Check if click target is not inside the about box
    if (!about2.contains(event.target) && about2.style.display === "block") {
        about2.style.opacity = "0";
        about2.style.filter = "blur(7px)";
        setTimeout(function() {
            about2.style.display = "none";
            about2.style.filter = "blur(0px)";
        }, 500); // Adjust this timeout to match transition duration
        allprojects.style.filter = "blur(0px)"; 
        header.style.filter = "blur(0px)"; 
        home.style.filter = "blur(0px)"; 
    }
});

nav.addEventListener('click', function(){
    home.style.height = '0';
    document.body.style.overflow = "scroll";
    document.body.style.height = "auto";
    home.style.filter = "blur(7px)";
    projectsSection.style.animation = 'opacity 1s forwards ease-in'
})

allnav.addEventListener('click', function(){
    home.style.height = '100vh';
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    home.style.filter = "blur(7px)";
        setTimeout(function() {
            home.style.filter = "blur(0px)";
        }, 500);
})

document.querySelectorAll('.box').forEach(box => {
    const content = box.querySelector('.content');
    const expandButton = content.querySelector('.expand');
    const info = content.querySelector('.info');
    const expandIcon = expandButton.querySelector('img');
    const closeButton = content.querySelector('.close');
    
    expandButton.addEventListener('click', () => {
        if (info.style.display === 'none' || info.style.display === '') {
            info.style.display = "block";
            info.style.filter = "blur(7px)";
            setTimeout(function() {
                info.style.opacity = "1";
                info.style.filter = "blur(0px)";
            }, 500);

            expandButton.textContent = '[CLOSE]';
        } else {
            info.style.opacity = "0";
            info.style.filter = "blur(7px)";
            setTimeout(function() {
                info.style.display = "none";
            }, 500);
            expandButton.textContent = '[DETAILS]';
        }
        setTimeout(() => {
            adjustProjectsSectionHeight();
        }, 500);
    });

    closeButton.addEventListener('click', () => {
        if (info.style.display === 'none' || info.style.display === '') {
            info.style.display = "block";
            info.style.filter = "blur(7px)";
            setTimeout(function() {
                info.style.opacity = "1";
                info.style.filter = "blur(0px)";
            }, 500);

            expandButton.textContent = '[CLOSE]';
        } else {
            info.style.opacity = "0";
            info.style.filter = "blur(7px)";
            setTimeout(function() {
                info.style.display = "none";
            }, 500);
            expandButton.textContent = '[DETAILS]';
            box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(() => {
            adjustProjectsSectionHeight();
        }, 500);
    });
});


window.addEventListener('scroll', function() {
    var headerOffset = projects.offsetTop;

    if (window.scrollY > headerOffset) {
        header.classList.add('fixed');
        allprojects.style.paddingTop = "8vw";
    } else {
        header.classList.remove('fixed');
        allprojects.style.padding = "1% 1.5% 1% 1.5%";
    }

    // Prevent scrolling above the header
    if (window.scrollY < headerOffset) {
        window.scrollTo(0, headerOffset);
    }
});

function adjustProjectsSectionHeight() {
    const projectsSection = document.getElementById('projects-section');
    projectsSection.style.height = projectsSection.scrollHeight * 1.1 + 'px';
}

window.addEventListener('load', adjustProjectsSectionHeight);
window.addEventListener('resize', adjustProjectsSectionHeight);
