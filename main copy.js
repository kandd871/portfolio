// const tease = document.querySelector('.tease');
// const teaseRect = tease.getBoundingClientRect();

// // Array of image sources
// const images = [
//     'imgs/home-cover.png',
//     'imgs/blumenhaus-cover.png',
//     'imgs/weaving-cover.png',
//     'imgs/chamberlain-cover.png',
//     'imgs/stardew-cover.png',
// ];

// let highestZIndex = 1; // Initialize a variable to keep track of the highest z-index

// // Function to make elements draggable
// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

//     elmnt.onmousedown = dragMouseDown;

//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // Bring this element to the front
//         highestZIndex++;
//         elmnt.style.zIndex = highestZIndex;

//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//     }

//     function closeDragElement() {
//         // stop moving when mouse button is released:
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }

// // Create and place images

// // Create and place images
// images.forEach((src, index) => {
//     const img = document.createElement('img');
//     img.src = src;
//     img.id = 'img' + index;
//     img.style.position = 'absolute';
//     // img.style.width = '100px';
//     // img.style.height = '100px';
//     img.style.cursor = 'pointer';

//     // Calculate random positions within .tease dimensions
//     img.style.top = 100 + Math.random() * (teaseRect.height - 100) + 'px';
//     img.style.left = Math.random() * (teaseRect.width - 500) + 'px';
//     img.style.zIndex = 1; // Initialize z-index
//     tease.appendChild(img);
//     dragElement(img);
// });

