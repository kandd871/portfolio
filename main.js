document.addEventListener("DOMContentLoaded", () => {

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
    const arrowsholder = document.querySelector('.arrowsholder');
    const footer = document.querySelector('.footer');
    const skills = ['graphic designer', 'creative coder', 'multidisciplinary artist', 'product designer', 'problem solver'];
    const skillSpans = document.querySelectorAll('.skills');
    const skillTexts = document.querySelectorAll('.skill-text');
    let index = 0;
    const boxes = document.querySelectorAll('.box');
    const subboxes = document.querySelectorAll('.subbox');
    
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '5px',
        threshold: 0.06
    };
    
    // Function to update projpoints styles
    function updateProjpoints(targetId) {
        projpoints.forEach(projpoint => {
            tooltiptext = projpoint.querySelector('.tooltiptext');
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
    
    let currentlyScaledBox = null;

// Function to update the blur state based on screen width
const updateBlurState = () => {
    const screenWidth = window.innerWidth;
    boxes.forEach(box => {
        if (screenWidth < 500) {
            box.style.filter = 'none';
        } else {
            box.style.filter = 'blur(10px)';
        }
    });
};

// Set the initial blur state for all boxes
updateBlurState();

// Create the intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const box = entry.target.closest('.box');
        if (window.innerWidth >= 500) {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
                if (currentlyScaledBox && currentlyScaledBox !== box) {
                    currentlyScaledBox.style.filter = 'blur(10px)';
                }
                const targetId = box.id;
                updateProjpoints(targetId);
                box.style.filter = 'blur(0px)'; // Remove blur from the new box
                currentlyScaledBox = box; // Update the reference to the currently scaled box
            } else if (currentlyScaledBox === box) {
                box.style.filter = 'blur(10px)';
                currentlyScaledBox = null; // Clear the reference as the box is no longer intersecting
            }
        } else {
            box.style.filter = 'none'; // Remove blur for screens less than 500px
        }
    });
}, options);

// Observe each .first element within each .box
boxes.forEach(box => {
    if (box) {
        observer.observe(box);
    }
});

// Add event listener to prevent blurring when scrolling vertically
window.addEventListener('scroll', () => {
    if (currentlyScaledBox && window.innerWidth >= 500) {
        currentlyScaledBox.style.filter = 'blur(0px)';
    }
}, true);

// Add event listener to update the currently scaled box on horizontal scroll
window.addEventListener('scroll', () => {
    if (currentlyScaledBox && window.innerWidth >= 500) {
        currentlyScaledBox.style.filter = 'blur(0px)';
    }
}, true);

// Add event listener to update blur state on window resize
window.addEventListener('resize', updateBlurState);



    const gridContainer = document.getElementById('graph');
    const countElement = document.getElementById('count');
    let count = 0;
    const maxCount = 9;
    const interval = 275;
    let rows = 54;
    let cols = 96;

    let col1 = 87; let row1 = 4;
    let col2 = 70; let row2 = 1;
    let col3 = 85; let row3 = 7;
    let col4 = 18; let row4 = 11;
    let col5 = 2; let row5 = 22;

    let col6 = 24; let row6 = 36;
    // let col7 = 72; let row7 = 36;
    
    let col8 = 6; let row8 = 51;
    let col9 = 92; let row9 = 47;   

    let col10 = 77; let row10 = 21;   

    // let col11 = 50; let row11 = 23;   

    let gridSize = .8;

        function setPointValues() {
            rows= 54;
            cols = 96;

            gridSize = .8;

            col1 = 87; row1 = 4;
            col2 = 70; row2 = 1;
            col3 = 85; row3 = 7;
            col4 = 18; row4 = 11;
            col5 = 2; row5 = 22;

            col6 = 24; row6 = 36;
            // col7 = 72; row7 = 36;
            
            col8 = 6; row8 = 51;
            col9 = 92; row9 = 47;
            col10 = 77; row10 = 21;  
            col11 = 47; row11 = 31;   

            const width = window.innerWidth;
            if (width <= 700) {
            rows= 68;
            cols = 42;

            gridSize = 1.65;

            col1 = 38; row1 = 6;
            col2 = 29; row2 = 1;
            col3 = 36; row3 = 10;

            col4 = 10; row4 = 17;
            col5 = 1; row5 = 30;

            col6 = 11; row6 = 50;
            // col7 = 30; row7 = 50;

            col8 = 3; row8 = 65;
            col9 = 38; row9 = 60;

            col10 = 30; row10 = 26;
            // col11 = 21; row11 = 36;   
            }
        }
    
        function createGrid() {
            gridContainer.innerHTML = ''; // Clear previous grid
            for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const cell = document.createElement('div');
                cell.className = 'grid-line';
                cell.dataset.row = row;
                cell.dataset.col = col;
                gridContainer.appendChild(cell);
    
                // Draw points at specific positions with custom text and unique IDs
                if (col === col1 && row === row1) {
                    drawPoint(row, col, gridContainer, '(BLUMENHAUS LOGO (RE)DESIGN, 2024)', 'pointA', '#blumenhaus');
                }
    
                if (col === col2 && row === row2) {
                    drawPoint(row, col, gridContainer, '(CHAMBERLAIN COFFEE DATA-DRIVEN PACKAGING, 2024)', 'pointB', '#chamberlain');
                }
    
                if (col === col3 && row === row3) {
                    drawPoint(row, col, gridContainer, '(THE MET COMMUNITY DRIVEN DESIGN, 2024)', 'pointC', '#weaving');
                }
    
                if (col === col4 && row === row4) {
                    drawPoint(row, col, gridContainer, '(MUTATED ODYSSEY, 2024)', 'pointD', '#mutated-odyssey');
                }

                if (col === col5 && row === row5) {
                    drawPoint(row, col, gridContainer, '(AIGA’S FIRST THINGS FIRST MANIFESTO, 2024)', 'pointE', '#first-things-first');
                }
    
                if (col === col6 && row === row6) {
                    drawPoint(row, col, gridContainer, '(EXPLORING ESCAPISM, 2023)', 'pointF', '#macbook');
                }
    
                // if (col === col7 && row === row7) {
                //     drawPoint(row, col, gridContainer, '(EXPLORING ESCAPISM PT. 2, 2023)', 'pointG', '#touch-some-grass');
                // }
    
                if (col === col8 && row === row8) {
                    drawPoint(row, col, gridContainer, '(HOME BOOK, 2023)', 'pointH', '#home-book');
                }
    
                if (col === col9 && row === row9) {
                    drawPoint(row, col, gridContainer, '(STARDEW TYPEFACE, 2023)', 'pointI', '#stardew');
                }

                    
                if (col === col10 && row === row10) {
                    drawPoint(row, col, gridContainer, '(EDITORIAL ILLUSTRATION, 2024)', 'pointJ', '#editorial');
                }

                // if (col === col11 && row === row11) {
                //     drawCross(row, col, gridContainer, '[ARCHIVE]', 'pointK', 'archive/archive.html');
                // }
            }
        }
             // Update grid template rows and columns based on current rows and cols
            // gridContainer.style.gridTemplateRows = `repeat(${rows}, ${gridSize}vw)`;
            // gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${gridSize}vw)`;
    }

    let previousWidth = window.innerWidth;

function handleResize() {
    const width = window.innerWidth;
    
    // Check for crossing the 700px threshold
    if ((previousWidth >= 700 && width < 700) || (previousWidth < 700 && width >= 700)) {
        setPointValues();
        createGrid();
    }
    
    previousWidth = width; // Update previousWidth for next resize event
}

// Initialize the grid on page load
setPointValues();
createGrid();
setTimeout(() => {
    incrementCount();
}, 2900);

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
        anchor.style.left = `${col * gridSize + gridSize/4}vw`; // Adjusting based on the provided code
        anchor.style.top = `${row * gridSize + gridSize/4}vw`; // Adjusting based on the provided code

        anchor.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor click behavior
            
            // Blur effect and other styling adjustments
            allprojects.style.filter = "blur(7px)";
            document.body.style.height = "auto";
            home.style.filter = "blur(7px)";
            projectsSection.style.animation = 'opacity 1s forwards ease-in';
        
            const targetId = anchor.getAttribute('href').substring(1); // Extract the id from the anchor's href attribute and remove the '#'
            const targetElement = document.getElementById(targetId); // Find the target element by id
        
            // Manually trigger the projpoints update
            updateProjpoints(targetId);
        
            setTimeout(function() {
                allprojects.style.filter = "blur(0px)";
                home.style.height = '0';
                document.body.style.overflow = "scroll";
                arrowsholder.style.visibility = "visible";
                arrowsholder.style.opacity = "1";
                arrowsholder.style.filter = "blur(0px)";
                footer.style.visibility = "visible";
                
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
                
            }, 250);

            setTimeout(function() {
                if (targetElement) {
                    // Scroll both vertically and horizontally to the target position
                    setTimeout(() => {
                        allprojects.scrollTo({
                            top: 0,
                            left: targetElement.offsetLeft,
                            behavior: 'smooth'
                        });
                    }, 250);
                    
                }
            }, 310);
        });
        
        
        
        // Create the point
        const point = document.createElement('div');
        point.className = 'point';
        point.id = `${id}-point`;
        point.style.zIndex = '200';
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
            point.style.transition = '.5s';
        });
    }

    // function drawCross(row, col, container, text, id, url) {
    //     // Create the anchor tag
    //     const anchor = document.createElement('a');
    //     anchor.href = url;
    //     anchor.style.textDecoration = 'none';
    //     anchor.style.width = '1.2vw';
    //     anchor.style.height = '1.2vw';
    //     anchor.style.position = 'absolute';
    //     anchor.style.cursor = "pointer";
    //     anchor.style.left = `${col * gridSize + gridSize/4}vw`; // Adjusting based on the provided code
    //     anchor.style.top = `${row * gridSize + gridSize/4}vw`; // Adjusting based on the provided code
    
    //     const cross = document.createElement('div');
    //     cross.className = 'cross';
    
    //     // Create the text below the 'X'
    //     const crossText = document.createElement('div');
    //     crossText.className = 'cross-text';
    //     crossText.id = `${id}-text`;
    //     crossText.innerText = text;
    //     crossText.style.top = '1.0vw'; // Slightly adjusted to ensure the text appears below the 'X'
    //     crossText.style.zIndex = '1';

    //     cross.appendChild(crossText);
    //     anchor.appendChild(cross);
    //     container.appendChild(anchor);

    //     // Add hover event to make text visible permanently
    //    cross.addEventListener('mouseover', () => {
    //     crossText.style.opacity = '1';
    //     crossText.style.visibility = 'visible';
    // });
    // }
    

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
    
    projpoints.forEach(projpoint => {
        projpoint.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const targetId = projpoint.dataset.target;
            updateProjpoints(targetId);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Scroll both vertically and horizontally to the target position
                setTimeout(() => {
                    if (home.style.height === "0") {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        allprojects.scrollTo({
                            top: 0,
                            left: targetSection.offsetLeft,
                            behavior: 'smooth'
                        });
                    } else {
                        allprojects.scrollTo({
                            top: 0,
                            left: targetSection.offsetLeft,
                            behavior: 'smooth'
                        });
                }
            }, 250);
                
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const headerOffset = document.querySelector('#projects').offsetTop;
        const tooltiptexts = document.querySelectorAll('.tooltiptext');
        const header = document.querySelector('#headertwo');
        const allprojects = document.querySelector('#allprojects');
        const projnav = document.querySelector('#projnav');
        const brackets = document.querySelectorAll('.bracket1');
        const screenWidth = window.innerWidth;

        if (screenWidth >= 500) {
            if (window.scrollY > headerOffset) {
                header.classList.add('fixed');
                allprojects.style.paddingTop = "5vw";
                projnav.style.marginTop = "-0.5vw";
                brackets.forEach(bracket => {
                    bracket.style.top = "-.1rem";
                });  
                tooltiptexts.forEach(tooltiptext => {
                    tooltiptext.style.marginTop = ".175vw";
                });   
            } else {
                header.classList.remove('fixed');
                allprojects.style.paddingTop = "1vw";
                projnav.style.marginTop = "0vw";
                brackets.forEach(bracket => {
                    bracket.style.top = "-.17rem";
                }); 
                tooltiptexts.forEach(tooltiptext => {
                    tooltiptext.style.marginTop = "0vw";
                }); 
            }
        }   else if (screenWidth < 500) {
            if (window.scrollY > headerOffset) {
                arrowsholder.classList.add('fixed2');
                header.classList.add('fixed3');
                allprojects.style.paddingTop = "25vw";
              
            } else {
                arrowsholder.classList.remove('fixed2');
                header.classList.remove('fixed3');
                allprojects.style.paddingTop = "0vw";
                
            }
        
        } else {
            // Prevent scrolling above the header
        if (window.scrollY < headerOffset) {
            window.scrollTo(0, headerOffset);
        }
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
    allprojects.appendChild(mousepoints);

    // Set a timeout to remove the point after 1 second
    setTimeout(() => {
        mousepoints.style.transition = '.3s'; // Add transition for opacity fade-out
        mousepoints.style.backgroundColor = 'var(--black)';
        mousepoints.style.filter = 'blur(6px)';

        setTimeout(() => {
            if (mousepoints.parentNode) {
                allprojects.removeChild(mousepoints); // Remove the projpoint after fade-out
            }
        }, 500); // Adjust timing to match transition duration
    }, 2000); // Remove point after 1 second

    // Remove old projpoints if exceeding maxPoints
    const points = allprojects.querySelectorAll('.projpoints');
    if (points.length > maxPoints) {
        const oldestPoint = points[0];
        oldestPoint.style.backgroundColor = 'var(--black)';
        oldestPoint.style.transition = '.3s';
        oldestPoint.style.filter = 'blur(6px)';

        setTimeout(() => {
            if (oldestPoint.parentNode) {
                allprojects.removeChild(oldestPoint); // Remove the oldest projpoint after fade-out
            }
        }, 500); // Adjust timing to match transition duration
    }
}

// Function to create projpoint divs for #home section
function createHomeProjPoint(x, y) {
    const homemousepoints = document.createElement('div');
    homemousepoints.classList.add('homeprojpoints');
    homemousepoints.style.position = 'absolute';
    homemousepoints.style.left = `${x}px`;
    homemousepoints.style.top = `${y}px`;
    homemousepoints.style.zIndex = `-1`;
    home.appendChild(homemousepoints); // Append to #home section

    // Set a timeout to remove the point after 1 second
    setTimeout(() => {
        homemousepoints.style.transition = '.3s'; // Add transition for opacity fade-out
        homemousepoints.style.backgroundColor = 'var(--background)';
        homemousepoints.style.filter = 'blur(6px)';

        setTimeout(() => {
            if (homemousepoints.parentNode) {
                home.removeChild(homemousepoints); // Remove the projpoint after fade-out
            }
        }, 500); // Adjust timing to match transition duration
    }, 2000); // Remove point after 1 second

    // Remove old projpoints if exceeding maxPoints
    const homepoints = home.querySelectorAll('.homeprojpoints');
    const maxPoints = 5; // Maximum number of projpoints to keep for #home
    if (homepoints.length > maxPoints) {
        const homeoldestPoint = points[0];
        homeoldestPoint.style.backgroundColor = 'var(--black)';
        homeoldestPoint.style.transition = '.3s';
        homeoldestPoint.style.filter = 'blur(6px)';

        setTimeout(() => {
            if (homeoldestPoint.parentNode) {
                home.removeChild(homeoldestPoint); // Remove the oldest projpoint after fade-out
            }
        }, 500); // Adjust timing to match transition duration
    }
}

home.addEventListener('mousemove', (event) => {
    mouseMoveCounter++;

    if (mouseMoveCounter % 18 === 0) {
        const rect = home.getBoundingClientRect(); // Get the bounding rectangle of #allprojects
        const mouseX = event.clientX + allprojects.scrollLeft - rect.left; // Adjust mouseX for horizontal scroll
        const mouseY = event.clientY - rect.top; // Calculate mouseY relative to #allprojects

        createHomeProjPoint(mouseX, mouseY);
    }
});


// Event listener for mousemove to draw projpoints
allprojects.addEventListener('mousemove', (event) => {
    mouseMoveCounter++;

    // Draw projpoint every 8th mousemove
    if (mouseMoveCounter % 11 === 0) {
        const rect = allprojects.getBoundingClientRect(); // Get the bounding rectangle of #allprojects
        const mouseX = event.clientX + allprojects.scrollLeft - rect.left; // Adjust mouseX for horizontal scroll
        const mouseY = event.clientY - rect.top; // Calculate mouseY relative to #allprojects

        // Check if #home section's height is 0 before drawing projpoints
        if (home.clientHeight === 0) {
            createProjPoint(mouseX, mouseY);
        }
    }
});


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
                home.style.filter = "blur(10px)";
                allprojects.style.filter = "blur(10px)";
                header.style.filter = "blur(10px)";
                arrowsholder.style.filter = "blur(10px)";
                home.style.pointerEvents = 'none';
            });


        click2.addEventListener('click', function(event) {
            // Prevent event propagation to the home click event listener
            event.stopPropagation();

            about2.style.display = "block";
            about2.style.position = "fixed";
            setTimeout(function() {
                about2.style.opacity = "1";
            }, 0); // Adjust this timeout as needed
            allprojects.style.filter = "blur(10px)";
            header.style.filter = "blur(10px)";
            home.style.filter = "blur(10px)";
            allprojects.style.pointerEvents = 'none';
            arrowsholder.style.filter = "blur(10px)";
        });

        document.body.addEventListener('click', function(event) {
            // Check if click target is not inside the about box
            if (!about.contains(event.target) && about.style.display === "block") {
                about.style.opacity = "0";
                about.style.filter = "blur(7px)";
                setTimeout(function() {
                    about.style.display = "none";
                    about.style.filter = "blur(0px)";
                }, 250); // Adjust this timeout to match transition duration
                home.style.filter = "blur(0px)";
                allprojects.style.filter = "blur(0px)"; 
                header.style.filter = "blur(0px)";  
                arrowsholder.style.filter = "blur(0px)";
                home.style.pointerEvents = 'auto';
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
                }, 250); // Adjust this timeout to match transition duration
                allprojects.style.filter = "blur(0px)"; 
                header.style.filter = "blur(0px)"; 
                home.style.filter = "blur(0px)"; 
                arrowsholder.style.filter = "blur(0px)";
                allprojects.style.pointerEvents = 'auto';
            }
        });

        nav.addEventListener('click', function(){
            home.style.height = '0';
            document.body.style.overflow = "scroll";
            document.body.style.height = "auto";
            home.style.filter = "blur(7px)";
            projectsSection.style.animation = 'opacity 1s forwards ease-in';
            footer.style.visibility = "visible";
            arrowsholder.style.visibility = "visible";
            arrowsholder.style.opacity = "1";
            arrowsholder.style.filter = "blur(7px)";
            setTimeout(function() {
                arrowsholder.style.filter = "blur(0px)";
            }, 250);
        })

        allnav.addEventListener('click', function(){
            home.style.height = '100vh';
            footer.style.visibility = "hidden";
            arrowsholder.style.visibility = "hidden";
            arrowsholder.style.opacity = "0";
            arrowsholder.style.filter = "blur(7px)";
            // document.body.style.overflow = "hidden";
            // document.body.style.height = "100vh";
            home.style.filter = "blur(7px)";
                setTimeout(function() {
                    home.style.filter = "blur(0px)";
                }, 250);
        })

        document.getElementById('up').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById('down').addEventListener('click', function() {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });

        document.getElementById('left').addEventListener('click', function() {
            const container = document.getElementById('allprojects');
            const box = document.querySelector('.box');
            const boxWidth = box ? box.offsetWidth : 0;
            container.scrollBy({
                left: -boxWidth, 
                behavior: 'smooth' // Smooth scrolling
            });
        });

        document.getElementById('right').addEventListener('click', function() {
            const container = document.getElementById('allprojects');
            const box = document.querySelector('.box');
            const boxWidth = box ? box.offsetWidth : 0;
            container.scrollBy({
                left: boxWidth, // Scroll right by the width of .box
                behavior: 'smooth' // Smooth scrolling
            });
        });

        const observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.05 // 1% of the element is visible
        };
        const width = window.innerWidth;
        const observerCallback = (entries, observer2) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    projectsSection.style.backgroundColor = '#c8c8c8';
                    click2.style.filter = `blur(0px)`;
                    home.style.filter = "blur(4px)";
                    click2.style.opacity = `1`;
                    header.style.background = `linear-gradient(180deg, rgba(200,200,200,1) 0%, rgba(200,200,200,.75) 20%, rgba(200,200,200,0) 100%)`;  
                    if (width >= 700) {
                    subboxes.forEach(subbox => {
                    subbox.style.background = `background-color: rgba(197, 197, 197, 0.75)`;
                    subbox.style.border = `1.5px dotted #404040`;
                    }) 
                } else {
                    subboxes.forEach(subbox => {
                        subbox.style.background = `background-color: rgba(197, 197, 197, 0.75)`;
                        subbox.style.border = `1px dotted #404040`;
                        })
                    }
                    
                    projectsSection.style.transition = '.4s';

                    arrowsholder.style.visibility = "visible";
                    arrowsholder.style.opacity = "1";
                    arrowsholder.style.filter = "blur(7px)";
                    setTimeout(function() {
                        arrowsholder.style.filter = "blur(0px)";
                    }, 250);
                } else {
                    projectsSection.style.backgroundColor = '#404040';
                    projectsSection.style.transition = '.4s';
                    click2.style.filter = `blur(4px)`;
                    click2.style.opacity = `0`;
                    header.style.background = 'none';
                    if (width >= 700) {
                    subboxes.forEach(subbox => {
                        subbox.style.background = `none`;
                        subbox.style.border = `1.5px dotted #c8c8c8`;
                    })
                     }   
                    arrowsholder.style.visibility = "hidden";
                    arrowsholder.style.opacity = "0";
                    arrowsholder.style.filter = "blur(7px)";
                    home.style.filter = "blur(0px)";
                }
            });
        };
    
        const observer2 = new IntersectionObserver(observerCallback, observerOptions);
        observer2.observe(projectsSection);

});