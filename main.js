document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById('graph');
    const countElement = document.getElementById('count');
    let count = 0;
    const maxCount = 9;
    const interval = 500; // 0.5 seconds
    let rows = 52;
    let cols = 96;
    let col1 = 89; let row1 = 1;
    let col2 = 84; let row2 = 4;
    let col3 = 80; let row3 = 8;
    let col4 = 9; let row4 = 18;
    let col5 = 2; let row5 = 22;

    let col6 = 24; let row6 = 36;
    let col7 = 72; let row7 = 36;
    
    let col8 = 6; let row8 = 49;
    let col9 = 92; let row9 = 47;   

    let gridSize = .8;

        function setPointValues() {
            rows= 52;
            cols = 96;

            gridSize = .8;

            col1 = 89; row1 = 1;
            col2 = 84; row2 = 4;
            col3 = 80; row3 = 8;
            col4 = 9; row4 = 18;
            col5 = 2; row5 = 22;

            col6 = 24; row6 = 36;
            col7 = 72; row7 = 36;
            
            col8 = 6; row8 = 49;
            col9 = 92; row9 = 47;
            const width = window.innerWidth;
            if (width < 700) {
            rows= 96;
            cols = 52;

            gridSize = 1.35;

            col1 = 47; row1 = 1;
            col2 = 44; row2 = 6;
            col3 = 43; row3 = 11;

            col4 = 9; row4 = 34;
            col5 = 1; row5 = 41;

            col6 = 13; row6 = 72;
            col7 = 39; row7 = 72;

            col8 = 4; row8 = 92;
            col9 = 49; row9 = 86;
            }
        }
    
        function createGrid() {
            for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const cell = document.createElement('div');
                cell.className = 'grid-line';
                cell.dataset.row = row;
                cell.dataset.col = col;
                gridContainer.appendChild(cell);
    
                // Draw points at specific positions with custom text and unique IDs
                if (col === col1 && row === row1) {
                    drawPoint(row, col, gridContainer, '(BLUMENHAUS LOGO (RE)DESIGN)', 'pointA', '#blumenhaus');
                }
    
                if (col === col2 && row === row2) {
                    drawPoint(row, col, gridContainer, '(CHAMBERLAIN COFFEE DATA-DRIVEN PACKAGING)', 'pointB', '#chamberlain');
                }
    
                if (col === col3 && row === row3) {
                    drawPoint(row, col, gridContainer, '(THE MET COMMUNITY DRIVEN DESIGN)', 'pointC', '#weaving');
                }
    
                if (col === col4 && row === row4) {
                    drawPoint(row, col, gridContainer, '(MUTATED ODYSSEY)', 'pointD', '#mutated-odyssey');
                }
    
                if (col === col5 && row === row5) {
                    drawPoint(row, col, gridContainer, '(AIGA’S FIRST THINGS FIRST MANIFESTO)', 'pointE', '#first-things-first');
                }
    
                if (col === col6 && row === row6) {
                    drawPoint(row, col, gridContainer, '(EXPLORING ESCAPISM PT. 1)', 'pointF', '#macbook');
                }
    
                if (col === col7 && row === row7) {
                    drawPoint(row, col, gridContainer, '(EXPLORING ESCAPISM PT. 2)', 'pointG', '#touch-some-grass');
                }
    
                if (col === col8 && row === row8) {
                    drawPoint(row, col, gridContainer, '(HOME BOOK)', 'pointH', '#home-book');
                }
    
                if (col === col9 && row === row9) {
                    drawPoint(row, col, gridContainer, '(STARDEW TYPEFACE)', 'pointI', '#stardew');
                }
            }
        }
             // Update grid template rows and columns based on current rows and cols
            gridContainer.style.gridTemplateRows = `repeat(${rows}, ${gridSize}vw)`;
            gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${gridSize}vw)`;
    }

    function handleResize() {
        setPointValues();
        createGrid();
    }

    // Initialize the grid on page load
    setPointValues();
    createGrid();
    setTimeout(() => {
        incrementCount();
    }, 3500);

    window.addEventListener('resize', handleResize);

    function incrementCount() {
      if (count < maxCount) {
        count++;
        countElement.textContent = count;
        setTimeout(incrementCount, interval);
      }
    }


    
    function drawPoint(row, col, container, text, id, url) {
        // Create the anchor tag
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.style.position = 'absolute';
        anchor.style.left = `${col * gridSize + gridSize/4 + gridSize/39}vw`; // Adjusting based on the provided code
        anchor.style.top = `${row * gridSize + gridSize/4}vw`; // Adjusting based on the provided code
    
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

    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;
    const totalImages = images.length;
    let autoSlideInterval;
  
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
          img.classList.add('active');
        }
      });
    }
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    }
  
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(showNextImage, 1300);
    }
  
    // Initial auto slide setup
    autoSlideInterval = setInterval(showNextImage, 1300);
  
    carousel.addEventListener('click', function(event) {
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
      resetAutoSlide(); // Reset auto slide timer on user interaction
    });

            

    const projpoints = document.querySelectorAll('.projpoint');
    const boxes = document.querySelectorAll('.box');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // Trigger callback when 50% of the section is visible
    };

    // Create the intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                projpoints.forEach(projpoint => {
                    if (projpoint.dataset.target === targetId) {
                        projpoint.style.width = '1.1vw';
                        projpoint.style.height = '1.1vw';
                        projpoint.style.marginTop = '.9vw';
                         projpoint.style.filter = 'blur(0px)';
                    } else {
                        projpoint.style.width = '0.85vw';
                        projpoint.style.height = '0.85vw';
                        projpoint.style.marginTop = '1.1vw';
                        projpoint.style.filter = 'blur(2.6px)';
                    }
                });
            }
        });
    }, options);

    // Observe each project section
    boxes.forEach(box => {
        observer.observe(box);
    });

    // Add click event to each .projpoint to scroll to the corresponding section
    projpoints.forEach(projpoint => {
        projpoint.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const targetId = projpoint.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const headerOffset = document.querySelector('#projects').offsetTop;
        const header = document.querySelector('#headertwo');
        const allprojects = document.querySelector('#allprojects');

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

});

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
const projpoints = document.querySelectorAll('.projpoint')

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
                // adjustProjectsSectionHeight();
            }, 500);

            expandButton.textContent = '[HIDE DETAILS]';
        } else {
            info.style.opacity = "0";
            info.style.filter = "blur(7px)";
            setTimeout(function() {
                info.style.display = "none";
            }, 500);
            expandButton.textContent = '[SHOW DETAILS]';
            // adjustProjectsSectionHeight();
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
                // adjustProjectsSectionHeight();
            }, 500);

            expandButton.textContent = '[CLOSE]';
        } else {
            info.style.opacity = "0";
            info.style.filter = "blur(7px)";
            setTimeout(function() {
                info.style.display = "none";
                // adjustProjectsSectionHeight();
            }, 500);
            expandButton.textContent = '[SHOW DETAILS]';
            box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(() => {
            adjustProjectsSectionHeight();
        }, 500);
    });
});


// window.addEventListener('scroll', function() {
//     var headerOffset = projects.offsetTop;

//     if (window.scrollY > headerOffset) {
//         header.classList.add('fixed');
//         allprojects.style.paddingTop = "8vw";
//         projpoints.forEach(projpoint => {
//         projpoint.style.width = ".95vw";  
//         projpoint.style.height = ".95vw"; 
//         projpoint.style.marginTop = "1.2vw"; 
//         });
//     } else {
//         header.classList.remove('fixed');
//         allprojects.style.padding = "1% 1.5% 1% 1.5%";
//          projpoints.forEach(projpoint => {
//         projpoint.style.width = "1.1vw";  
//         projpoint.style.height = "1.1vw";
//         projpoint.style.marginTop = "0vw";
//         });
//     }

//     // Prevent scrolling above the header
//     if (window.scrollY < headerOffset) {
//         window.scrollTo(0, headerOffset);
//     }
// });

// function adjustProjectsSectionHeight() {
//     const projectsSection = document.getElementById('projects-section');
//     projectsSection.style.height = projectsSection.scrollHeight * 1 + 'px';
// }

// window.addEventListener('load', adjustProjectsSectionHeight);
// window.addEventListener('resize', adjustProjectsSectionHeight);

// let initialProjectsSectionHeight;

// function saveInitialProjectsSectionHeight() {
//     const projectsSection = document.getElementById('projects-section');
//     initialProjectsSectionHeight = projectsSection.scrollHeight;
// }

// function adjustProjectsSectionHeight() {
//     const projectsSection = document.getElementById('projects-section');
//     projectsSection.style.height = projectsSection.scrollHeight * 1 + 'px';
// }

// function resetProjectsSectionHeight() {
//     const projectsSection = document.getElementById('projects-section');
//     projectsSection.style.height = initialProjectsSectionHeight + 'px';
// }

// window.addEventListener('load', () => {
//     saveInitialProjectsSectionHeight();
//     adjustProjectsSectionHeight();
// });

// window.addEventListener('resize', adjustProjectsSectionHeight);

let initialProjectsSectionHeight;

function saveInitialProjectsSectionHeight() {
    const projectsSection = document.getElementById('projects-section');
    initialProjectsSectionHeight = projectsSection.scrollHeight;
}

function adjustProjectsSectionHeight() {
    const projectsSection = document.getElementById('projects-section');
    let additionalHeight = 0;

    document.querySelectorAll('.info').forEach(info => {
        if (info.style.display !== 'none') {
            additionalHeight += info.scrollHeight;
        }
    });

    projectsSection.style.height = initialProjectsSectionHeight + additionalHeight + 'px';
}

function resetProjectsSectionHeight() {
    const projectsSection = document.getElementById('projects-section');
    projectsSection.style.height = initialProjectsSectionHeight + 'px';
}

window.addEventListener('load', () => {
    saveInitialProjectsSectionHeight();
    adjustProjectsSectionHeight();
});

window.addEventListener('resize', adjustProjectsSectionHeight);

